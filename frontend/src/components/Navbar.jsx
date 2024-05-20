import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const options = [
    { name: "Home" },
    { name: "News" },
    { name: "Core", options: ["Orgaizational chart", "Departments"] },
    {
      name: "Admin Dash",
      options: ["Employes", "Departments", "Posts"],
    },
    { name: "Head Dash", options: ["Create Posts"] },
    {
      name: "Profile",
      options: ["Log In", "Log Out", "sign up", "Update"],
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white dark:bg-green-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} className="h-8 w-8" alt="Logo" />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {options.map((option, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none dark:hover:bg-gray-600">
                  {option.name}
                  {option.options && (
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                {option.options && (
                  <div className="absolute left-0 hidden group-hover:block bg-gray-800 dark:bg-gray-700 shadow-lg z-10">
                    {option.options.map((subOption, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/${subOption.toLowerCase().replace(/\s/g, "")}`}
                        className="block px-4 py-2 text-sm hover:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        {subOption}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {options.map((option, index) => (
            <div key={index} className="relative">
              <button className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 focus:outline-none dark:hover:bg-gray-600">
                {option.name}
                {option.options && (
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {option.options && (
                <div className="mt-1 bg-gray-800 dark:bg-gray-700 shadow-lg">
                  {option.options.map((subOption, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`/${subOption.toLowerCase().replace(/\s/g, "")}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {subOption}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
