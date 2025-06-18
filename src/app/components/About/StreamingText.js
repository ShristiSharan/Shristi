import React, { useEffect, useState } from "react";

const keywords = [
  { word: "Shristi Sharan", className: "green" },
  { word: "Software development", className: "green" },
  { word: "Generative AI", className: "green" }
];

function highlightKeywords(text) {
  // Replace keywords with a unique marker
  let marked = text;
  keywords.forEach(({ word }, idx) => {
    marked = marked.replace(
      new RegExp(word, "g"),
      `[[[${idx}]]]`
    );
  });
  // Split by marker and wrap keywords
  const parts = marked.split(/(\[\[\[\d+\]\]\])/g).filter(Boolean);
  return parts.map((part, i) => {
    const match = part.match(/\[\[\[(\d+)\]\]\]/);
    if (match) {
      const idx = parseInt(match[1], 10);
      return (
        <span key={i} className={keywords[idx].className}>
          {keywords[idx].word}
        </span>
      );
    }
    return part;
  });
}

export default function StreamingText({ text, speed = 25 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <span style={{ whiteSpace: "pre-line" }}>
      {highlightKeywords(displayed)}
    </span>
  );
} 