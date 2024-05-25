import News from "./components/News";
import UsersTable from "./components/Users";
import Departments from "./components/Departments";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import NewsForm from "./components/NewsForm";
import Places from "./components/Places";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";

export default () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/places" element={<Places />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news/new" element={<NewsForm />} />
        <Route path="/users" element={<UsersTable />} />
      </Route>
    </Routes>
  );
};
