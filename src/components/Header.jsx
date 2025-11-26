import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 md:px-20 py-5 sticky top-0 z-10 bg-[#fcf8e3]">
      <div className="text-x font-bold text-[25px] text-[#03045E]">
        *FA*
      </div>
      <nav>
        <ul className="flex space-x-8 text-slg font-l text-[20x] text-[#3f3f3f]">
          <li><a href="#home" className="hover:text-[#e5cc40]">Home</a></li>
          <li><a href="#about" className="hover:text-[#e5cc40]">About</a></li>
          <li><a href="#contact" className="hover:text-[#e5cc40]">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;