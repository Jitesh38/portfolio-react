import { NavLink, Outlet } from "react-router-dom";
import { SquaresDemo } from "../src/components/SquaresDemo";
import { NavBar } from "./components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [isNavbarOpen, setNavbar] = useState(false);
  const Navbar = document.getElementById("NavBar");
  const handleMenu = () => {
    setNavbar(true);
  };
  const handleCancel = () => {
    setNavbar(false);
  };
  return (
    <>
      <div className="flex flex-row">
        <div className="absolute z-20 p-10">
          <button
            className="text-white text-lg font-bold z-20 sticky "
            onClick={handleMenu}
          >
            <div className="text-xl md:text-2xl font-semibold md:font-bold">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </button>
        </div>
        <div className={`${isNavbarOpen ? "navbar" : "hidden"}`} id="NavBar">
          <NavBar />
          <div className="justify-self-end">
            <button className="text-white" onClick={handleCancel}>
              <div className="text-xl md:text-2xl font-semibold md:font-bold">
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full text-white text-4xl">
          <SquaresDemo />
          <div className="relative z-10 text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
