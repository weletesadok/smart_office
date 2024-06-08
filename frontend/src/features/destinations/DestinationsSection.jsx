import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useDeleteDestinationMutation,
  useGetAllDestinationsQuery,
} from "./placeSlice";
import useAuth from "../../hooks/useAuth";

const DestinationsSection = ({ destinationsData }) => {
  const [loadingId, setLoadingId] = useState(null);
  const [deletePost] = useDeleteDestinationMutation();
  const { refetch } = useGetAllDestinationsQuery();
  const { roles } = useAuth();
  const canEdit = roles?.includes("Admin");

  const trimContent = (content, maxLength = 150) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  const extractFilename = (path) => {
    return path.split("/").pop();
  };

  const isImage = (attachment) => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif"];
    const extension = extractFilename(attachment).split(".").pop();
    return imageExtensions.includes(extension.toLowerCase());
  };

  const handleDelete = async (id) => {
    try {
      setLoadingId(id);
      await deletePost(id);
      refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="w-full">
      <section className="flex w-full flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl dark:text-white">
            Destinations
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {destinationsData.map((destination) => (
            <div
              key={destination._id}
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col news-card"
            >
              {destination.attachments?.length > 0 && (
                <>
                  {isImage(destination.attachments[0]) ? (
                    <img
                      src={`http://localhost:8000/${extractFilename(
                        destination.attachments[0]
                      )}`}
                      alt="Destination img"
                      className="object-cover object-center w-full h-48"
                    />
                  ) : (
                    <video
                      src={`http://localhost:8000/${extractFilename(
                        destination.attachments[0]
                      )}`}
                      alt="Destination video"
                      className="object-cover object-center w-full h-48"
                      controls
                    />
                  )}
                </>
              )}
              {!destination.attachments.length && (
                <img
                  src="https://via.placeholder.com/300x200?text=No+Image"
                  alt="Placeholder"
                  className="object-cover object-center w-full h-48"
                />
              )}
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="w-full flex flex-col justify-between px-4 py-6 bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-black dark:text-gray-300">
                  <div>
                    <Link
                      to={`/destinations/${destination._id}`}
                      className="block mb-4 text-2xl font-black leading-tight hover:underline text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                    >
                      {destination.name}
                    </Link>
                    <p className="mb-4">
                      {trimContent(destination.description)}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/destinations/${destination._id}`}
                        className="inline-block pb-1 mr-2 text-base font-black uppercase border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                      >
                        Read More
                      </Link>
                      {canEdit && (
                        <>
                          {" "}
                          <Link
                            to={`/destinations/edit/${destination._id}`}
                            className="inline-block pb-1 mr-2 text-base font-black uppercase border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800 bg-green-500 px-2 py-1 rounded-md"
                          >
                            <FiEdit className="inline-block mr-1" />
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(destination._id)}
                            className="inline-block pb-1 text-base font-black uppercase border-b border-transparent hover:border-red-600 dark:hover:border-red-400 text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md"
                            disabled={loadingId === destination._id}
                          >
                            {loadingId === destination._id ? (
                              <ClipLoader color="#ffffff" size={20} />
                            ) : (
                              <FiTrash2 className="inline-block mr-1" />
                            )}
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationsSection;
