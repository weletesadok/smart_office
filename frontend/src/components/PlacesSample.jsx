import React from "react";
import { Link } from "react-router-dom";

const PlacesToVisit = () => {
  const places = [
    {
      title: "Lalibela",
      content:
        "Lalibela is famous for its rock-hewn churches, which are a significant part of Ethiopian history and a UNESCO World Heritage site. These monolithic churches were carved out of rock in the 12th century and are a testament to medieval engineering.",
      image:
        "https://images.unsplash.com/photo-1646647689780-308bd6f4f84d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    },

    {
      title: "Gondar",
      content:
        "Gondar, often referred to as the 'Camelot of Africa,' is renowned for its medieval castles and palaces. The Fasil Ghebbi, a fortress-city, is a UNESCO World Heritage site and a major tourist attraction.",
      image:
        "https://images.unsplash.com/photo-1608634193723-1865aa4416ce?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    },

    {
      title: "Danakil Depression",
      content:
        "One of the hottest and most inhospitable places on Earth, the Danakil Depression is famous for its colorful sulfur springs, acid pools, and vast salt pans. It's a unique geological wonder that attracts adventurous travelers.",
      image:
        "https://images.unsplash.com/photo-1516533075015-a3838414c3ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    },
  ];

  const trimContent = (content, maxLength = 150) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 my-4 bg-white dark:bg-[#223547] dark:text-white opacity-[0.9]">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl dark:text-white">
          Places to Visit
        </h2>
        <Link
          to="/places"
          className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600 dark:text-blue-400 dark:hover:border-blue-400"
        >
          Go to places page
        </Link>
      </div>
      <div className="flex flex-wrap -mx-4">
        {places.map((place, index) => (
          <div
            key={index}
            className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
          >
            <img
              src={place.image}
              alt={`${place.title} image`}
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-gray-200 dark:bg-gray-800 border  border-gray-400 dark:border-gray-700 text-black dark:text-gray-300">
                <div>
                  <Link
                    to={`/places/${index}`}
                    className="block mb-4 text-2xl font-black leading-tight hover:underline text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                  >
                    {place.title}
                  </Link>
                  <p className="mb-4">{trimContent(place.content)}</p>
                </div>
                <div>
                  <Link
                    to={`/places/${index}`}
                    className="inline-block pb-1 mt-2 text-base font-black  uppercase border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacesToVisit;
