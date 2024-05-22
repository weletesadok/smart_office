import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import AnotherLogo from "../assets/logo2.svg";

const DropdownMenu = ({ options }) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {options.map((option, index) => (
        <div key={index} className="relative group">
          <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 focus:outline-none dark:hover:bg-gray-500">
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
            <div className="absolute left-0 hidden group-hover:block bg-gray-800 dark:bg-gray-600 shadow-lg z-10">
              {option.options.map((subOption, subIndex) => (
                <Link
                  key={subIndex}
                  to={`/${subOption.toLowerCase().replace(/\s/g, "")}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-700 dark:hover:bg-gray-500"
                >
                  {subOption}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const NavBar = ({
  options,
  bgColor,
  fontFamily,
  fontWeight,
  fontSize,
  textColor,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav
      className="flex flex-wrap items-center justify-center text-white w-full"
      style={{
        backgroundColor: bgColor,
        fontFamily: fontFamily,
        color: textColor,
      }}
    >
      <div className="flex items-center flex-grow">
        <Link to="/">
          <img src={Logo} className="w-16 mr-4" />
        </Link>
        <form className="hidden md:flex flex-grow items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 text-black  min-w-[60%] mx-auto"
            style={{ fontSize: fontSize }}
          />
        </form>
      </div>
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}>
          <img
            className={`toggle ${isMenuOpen ? "hidden" : "block"}`}
            src="https://img.icons8.com/ios-filled/50/ffffff/menu.png"
            width="40"
            height="40"
            alt="Menu"
          />
          <img
            className={`toggle ${isMenuOpen ? "block" : "hidden"}`}
            src="https://img.icons8.com/ios-filled/50/ffffff/close-window.png"
            width="40"
            height="40"
            alt="Close"
          />
        </button>
      </div>
      <div
        className={`toggle w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option, index) => (
          <div key={index} className="relative group">
            <button
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 focus:outline-none dark:hover:bg-gray-500"
              onClick={() => toggleDropdown(index)}
            >
              {!option.options && (
                <Link to={`${option.name}`}>{option.name}</Link>
              )}
              {option.options && (
                <>
                  {option.name}

                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </>
              )}
            </button>
            {option.options && (
              <div
                className={`absolute left-0 bg-gray-700 text-white dark:text-white dark:bg-gray-600 shadow-lg z-10 ${
                  activeDropdown === index ? "block" : "hidden"
                } md:group-hover:block`}
              >
                {option.options.map((subOption, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`/${subOption.toLowerCase().replace(/\s/g, "")}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-500 dark:hover:bg-gray-400 hover:text-white"
                  >
                    {subOption}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/" className="hidden md:block">
        <img src={AnotherLogo} className="w-12  ml-4" />
      </Link>
    </nav>
  );
};

const App = () => {
  const options = [
    { name: "Home" },
    { name: "News" },
    { name: "Core", options: ["Structure", "Departments", "Gallery"] },
    {
      name: "Admin Dash",
      options: ["Employees", "Departments", "Posts"],
    },
    { name: "Head Dash", options: ["Create Posts"] },
    {
      name: "Profile",
      options: ["Log In", "Log Out", "Sign Up", "Edit"],
    },
  ];

  const bgColor = "#000";
  const fontFamily = "Arial, sans-serif";
  const fontWeight = "normal";
  const fontSize = "16px";
  const textColor = "#fff"; // Adding textColor prop

  return (
    <NavBar
      options={options}
      bgColor={bgColor}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      textColor={textColor} // Passing textColor prop
    />
  );
};

export default App;
