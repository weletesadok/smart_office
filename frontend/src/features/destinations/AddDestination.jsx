import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useAddDestinationMutation, useGetAllDestinationsQuery } from "./placeSlice";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const NewDestination = () => {
  const [loading, setLoading] = useState(false);
  const [addDestination, { isLoading, isError, isSuccess, error }] = useAddDestinationMutation();
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const { refetch } = useGetAllDestinationsQuery();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    operatingHours: "",
    entryFee: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, files: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addDestination(formData);
      if (res.data?.destination) {

        navigate("/destinations")
      }
      refetch();
      if (isLoading) {
        setLoading(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setLoading(false);

        setFormData({
          name: "",
          description: "",
          category: "",
          operatingHours: "",
          entryFee: "",
          files: [],
        });

        if (isSuccess) {
          Navigate(to = "/destinations");

        }
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="mx-auto w-full max-w-[450px] opacity-[0.9] bg-gray-200 dark:bg-[#223547] dark:text-white rounded-lg shadow-lg">
        <form className="py-4 px-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter destination name"
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="description"
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter destination description"
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="Historical">Historical</option>
              <option value="Natural">Natural</option>
              <option value="Cultural">Cultural</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>




          <div className="mb-4">
            <input
              type="text"
              name="operatingHours"
              id="operatingHours"
              value={formData.operatingHours}
              onChange={handleChange}
              placeholder="Enter operating hours"
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              name="entryFee"
              id="entryFee"
              value={formData.entryFee}
              onChange={handleChange}
              placeholder="Enter entry fee"
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>

          <div className="mb-4 pt-2">
            <div className="mb-6">
              <input
                type="file"
                name="files"
                id="files"
                multiple
                onChange={handleFileChange}
                className="sr-only"
              />
              <label
                htmlFor="files"
                className="relative flex min-h-[150px] items-center justify-center rounded-md border border-dashed border-gray-600 p-6 text-center cursor-pointer"
              >
                <div>
                  <span className="mb-1 block text-lg font-semibold text-gray-200">
                    Drop files here
                  </span>
                  <span className="mb-1 block text-base font-medium text-gray-400">
                    Or
                  </span>
                  <span className="inline-flex rounded border border-gray-600 py-1 px-4 text-base font-medium text-gray-200">
                    Browse
                  </span>
                </div>
              </label>
            </div>


            {formData.files.length > 0 && (
              <div className="mb-4">
                {formData.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between mb-2"
                  >
                    <span className="truncate pr-2 text-base font-medium text-gray-200">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      className="text-gray-200"
                      onClick={() => {
                        const newAttachments = formData.files.filter(
                          (_, i) => i !== index
                        );
                        setFormData({ ...formData, files: newAttachments });
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-md w-full rounded-md bg-blue-600 py-3 px-8 text-center text-lg font-semibold text-white outline-none"
            >
              {loading ? <ClipLoader color="#ffffff" size={20} /> : "Create Destination"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default NewDestination;
