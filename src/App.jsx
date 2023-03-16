import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailPage from "./pages/Blog/BlogDetailPage";
import ContactPage from "./pages/Contact/ContactPage";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />

            <Route path="blog">
              <Route index element={<BlogPage />} />
              <Route path=":id" element={<BlogDetailPage />} />
            </Route>
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
