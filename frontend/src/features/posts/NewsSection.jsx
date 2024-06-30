import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";
import { useDeletePostMutation, useGetAllPostsQuery } from "./postsApiSlice";
import useAuth from "../../hooks/useAuth";

const NewsSection = ({ newsData }) => {
  const [loadingId, setLoadingId] = useState(null);
  const [deletePost] = useDeletePostMutation();
  const { refetch } = useGetAllPostsQuery();
  const { roles } = useAuth();
  const canEdit = roles?.includes("Admin") || roles?.includes("Head");

  const trimContent = (content, maxLength = 150) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  const trimTitle = (content, maxLength = 25) => {
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
      <section className="flex w-full flex-col justify-center max-w-6xl py-8 px-4 mx-auto sm:px-6 ">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl dark:text-white">
            News
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {newsData.map((news) => (
            <div
              key={news._id}
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col news-card"
            >
              {/* News Image/Video */}
              {news.attachments?.length > 0 && (
                <>
                  {isImage(news.attachments[0]) ? (
                    <img
                      src={`http://localhost:8000/${extractFilename(
                        news.attachments[0]
                      )}`}
                      alt="News img"
                      className="object-cover object-center w-full h-48"
                    />
                  ) : (
                    <video
                      src={`http://localhost:8000/${extractFilename(
                        news.attachments[0]
                      )}`}
                      alt="News video"
                      className="object-cover object-center w-full h-48"
                      controls
                    />
                  )}
                </>
              )}
              {/* Placeholder Image */}
              {!news.attachments.length && (
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
                      to={`/news/${news._id}`}
                      className="block mb-4 text-2xl font-black leading-tight hover:underline text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                    >
                      {trimTitle(news.title)}
                    </Link>
                    <p className="mb-4 ">{trimContent(news.detail)}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/news/${news._id}`}
                        className="inline-block pb-1 mr-2 text-base font-black uppercase border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                      >
                        Read More
                      </Link>
                      {canEdit && (
                        <>
                          {" "}
                          <Link
                            to={`/news/edit/${news._id}`}
                            className="inline-block pb-1 mr-2 text-base font-black uppercase border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800 bg-green-500 px-2 py-1 rounded-md"
                          >
                            <FiEdit className="inline-block mr-1" />
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(news._id)}
                            className="inline-block pb-1 text-base font-black uppercase border-b border-transparent hover:border-red-600 dark:hover:border-red-400 text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md"
                            disabled={loadingId === news._id}
                          >
                            {loadingId === news._id ? (
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <time
                                        pubdate="true"
                                        dateTime={news.createdAt}
                                        title={new Date(news.createdAt).toLocaleDateString()}
                                    >
                                        {new Date(news.createdAt).toLocaleDateString()}
                                    </time>
                                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
    </div>
  );
};

export default NewsSection;
