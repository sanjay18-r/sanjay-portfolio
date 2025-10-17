import React from 'react';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const skills = {
    Frontend: ['React.js', 'Vite', 'TailwindCSS', 'GSAP', 'Three.js'],
    'AI/ML': ['Python', 'OpenCV', 'Tesseract', 'PaddleOCR', 'Pandas', 'Numpy'],
    Tools: ['Git', 'GitHub', 'Vercel',  'VS Code'],
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* --- Heading and Photo Section --- */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-12">
        {/* Photo (using the path we discussed) */}
        <img
          src="src/assests/pic.jpg" 
          alt="Sanjay R Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent-blue shadow-2xl mb-6 md:mb-0"
        />
        
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold mb-2 md:mb-4">
            About Me
          </h2>
          <p className="text-xl text-secondary-light/70">
            A blend of Artificial Intelligence and Creative Frontend Development.
          </p>
          <div className="w-16 h-1 bg-accent-blue mt-2"></div>
        </div>
      </div>
      {/* --- End Heading and Photo Section --- */}
      

      {/* --- Detailed Description Section --- */}
      <div className="space-y-6 text-lg text-secondary-light/90">
        <p>
          <FaGraduationCap className="inline mr-2 text-accent-blue" />
          I’m currently pursuing my B.TECH. I'm passionate about building intelligent systems that combine technology, creativity, and design.
        </p>
        <p>
          <FaCode className="inline mr-2 text-accent-blue" />
          I love working on projects involving  COMPUTER VISION, MACHINE LEARNING , and FRONTEND DEVELOPMENT — blending logic with visual storytelling. My recent work includes an ENERGY METER OCR SYSTEM using OpenCV, Tesseract, and PaddleOCR, capable of extracting and analyzing readings from live video streams.
        </p>
        <p>
          <FaRocket className="inline mr-2 text-accent-blue" />
          I also enjoy designing  INTERACTIVE 3-D PORTFOLIO using React, Three.js, and GSAP, creating smooth, engaging websites that merge creativity with performance.
        </p>
      </div>
      {/* --- End Detailed Description Section --- */}


      {/* --- Skills Section --- */}
      <h3 className="text-3xl font-semibold mt-16 mb-6 border-b-2 border-secondary-light/30 pb-1">
        Skills
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="bg-primary-dark p-6 rounded-xl border border-accent-blue/50 shadow-xl transition duration-300 hover:shadow-accent-blue/50 hover:border-accent-blue">
            <h4 className="text-xl font-bold mb-3 text-accent-blue">{category}</h4>
            <ul className="space-y-2">
              {list.map((skill) => (
                <li key={skill} className="flex items-center text-secondary-light/80">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* --- End Skills Section --- */}
    </div>
  );
};

export default About;