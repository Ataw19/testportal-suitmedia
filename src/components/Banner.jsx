import { useState, useEffect } from "react";

import heroImage from "../assets/hero-car.jpg";

const Banner = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-200">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      />

      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg">Ideas</h1>
        <p className="mt-4 text-xl drop-shadow-md">
          Where all our great things begin
        </p>
      </div>
    </div>
  );
};

export default Banner;
