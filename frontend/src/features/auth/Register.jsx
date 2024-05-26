import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "./authApiSlice.js";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    password: "",
    department: "",
  });

  const [message, setMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [register, { isLoading, isError, isSuccess, error }] = useRegisterMutation();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await register(formData)
      if (response.data?.accessToken) {
        setMessage("Registration successful")
      }else {
        setErrMessage("Error while registration, please try again.")
      }
    } catch (e) {
      setErrMessage("error while registration, please try again.")
    } finally {
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        phoneNumber: "",
        password: "",
        department: "",
      });
      setTimeout(()=>{
        setMessage("")
        setErrMessage("")
      },4000)
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="w-full lg:w-5/12 flex justify-center p-6">
          <img src={Logo} alt="Logo" className="w-full" />
        </div>
        <div className="w-full lg:w-7/12 p-5">
          <h3 className="py-4 text-2xl text-center text-gray-800 ">
            Create an Account!
          </h3>
          <form
            className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="sr-only"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="sr-only"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="sr-only"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="sr-only"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="sr-only"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="text"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="sr-only"
                htmlFor="department"
              >
                Department
              </label>
              <select
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="" className="text-gray-700 dark:text-black">Select Department</option>
                <option value="IT" className="text-gray-700 dark:text-black">IT</option>
                <option value="Other" className="text-gray-700 dark:text-black">Other</option>
                <option value="Employee" className="text-gray-700 dark:text-black">Employee</option>
                <option value="Minister" className="text-gray-700 dark:text-black">Minister</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="sr-only"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <p className={`text-xs italic text-red-500`}>
                {errMessage && errMessage}
              </p>
              <p className={`text-xs italic text-green-500`}>
                {message && message}
              </p>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-card-container rounded-full hover:bg-yellow-500 dark:bg-card-container  dark:hover:bg-yellow-500 focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ClipLoader size={24} color="#ffffff" />
                ) : (
                  "Register"
                )}
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                to="/login"
              >
                Already have an account? Login!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
