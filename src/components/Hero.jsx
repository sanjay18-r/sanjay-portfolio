import React, { useEffect, useRef } from 'react';
import useHeroAnimation from '../animations/gsapAnimations';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const socialRef = useRef(null);

  // Use the custom hook for GSAP animation
  useHeroAnimation(titleRef, subtitleRef, buttonRef, socialRef);

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-64px)] w-full">
      <div className="max-w-3xl">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-extrabold text-secondary-light leading-tight opacity-0">
          Hi, I’m <span className="text-accent-blue">Sanjay R</span> 👋
        </h1>
        <p ref={subtitleRef} className="mt-4 text-xl md:text-2xl text-secondary-light/80 opacity-0">
          I build intelligent systems that blend AI/ML logic with creative 3D web experiences.
        </p>
        
        <div ref={buttonRef} className="mt-8 flex space-x-4 opacity-0">
          <a
            href="#contact"
            className="px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Let's Connect
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-secondary-light text-secondary-light font-semibold rounded-lg hover:bg-secondary-light/10 transition duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
        </div>

        <div ref={socialRef} className="mt-8 flex space-x-6 text-2xl opacity-0">
          <a href="mailto:sanjayr@example.com" target="_blank" rel="noopener noreferrer" className="text-secondary-light hover:text-accent-blue transition duration-300">
            <FaEnvelope />
          </a>
          <a href="https://github.com/sanjay18-r" target="_blank" rel="noopener noreferrer" className="text-secondary-light hover:text-accent-blue transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sanjayr" target="_blank" rel="noopener noreferrer" className="text-secondary-light hover:text-accent-blue transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;