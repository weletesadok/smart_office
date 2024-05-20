import Layout from "./components/Layout";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
