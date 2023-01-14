import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./contact";
import MainPage from "./mainPage";

const Navbar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
