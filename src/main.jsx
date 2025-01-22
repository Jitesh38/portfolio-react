import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Home, Education, Certificates, Projects } from "./components";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="certificates" element={<Certificates />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
