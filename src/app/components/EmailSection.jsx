"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_xwuvcwu'; // <-- Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_3adubes'; // <-- Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'KqO9nRqlWeW330EQe'; // <-- Your EmailJS public key

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEmailSubmitted(false);
    setLoading(true);
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();
    if (!email || !subject || !message) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setEmailSubmitted(true);
      setLoading(false);
      formRef.current.reset();
    } catch (err) {
      setError("Failed to send. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 from-[#18191E] via-[#23242a] to-[#18191E] relative"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-gradient-to-tr from-yellow-400/20 to-green-400/10 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h5 className="text-2xl font-bold text-white mb-2 text-center">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md mx-auto text-center">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-row gap-3 justify-center mb-8">
          <Link href="https://github.com/ShristiSharan">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/shristi-sharan-605543227/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-white block mb-1 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              placeholder="shristisharan05@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-white block text-sm mb-1 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              placeholder="Opportunity/Connect"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block text-sm mb-1 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              placeholder="Let's talk about..."
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1 text-center">{error}</p>}
          {emailSubmitted && <p className="text-green-500 text-sm mt-1 text-center">Email sent successfully!</p>}
          <button
            type="submit"
            className="relative bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
