import React from "react";

const ResultsModal = ({ results, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
        <ul>
          {results.map((result) => (
            <li key={result._id} className="mb-2">
              <a
                href={`/destinations/${result._id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {result.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsModal;
