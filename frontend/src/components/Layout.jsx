import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import NewPost from "./../features/posts/Posts";
import bg from "./../assets/bgblack.png";

export default () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col justify-between "
      style={{
        backgroundColor: "green",
        backgroundImage: `url(${bg})`,
      }}
    >
    <div className="bg-green-500">
    <Navbar />

    </div>
      <Outlet />
      <Footer />
    </div>
  );
};
