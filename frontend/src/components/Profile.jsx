import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const UserProfileEdit = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    bio: "",
    address: "",
    phoneNumber: "",
    profilePicture: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
    const output = document.getElementById("preview_img");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white dark:bg-[#223547] dark:text-white  rounded-lg shadow relative m-10">


      <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-6">
            <div className="shrink-0">
              <img
                id="preview_img"
                className="h-16 w-16 object-cover rounded-full"
                src={
                  formData.profilePicture
                    ? URL.createObjectURL(formData.profilePicture)
                    : "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
                }
                alt="Current profile photo"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                onChange={handleImageChange}
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
                accept="image/*"
              />
            </label>
          </div>
          <div className="grid grid-cols-6 gap-6 mt-6">
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
                htmlFor="department"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Department
              </label>
              <select
                name="department"
                id="department"
                value={formData.department}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              >
                <option value="" disabled>
                  Select department
                </option>
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
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="123 Main St, Springfield"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-[#223547] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 w-full p-2.5"
                placeholder="(123) 456-7890"
                required
              />
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b">
            <button
              type="submit"
              className="bg-blue-500  dark:hover:bg-[#eeb27a] hover:bg-blue-700 text-white font-bold py-2 px-4 dark:bg-[#ba936f] rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? <ClipLoader color="#ffffff" size={20} /> : "Save all"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileEdit;
