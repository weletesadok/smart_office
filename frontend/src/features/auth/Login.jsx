import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoginMutation } from "./authApiSlice.js";
import { setCredentials } from "./authSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import usePersist from "../../hooks/usePersist";
import useTitle from "../../hooks/useTitle";

const LoginForm = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleCheckboxClick = () => {
    setPersist((prev) => !prev);
  };
  const [message, setMessage] = useState("");
  const [persist, setPersist] = usePersist();
  const [errMessage, setErrMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();

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
      const response = await login(formData);
      if (response.data?.accessToken) {
        dispatch(setCredentials({ accessToken: response.data.accessToken }));
        setMessage("Login successful");
        setTimeout(() => {
          navigate("/news");
        }, 1000);
      } else {
        setErrMessage("Error while logging in, please try again.");
      }
    } catch (err) {
      if (!err.status) {
        setErrMessage("No Server Response");
      } else if (err.status === 400) {
        setErrMessage("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMessage("Unauthorized");
      } else {
        setErrMessage(err.data?.message);
      }
    } finally {
      setIsSubmitting(false);
      setFormData({
        email: "",
        password: "",
      });
      setTimeout(() => {
        setMessage("");
        setErrMessage("");
      }, 4000);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed"
      // style={{ backgroundImage: 'url("https://picsum.photos/1920/1080")' }}
    >
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3 opacity-[0.9] dark:bg-[#223547] dark:text-white">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block font-semibold text-gray-700 mb-2 dark:text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block dark:text-white font-semibold text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <p className="text-xs italic text-red-500">
                {errMessage && errMessage}
              </p>
              <p className="text-xs italic text-green-500">
                {message && message}
              </p>
              <Link
                className="text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                to="/forgot"
              >
                Forgot your password ?
              </Link>
            </div>
            <div className="flex gap-4 pb-4">
              <input
                type="checkbox"
                checked={persist}
                onChange={handleCheckboxClick}
                className="form-checkbox h-5 w-5 text-blue-600"
              />{" "}
              <span>Trust this device</span>
            </div>
            <div className="mb-6">
              <button
                className="bg-blue-500 w-full dark:hover:bg-[#eeb27a] hover:bg-blue-700 text-white font-bold py-2 px-4 dark:bg-[#ba936f]  rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ClipLoader size={24} color="#ffffff" />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="text-center">
            <Link
              className="text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
              to="/register"
            >
              Don't have an account? Register!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
