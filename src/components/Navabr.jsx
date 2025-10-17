import React from 'react';

const Navabr = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-primary-dark/90 backdrop-blur-sm shadow-lg">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-accent-blue hover:text-secondary-light transition duration-300">
          Sanjay R
        </a>
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-secondary-light hover:text-accent-blue transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile menu icon can be added here */}
      </nav>
    </header>
  );
};

export default Navabr;