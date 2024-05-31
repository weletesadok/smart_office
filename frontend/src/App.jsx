import News from "./components/News";
import UsersTable from "./components/Users";
import Departments from "./components/Departments";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Profile from "./components/Profile";
import NewsForm from "./components/NewsForm";
import Places from "./components/Places";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import NewsDetailPage from "./features/posts/NewsDetailPage";
import NewPost from "./features/posts/NewPost";
import EditPost from "./features/posts/EditPost";
import Posts from "./features/posts/Posts";
import About3 from "./components/About";

export default () => {
  return (
    <Routes>
      {/* <Route element={<PersistLogin />}> */}
        <Route element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About3 />} />

          <Route path="/register" element={<Register />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/places" element={<Places />} />
          <Route path="/news" element={<Posts />} />
          <Route path="/news/edit/:id" element={<EditPost />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news/new" element={<NewPost />} />
          <Route path="/users" element={<UsersTable />} />
        </Route>
      {/* </Route>w */}
    </Routes>
  );
};
