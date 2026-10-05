"use client";

import { useEffect, useRef } from "react";

const BPM = 68;
const SWEEP_PX_PER_SEC = 150;
const GAP_PX = 36;
const STEP_PX = 2;

// One photoplethysmography beat: systolic peak, dicrotic notch, diastolic wave.
function ppg(phase) {
  const systolic = Math.exp(-(((phase - 0.16) / 0.065) ** 2));
  const diastolic = 0.42 * Math.exp(-(((phase - 0.4) / 0.11) ** 2));
  const notch = -0.06 * Math.exp(-(((phase - 0.3) / 0.025) ** 2));
  return systolic + diastolic + notch;
}

export default function Waveform({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let samples = [];
    let head = 0;
    let t = 0;
    let last = 0;
    let raf = 0;
    let running = false;
    const pointer = { x: -9999, active: false };

    const sampleAt = (x, time) => {
      const phase = ((time * BPM) / 60) % 1;
      const near = pointer.active ? Math.exp(-(((x - pointer.x) / 160) ** 2)) : 0;
      const breathing = 0.08 * Math.sin(time * 1.6);
      return ppg(phase) * (0.72 + 0.55 * near) + breathing;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.ceil(width / STEP_PX) + 1;
      samples = Array.from({ length: columns }, (_, i) => sampleAt(i * STEP_PX, (i * STEP_PX) / SWEEP_PX_PER_SEC));
      head = reduceMotion ? width * 0.82 : 0;
      t = width / SWEEP_PX_PER_SEC;
    };

    const yFor = (v) => height * 0.78 - v * height * 0.56;

    const strokeRange = (from, to, alphaFrom, alphaTo) => {
      if (to - from < STEP_PX) return;
      const grad = ctx.createLinearGradient(from, 0, to, 0);
      grad.addColorStop(0, `rgba(200, 241, 105, ${alphaFrom})`);
      grad.addColorStop(1, `rgba(200, 241, 105, ${alphaTo})`);
      ctx.strokeStyle = grad;
      ctx.beginPath();
      const start = Math.floor(from / STEP_PX);
      const end = Math.min(Math.floor(to / STEP_PX), samples.length - 1);
      for (let i = start; i <= end; i++) {
        const x = i * STEP_PX;
        const y = yFor(samples[i]);
        i === start ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.6;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      strokeRange(head + GAP_PX, width, 0.06, 0.28);
      strokeRange(0, head, 0.28, 1);

      const hi = Math.min(Math.floor(head / STEP_PX), samples.length - 1);
      const hy = yFor(samples[hi] ?? 0);
      ctx.save();
      ctx.shadowColor = "rgba(200, 241, 105, 0.9)";
      ctx.shadowBlur = 18;
      ctx.fillStyle = "#C8F169";
      ctx.beginPath();
      ctx.arc(head, hy, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const frame = (now) => {
      const dt = Math.min((now - (last || now)) / 1000, 0.05);
      last = now;
      const prev = head;
      t += dt;
      head += dt * SWEEP_PX_PER_SEC;
      if (head > width) head -= width;

      const from = Math.floor(prev / STEP_PX);
      const to = Math.floor(head / STEP_PX);
      const count = to >= from ? to - from : samples.length - from + to;
      for (let k = 1; k <= count; k++) {
        const i = (from + k) % samples.length;
        samples[i] = sampleAt(i * STEP_PX, t - ((count - k) * STEP_PX) / SWEEP_PX_PER_SEC);
      }

      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.active = e.clientY > rect.top - 240 && e.clientY < rect.bottom + 80;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    resize();
    draw();

    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    visibility.observe(canvas);
    const onVisibilityChange = () => (document.hidden ? stop() : start());
    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    resizeObserver.observe(canvas);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      visibility.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
