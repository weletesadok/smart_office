import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDestinationByIdQuery } from "./placeSlice";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DestinationsDetailPage = () => {
  const { id } = useParams();
  const {
    data: destination,
    error,
    isLoading,
  } = useGetDestinationByIdQuery(id);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === destination.attachments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? destination.attachments.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 dark:bg-[#223547] dark:text-white opacity-[0.9]">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        {destination.name}
      </h2>
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/2 md:pr-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {destination.description}
          </p>
          <div className="mb-4">
            <Link
              to="/destinations"
              className="text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800 hover:underline"
            >
              Back to Destinations
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-4">
          {destination.attachments?.length > 0 && (
            <div className="relative overflow-hidden h-[460px] bg-gray-300 dark:bg-gray-700 rounded-lg">
              {destination.attachments[currentMediaIndex].includes(".mp4") ? (
                <video
                  controls
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  src={`http://localhost:8000/${destination.attachments[
                    currentMediaIndex
                  ]
                    .split("/")
                    .pop()}`}
                  alt={`Attachment ${currentMediaIndex + 1}`}
                ></video>
              ) : (
                <img
                  src={`http://localhost:8000/${destination.attachments[
                    currentMediaIndex
                  ]
                    .split("/")
                    .pop()}`}
                  alt={`Attachment ${currentMediaIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                />
              )}
              {destination.attachments.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-3 rounded-full shadow-md z-10"
                    onClick={prevMedia}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-3 rounded-full shadow-md z-10"
                    onClick={nextMedia}
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailPage;
