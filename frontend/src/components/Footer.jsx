import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../hooks/useAuth";

const Footer = () => {
  const { isAdmin, isHead, email } = useAuth();
  const isLoggedIn = email ? true : false;

  const options = [
    { name: "Home", link: "/" },
    { name: "News", link: "/news" },
    { name: "Organizational chart", link: "/chart" },
    { name: "Employees", link: "/users" },
    { name: "Departments", link: "/departments" },
    { name: "Posts", link: "/" },
    { name: "Create Posts", link: "/posts/new" },
    { name: "Log In", link: "/login" },
    { name: "Sign Up", link: "/register" },
    { name: "Contact us", link: "/contact" },
    { name: "News letter", link: "/news" },
    { name: "Places", link: "/places" },
  ];

  const filterOptions = (options, isAdmin, isLoggedIn, isHead) => {
    return options.filter((option) => {
      if (option.name === "Create Posts" && !isAdmin) return false;
      if (option.name === "Edit Profile" && !isLoggedIn) return false;
      if ((option.name === "Log In" || option.name === "Sign Up") && isLoggedIn)
        return false;
      return true;
    });
  };

  const filteredOptions = filterOptions(options, isAdmin, isLoggedIn, isHead);

  return (
    <footer className="dark:bg-[#223547] bg-gray-200 dark:text-white  dark:opacity-[0.9]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-4">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div className="max-w-md pr-16 text-md">Follow us on</div>
              <div className="flex space-x-2">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <ul role="list" className="mt-6 space-y-4">
                    {filteredOptions.slice(0, 3).map((option, index) => (
                      <li key={index}>
                        <Link
                          to={option.link}
                          className="text-md leading-6 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                        >
                          {option.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <ul role="list" className="mt-6 space-y-4">
                    {filteredOptions.slice(3, 6).map((option, index) => (
                      <li key={index}>
                        <Link
                          to={option.link}
                          className="text-md leading-6 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                        >
                          {option.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <ul role="list" className="mt-6 space-y-4">
                    {filteredOptions.slice(6, 9).map((option, index) => (
                      <li key={index}>
                        <Link
                          to={option.link}
                          className="text-md leading-6 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                        >
                          {option.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <ul role="list" className="mt-6 space-y-4">
                    {filteredOptions.slice(9).map((option, index) => (
                      <li key={index}>
                        <Link
                          to={option.link}
                          className="text-md leading-6 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                        >
                          {option.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-400/30">
            <div className="text-md text-center pt-4">
              Copyright © 2024
              <span> Ministry Of Tourism</span>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
