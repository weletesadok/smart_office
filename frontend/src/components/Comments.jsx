import React from "react";

const Discussion = () => {
  const comments = [
    {
      id: 1,
      author: "Michael Gough",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      date: "2022-02-08",
      content:
        "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      id: 2,
      author: "Jese Leos",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      date: "2022-02-12",
      content: "Much appreciated! Glad you liked it ☺️",
    },
    {
      id: 3,
      author: "Bonnie Green",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
      date: "2022-03-12",
      content:
        "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
    },
    {
      id: 4,
      author: "Helene Engels",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
      date: "2022-06-23",
      content:
        "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Comments{"  "} ({comments.length})
          </h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-card-container rounded"
          >
            Post comment
          </button>
        </form>
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="p-6 mb-3 text-base bg-white rounded-lg dark:bg-gray-900"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src={comment.avatar}
                    alt={comment.author}
                  />
                  {comment.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate="true"
                    dateTime={comment.date}
                    title={new Date(comment.date).toLocaleDateString()}
                  >
                    {new Date(comment.date).toLocaleDateString()}
                  </time>
                </p>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              {comment.content}
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Discussion;
