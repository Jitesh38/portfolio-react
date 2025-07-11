import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import avtar from "../assets/photos/avtar_jitesh.png";

function NavBar() {
  const [isNavbarOpen, setNavbar] = React.useState(false);
  const handleMenu = () => {
    setNavbar(true);
  };
  const handleCancel = () => {
    setNavbar(false);
  };
  const navItems = [
    {
      to: "/",
      child: "Home",
      id: 1,
    },
    {
      to: "/education",
      child: "Education",
      id: 2,
    },
    {
      to: "/projects",
      child: "Projects",
      id: 3,
    },
    {
      to: "/testimonials",
      child: "Testimonial",
      id: 4,
    },
  ];
  return (
    <>
      {/* menu button */}
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

      <div className={`${isNavbarOpen ? "navbar" : "hide_navbar"}`} id="NavBar">
        {/* cancel button */}
        <div className="w-full flex justify-end px-2 md:px-5">
          <button className="text-white" onClick={handleCancel}>
            <div className="text-xl md:text-2xl font-semibold md:font-bold">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </button>
        </div>

        {/* picture */}
        <div className="w-full flex justify-center flex-col">
          <div className="flex justify-center ">
            <img src={avtar} alt="" className="w-[70%] md:w-1/2 pb-3" />
          </div>
          <div className="flex justify-center flex-wrap gap-2 text-xs md:text-xl">
            <p className="font-semibold text-center text-white">Hi</p>
            <p className="animate-bounce">👋</p>
            <p className="font-semibold text-center text-white">from ,</p>
            <p className="font-bold text-center text-white text-sm md:text-lg font-mono">
              &lt; Jitesh /&gt;
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 w-[70%] mx-auto my-3"></div>

        {/* navbar  */}
        <nav className="text-white flex w-full justify-center">
          <ul className="mx-7 flex text-white gap-8 flex-col md:text-lg font-thin">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${isActive ? "text-white font-medium" : "text-slate-400"}`
                  }
                  onClick={handleCancel}
                >
                  {item.child}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
