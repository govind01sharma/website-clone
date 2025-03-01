import React, { useState } from "react";
import logo from "../assets/images/logo.png";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: "Premier League",
      links: [
        "Home", "Fixtures", "Results", "Tables", "Transfers", "Injury news", "Stats",
        "News", "Video", "Watch Live", "Tickets", "Clubs", "Players", "Awards"
      ],
    },
    {
      title: "Fantasy",
      links: ["Fantasy", "Fantasy Challenge", "Fantasy Draft"],
    },
    {
      title: "Football Community",
      links: [
        "Wider Football", "PL Charitable Fund", "Community", "Youth Development",
        "No Room for Racism", "Inside Matters", "Rainbow Laces", "Poppy", "More than a game"
      ],
    },
    {
      title: "About",
      links: [
        "Overview", "What we do", "Governance", "Statement of Principles",
        "Inclusion", "Publications", "Partners", "Legal", "Safeguarding",
        "Careers", "Media", "Gender Pay Gap Report"
      ],
    },
    {
      title: "More",
      links: [
        "History", "Hall of Fame", "Referees", "Managers", "Man of the Match",
        "ePremier League", "Nike Ball Hub", "FAQs", "Contact Us",
        "Tickets", "Summer Series", "Mornings Live", "PL Player"
      ],
    },
  ];

  return (
    <header className="flex items-center px-8 py-3 bg-[#37003C] text-white border-b border-gray-700">
      {/* Logo and Navigation */}
      <div className="flex items-center space-x-10">
        <img src={logo} alt="logo" className="w-[80px] md:w-[100px] object-cover" />
        <nav className="hidden md:flex space-x-8 font-semibold">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="bg-[#37003C] text-white px-4 py-2 focus:outline-none flex items-center gap-1">
                {item.title} <span className="text-sm">▼</span>
              </button>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-[#9900CC] text-white shadow-lg 
                  transition-all duration-300 ease-out ${
                    openDropdown === index ? 'max-h-screen opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
                  }`}
              >
                {/* Arrow pointing in the middle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 
                  border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-[#9900CC]"></div>

                {/* Dropdown Content */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 p-2">
                  {item.links.map((link, linkIndex) => (
                    <a key={linkIndex} href="#" className="block px-2 py-1 text-xs hover:bg-[#7700AA]">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Sign in and Search Buttons */}
      <div className="flex items-center space-x-6 ml-auto">
        <button className="bg-white text-black font-semibold px-4 py-2 hover:bg-gray-200">
          Sign in
        </button>
        <button className="bg-[#37003C] p-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-1.5 1.5M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
    />
  </svg>
</button>

      </div>
    </header>
  );
}

export default Header;
