import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const ContactSection = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:8000/feedback", formValues);
      setFormValues({
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="opacity-[0.9] dark:bg-[#223547] dark:text-white bg-gray-200 border-y border-gray-400/30" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-4">
       <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
         <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
           Contact Us
         </h2>
         <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
           Ministry of Tourism
         </p>
       </div>
     </div><div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      1230 --- Street --- Road
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: mot@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Saturday & Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your email" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0" value={formValues.email} onChange={handleChange} />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="phoneNumber" className="pb-1 text-xs uppercase tracking-wider">Phone Number:</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Your phone number" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formValues.phoneNumber} onChange={handleChange} />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider">Message:</label>
                    <textarea id="message" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0" value={formValues.message} onChange={handleChange} />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-500 w-full dark:hover:bg-[#eeb27a] hover:bg-blue-700 text-white font-bold py-2 px-4 dark:bg-[#ba936f]  rounded focus:outline-none focus:shadow-outline" disabled={isSubmitting}>
                    {isSubmitting ? <ClipLoader size={24} color="#fff" /> : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
