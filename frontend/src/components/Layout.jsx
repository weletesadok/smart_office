import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full overflow-visible">
      <Navbar />
      <Outlet />
      <ContactUs />
      <Footer />
    </div>
  );
};
