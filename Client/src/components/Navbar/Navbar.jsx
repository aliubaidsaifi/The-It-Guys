import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Logo.png";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  { id: 1, name: "About", link: "/about" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "Projects", link: "/projects" },
  { id: 4, name: "Testimonials", link: "/testimonials" },
  { id: 5, name: "Blogs", link: "/blogs" },
  { id: 6, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 w-full bg-white dark:bg-black dark:text-white duration-300">
      <div className="px-5 sm:px-10 md:px-20"> 
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-20 h-auto" /> 
              <span className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
                
              </span>
            </Link>

          
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => (
                  <li key={id} className="py-4">
                    <Link
                      to={link}
                      className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2 transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
                <Link to="/contact">
                  <button className="primary-btn">Get in Touch</button>
                </Link>
                <DarkMode />
              </ul>
            </nav>

           
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all text-black dark:text-white"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all text-black dark:text-white"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>

      
        <ResponsiveMenu showMenu={showMenu} />
      </div>
    </div>
  );
};

export default Navbar;
