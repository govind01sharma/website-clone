import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const menuItems = [
    { title: "Premier League", links: ["Home", "Fixtures", "Results", "Tables", "Transfers"] },
    { title: "Fantasy", links: ["Fantasy", "Fantasy Challenge", "Fantasy Draft"] },
    { title: "Football Community", links: ["Wider Football", "PL Charitable Fund", "Community"] },
    { title: "About", links: ["Overview", "What we do", "Governance", "Statement of Principles"] },
    { title: "More", links: ["History", "Hall of Fame", "Referees", "Managers"] },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#37003C] text-white border-b border-gray-700">
      <div className="flex items-center px-8 py-3">
        <div className="flex items-center space-x-10">
          <img src={logo} alt="logo" className="w-[80px] md:w-[100px] object-cover cursor-pointer" onClick={() => handleNavigation("/")} />
          <nav className="hidden md:flex space-x-8 font-semibold">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="bg-[#37003C] text-white px-4 py-2 focus:outline-none flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === index ? null : index);
                  }}
                >
                  {item.title} <span className="text-sm">▼</span>
                </button>

                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-[#9900CC] z-50 text-white shadow-lg rounded-md"
                      onMouseEnter={() => setOpenDropdown(index)}
                    >
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 p-2">
                        {item.links.map((link, linkIndex) => (
                          <button
                            key={linkIndex}
                            className="block text-left px-2 py-1 text-xs hover:bg-[#7700AA] w-full"
                            onClick={() =>
                              handleNavigation(
                                link === "Fixtures"
                                  ? "/fixtures"
                                  : link === "Results"
                                  ? "/results"
                                  : link === "Home"
                                  ? "/home"
                                  : link === "Tables"
                                  ? "/table"
                                  : "#"
                              )
                            }
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-6 ml-auto">
          <button className="bg-white text-black font-semibold px-4 py-2 hover:bg-gray-200"
          onClick={() => (window.location.href = "/signin")}>Sign in</button>
          <button className="bg-[#37003C] p-2">
            <AiOutlineSearch className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 justify-center py-4 text-gray-800 font-semibold text-sm">
            {[
              "Home",
              "Fixtures",
              "Results",
              "Tables",
              "Transfers",
              "Injury news",
              "Stats",
              "News",
              "Video",
              "Watch Live",
              "Tickets",
              "Clubs",
              "More",
            ].map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <button
                  className="group-hover:text-black"
                  onClick={() =>
                    handleNavigation(
                      item === "Fixtures"
                        ? "/fixtures"
                        : item === "Results"
                        ? "/results"
                        : item === "Home"
                        ? "/home"
                        : item === "Tables"
                        ? "/table"
                        : item === "Stats"
                        ? "/stats"
                        : item === "News"
                        ? "/news"
                        : "#"
                    )
                  }
                >
                  {item}
                </button>
                <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
