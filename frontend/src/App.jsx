import News from "./components/News";
import AllUsers from "./features/users/AllUsers";
import Departments from "./components/Departments";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import EditUser from "./features/users/EditUser";
import NewsForm from "./components/NewsForm";
import Places from "./components/Places";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Public from "./components/Public";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import NewsDetailPage from "./features/posts/NewsDetailPage";
import NewPost from "./features/posts/NewPost";
import EditPost from "./features/posts/EditPost";
import Posts from "./features/posts/Posts";
import AddDestination from "./features/destinations/AddDestination";
import Destinations from "./features/destinations/Destinations";
import EditDestination from "./features/destinations/EditDestination";
import DestinationDetail from "./features/destinations/DestinationDetail";
import About3 from "./components/About";
import Chart from "./components/Organization";
import Contact from "./components/ContactUs"
import Feedback from "./features/feedback/Feedbacks"

export default () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About3 />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route element={<RequireAuth allowedRoles={["Admin", "Head"]} />}>
              <Route path="/destinations/new" element={<AddDestination />} />
              <Route path="/news/edit/:id" element={<EditPost />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/news/new" element={<NewPost />} />
              <Route
                path="/destinations/edit/:id"
                element={<EditDestination />}
              />
            </Route>
            <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
              <Route path="/users" element={<AllUsers />} />
              <Route path="/users/edit/:id" element={<EditUser />} />             
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/places" element={<Destinations />} />
            <Route path="/news" element={<Posts />} />

            <Route path="/news/:id" element={<NewsDetailPage />} />

            <Route path="/chart" element={<Chart />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};