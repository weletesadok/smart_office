import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useGetPostQuery,
  useUpdatePostMutation,
  useGetAllPostsQuery,
} from "./postsApiSlice";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: post,
    isLoading: isFetching,
    isError: fetchError,
  } = useGetPostQuery(id);
  const [
    updatePost,
    { isLoading: isUpdating, isError: updateError, isSuccess },
  ] = useUpdatePostMutation();
  const [loading, setLoading] = useState(false);
  const { email } = useAuth();
  const { refetch } = useGetAllPostsQuery();

  const [formData, setFormData] = useState({
    title: "",
    detail: "",
    email,
    department: "",
    files: [],
  });
  const [attachments, setAttachments] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        detail: post.detail,
        email: post.email,
        department: post.department,
        files: [],
      });
      setAttachments(post.attachments || []);
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData({ ...formData, files: [...formData.files, ...newFiles] });
  };

  const handleDeleteAttachment = (index) => {
    const newAttachments = attachments.filter((_, i) => i !== index);
    setAttachments(newAttachments);
  };

  const handleDeleteNewFile = (index) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    setFormData({ ...formData, files: newFiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updateData = {
        ...formData,
      };
      await updatePost({ id, ...updateData });
      refetch();
      navigate("/news");
      if (isSuccess) {
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setFormData({
          title: "",
          detail: "",
          email,
          department: "",
          files: [],
        });
      }, 2000);
    }
  };

  const getFileUrl = (attachment) => {
    const fileName = attachment.split("/").pop();
    return `http://localhost:8000/${fileName}`;
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === attachments.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? attachments.length - 1 : prevSlide - 1
    );
  };

  if (isFetching) {
    return <ClipLoader color="#ffffff" size={50} />;
  }

  if (fetchError) {
    return <p>Error loading post</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-[450px] bg-gray-800 rounded-lg shadow-lg">
        <div className="py-4 px-6">
          <h2 className="mb-4 text-xl font-semibold text-white">Attachments</h2>
          {attachments.length > 0 && (
            <div className="mb-4 relative">
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-2 py-1 rounded-md"
                onClick={handlePrevSlide}
              >
                Prev
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-2 py-1 rounded-md"
                onClick={handleNextSlide}
              >
                Next
              </button>
              <div className="flex space-x-4 overflow-x-auto">
                {attachments.map((attachment, index) => {
                  const fileUrl = getFileUrl(attachment);
                  const isImage =
                    fileUrl.match(/\.(jpeg|jpg|gif|png)$/) != null;
                  const isVideo = fileUrl.match(/\.(mp4|webm|ogg)$/) != null;

                  return (
                    <div
                      key={index}
                      className={`w-40 h-40 flex-shrink-0 flex items-center justify-center rounded-md ${
                        index === currentSlide ? "" : "hidden"
                      }`}
                    >
                      {isImage && (
                        <img
                          src={fileUrl}
                          alt={`attachment-${index}`}
                          className="max-w-full max-h-full"
                        />
                      )}
                      {isVideo && (
                        <video controls className="max-w-full max-h-full">
                          <source src={fileUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      <button
                        type="button"
                        className="absolute bottom-0 right-0 m-2 p-1 bg-red-600 text-white rounded-md"
                        onClick={() => handleDeleteAttachment(index)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <form className="py-4 px-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter news title"
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="detail"
              id="detail"
              rows="4"
              value={formData.detail}
              onChange={handleChange}
              placeholder="Enter news details"
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <select
              name="department"
              id="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base font-medium text-gray-200 outline-none focus:border-blue-500 focus:shadow-md"
              required
            >
              <option value="">Select targets</option>
              <option value="all">All</option>
              <option value="marketing">Department only</option>
            </select>
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
                      onClick={() => handleDeleteNewFile(index)}
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
              {loading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                "Update Post"
              )}
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default EditPost;
