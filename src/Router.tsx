import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
