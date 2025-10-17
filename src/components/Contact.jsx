import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-accent-blue inline-block pb-2">
        Let's Connect
      </h2>
      <p className="text-xl text-secondary-light/90 mb-8">
        I’m currently open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-center space-x-4 bg-primary-dark p-4 rounded-lg shadow-inner">
          <FaEnvelope className="text-accent-blue text-2xl" />
          <a 
            href="mailto:sanjaydharsaan007@gmail.com" 
            className="text-secondary-light text-lg hover:text-accent-blue transition duration-300 font-medium"
          >
            sanjaydharsaan007@gmail.com
          </a>
        </div>
        
        <div className="flex justify-center space-x-8 text-4xl mt-8">
          <a 
            href="https://github.com/sanjay18-r" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary-light hover:text-accent-blue transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/sanjayr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary-light hover:text-accent-blue transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-8 text-sm text-secondary-light/60">
          *You can also find me on these platforms.*
        </p>
      </div>
    </div>
  );
};

export default Contact;