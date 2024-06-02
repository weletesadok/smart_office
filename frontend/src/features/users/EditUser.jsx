import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useUpdateUserMutation, useGetUserQuery } from "./userApiSlice";
import { useParams } from "react-router-dom";

const UserProfileEdit = () => {
  const { id } = useParams();
  const { data: user, isLoading: userLoading } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const [formData, setFormData] = useState({
    id,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    roles: ["Employee"],
    active: true,
    bio: "",
    files: [], // Updated to handle multiple files
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        roles: user.roles,
        active: user.active,
        bio: user.bio,
        files: [],
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    setFormData({ ...formData, files });

    // Display the first image as a preview
    if (files.length > 0) {
      const output = document.getElementById("preview_img");
      output.src = URL.createObjectURL(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "files") {
        formData[key].forEach((file) => {
          data.append("files", file);
        });
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      await updateUser({ id: formData.id, data });
    } catch (error) {
      console.error("Error updating form:", error);
    } finally {
      setLoading(false);
    }
  };

  if (userLoading) return <ClipLoader color="#000000" size={50} />;

  return (
    <div className="bg-white dark:bg-[#223547] dark:text-white rounded-lg shadow relative m-10">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="shrink-0">
            <img
              id="preview_img"
              className="h-16 w-16 object-cover rounded-full"
              src={
                formData.files.length > 0
                  ? URL.createObjectURL(formData.files[0])
                  : user?.avatar ||
                    "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
              }
              alt="Current profile photo"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="johndoe"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="roles"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Role
              </label>
              <select
                name="roles"
                id="roles"
                value={formData.roles[0]}
                onChange={(e) =>
                  setFormData({ ...formData, roles: [e.target.value] })
                }
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              >
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="head">Department Head</option>
              </select>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="bio"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows="4"
                value={formData.bio}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Write a few sentences about yourself..."
              ></textarea>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="profilePicture"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                onChange={handleImageChange}
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
                accept="image/*"
                multiple // Allow multiple files
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileEdit;
