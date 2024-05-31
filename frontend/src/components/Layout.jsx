import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import NewPost from "./../features/posts/Posts";

export default () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col justify-between "
      style={{
        backgroundColor: "green",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1561016444-14f747499547?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
