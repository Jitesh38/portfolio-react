import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Home,
  Education,
  Skills,
  ProjectsPage,
  Testimonials,
  TestimonialForm,
} from "./components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  HashRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="add-testimonial" element={<TestimonialForm />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
