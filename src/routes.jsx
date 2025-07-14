import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};