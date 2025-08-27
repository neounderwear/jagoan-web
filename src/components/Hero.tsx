import React from "react";
import Logo from "../assets/logo.png";

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 font-poppins">
      <img src={Logo} alt="Jagoan Underwear Logo" className="w-20 h-20 md:w-24 md:h-24 mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }} />
      <h1 className="font-extrabold text-5xl sm:text-6xl md:text-8xl tracking-wider leading-tight opacity-0 animate-fadeInUp " style={{ animationDelay: "0.4s" }}>
        JAGOAN
        <br />
        UNDERWEAR
      </h1>
      <p className="mt-4 text-base md:text-xl max-w-xl opacity-0 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
        Grosir Pakaian Dalam Premium di ITC Mangga Dua <br /> Lantai 3 Blok D No. 29
      </p>
      <div className="mt-10 cursor-pointer opacity-0 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
        <a href="#banner" className="flex flex-col items-center group">
          <span className="text-lg font-light">Selengkapnya</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 animate-bounce group-hover:animate-none">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
