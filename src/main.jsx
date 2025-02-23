import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Home, Education, Skills, ProjectsPage, Testimonials, TestimonialForm} from "./components";
import { HashRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="add-testimonial" element={<TestimonialForm />} />       
      </Route>
    </Routes>
  </HashRouter>
);


