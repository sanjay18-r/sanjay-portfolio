import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-secondary-light/10 p-4 text-center text-sm text-secondary-light/70 relative z-10">
      <p>
        &copy; {new Date().getFullYear()} Sanjay R. Built with React, Vite, and TailwindCSS.
      </p>
    </footer>
  );
};

export default Footer;