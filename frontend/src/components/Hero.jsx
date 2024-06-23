import React, { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";


const Hero = () => {
  const images = [img1, img2, img3, img4, img5, img7, img8];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.title = "Welcome to Ministry of Tourism Intranet";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4 ">
          Welcome to Ministry of Tourism Intranet
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover amazing features and services that await you.
        </p>
        <a
          href="/login"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
