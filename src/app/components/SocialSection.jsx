"use client";
import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, } from "react-icons/fa";
import { SiLeetcode , SiMedium} from "react-icons/si";


const SocialSection = () => {
  const socialMediaData = [
    { name: "GitHub", url: "https://github.com/ShristiSharan", icon: <AiFillGithub /> },
    { name: "Twitter", url: "https://twitter.com/shris_05", icon: <AiOutlineTwitter /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shristi-sharan-605543227/", icon: <FaLinkedinIn /> },
    { name: "Medium", url: "https://medium.com/@shristisharan05", icon: <SiMedium /> },
    { name: "Leetcode", url: "https://leetcode.com/sweeshh/", icon: <SiLeetcode /> },
    { name: "Instagram", url: "https://www.instagram.com/sharan_shristi/", icon: <AiFillInstagram /> },
  ];

  return (
    <div className="social-section fixed left-0 bottom-5 p-4">
      <div className="home-about-social-links flex flex-col items-center gap-2 relative">
        {socialMediaData.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.url}
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons bg-green-600 text-white font-bold rounded-full p-2 hover:shadow-yellow-400"
          >
            {socialMedia.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;

