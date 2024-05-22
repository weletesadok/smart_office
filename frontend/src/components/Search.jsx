import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions you need, such as making an API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Add your logic here after the search operation is complete
      console.log("Search for:", query);
    }, 2000); // Simulating a delay of 2 seconds
  };

  return (
    <div className="flex flex-1 items-center justify-center md:hidden sm:hidden">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="sm:flex sm:items-center ">
          <input
            id="q"
            name="q"
            className="inline w-full text-black rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="Keyword"
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : "Search"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
