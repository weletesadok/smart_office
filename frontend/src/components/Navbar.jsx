import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import AnotherLogo from "../assets/logo2.svg";
import DarkModeToggle from "./DarkMode";
import GoogleTranslate from "./GoogleTranslate";
import useAuth from "./../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useGetAllDestinationsQuery } from "../features/destinations/placeSlice";
import ResultsModal from "./SearchResult";

const DropdownMenu = ({ options }) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {options.map((option, index) => (
        <div key={index} className="relative group">
          <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium  hover:bg-gray-600 focus:outline-none dark:hover:bg-gray-500">
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
            <div className="absolute left-0 hidden group-hover:block  bg-gray-800 dark:bg-gray-600 shadow-lg z-10">
              {option.options.map((subOption, subIndex) => (
                <Link
                  key={subIndex}
                  to={subOption.path}
                  className="block w-full px-4 py-2 text-sm hover:bg-gray-700 dark:hover:bg-gray-500"
                >
                  {subOption.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const NavBar = ({ options }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  document.documentElement.classList.add("dark");
  const [search, setSearch] = useState("");
  const [a, setA] = useState("");
  const [results, setResults] = useState(null);
  const {
    data: result,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useGetAllDestinationsQuery(a);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setA(search);
    setResults(result);
    setIsModalOpen(true);
  };
  function clearCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    console.log("All cookies cleared");
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isAdmin, isHead, email } = useAuth();

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
  const loginHandler = () => {
    navigate("/login");
  };
  const logoutHandler = async () => {
    localStorage.clear();
    clearCookies();
    location.reload();
  };

  return (
    <nav className="flex flex-wrap items-center bg-gray-100 justify-evenly dark:opacity-[1] dark:bg-[#223547]  sticky z-50 top-0 left-0 p-4">
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} className="w-16 mr-4" />
        </Link>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex flex-grow items-center justify-between min-w-[70%]"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 text-black flex-1 mx-auto"
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
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium focus:outline-none text-gray-600 dark:text-white"
              onClick={() => toggleDropdown(index)}
            >
              {!option.options && (
                <Link
                  className="text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                  to={option.path}
                >
                  {option.name}
                </Link>
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
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </button>
            {option.options && (
              <div
                className={`absolute left-0 shadow-lg z-10 ${
                  activeDropdown === index ? "block" : "hidden"
                } md:group-hover:block`}
              >
                {option.options.map((subOption, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subOption.path}
                    className="block px-4 py-2 dark:bg-[#223547] bg-white text-sm text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                  >
                    {subOption.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={email ? logoutHandler : loginHandler}
        className="text-black dark:hover:text-[#ba936f]  dark:text-white"
      >
        {!email ? "Sign Up / Sign In" : "Log out"}
      </button>
      {/* <DarkModeToggle /> */}

      <Link to="/" className="md:block">
        <img src={AnotherLogo} className="w-20 h-auto rounded-full" />
      </Link>
      <ResultsModal
        results={results}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </nav>
  );
};

const App = () => {
  const options = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    {
      name: "Core",
      options: [
        { name: "Structure", path: "/chart" },
        { name: "Departments", path: "/departments" },
        { name: "Places", path: "/places" },
      ],
    },
    {
      name: "Head",
      options: [
        { name: "Structure", path: "/structure" },
        { name: "Departments", path: "/departments" },
        { name: "Places", path: "/places" },
        { name: "Add News", path: "/news/new" },
      ],
    },
    {
      name: "Admin",
      options: [
        { name: "Add Place", path: "/destinations/new" },
        { name: "Users", path: "/users" },
      ],
    },

    {
      name: "About",
      path: "/about",
    },
  ];

  return <NavBar options={options} />;
};

export default App;
