import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
// import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="relative w-80 h-64 md:w-80 md:h-72 mx-auto"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
    >
      {/* Front of the card */}
      <animated.div
        className="absolute w-full h-full rounded-none shadow-sm flex flex-col items-center justify-center"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          cursor: "pointer",
        }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-center py-2">
          <p className="text-green-400 font-semibold text-lg">{title}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </animated.div>

      {/* Back of the card */}
      <animated.div
        className="absolute w-full h-full bg-[#181818] p-4 rounded-none text-center flex flex-col items-center justify-center border border-white"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateY(180deg)`),
        }}
      >
        <h5 className="text-xl font-semibold mb-2 text-[#3dcc61]">{title}</h5>
        <p className="text-[#adbeb1] mb-4">{description}</p>
        <a href={gitUrl} className="text-yellow-500 underline">View Project</a>
      </animated.div>
    </div>
  );
};

export default ProjectCard;
