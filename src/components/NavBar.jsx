import React from "react";
import { NavLink , Link } from "react-router-dom";
import { useId } from "react";

function NavBar() {
  const id = useId();
  const navItems = [
    {
      to: "/",
      child: "Home",
      id: id,
    },
    {
      to: "/education",
      child: "Education",
      id: id,
    },
    {
      to: "/certificates",
      child: "Certificate",
      id: id,
    },
    {
      to: "/projects",
      child: "Projects",
      id: id,
    }
  ];
  return (
    <nav className="text-white flex">
      <ul className="mx-7 flex text-white gap-8 md:flex-col md:items-center text-s md:text-xs">
        <li>
          <Link to={"/#education"}>
          Education
          </Link>
        </li>
        {navItems.map((index, item) => (
          <li id={navItems[item].id}>
            <NavLink
              to={navItems[item].to}
              className={({ isActive }) =>
                `${isActive ? "underline-offset-4" : "underline"}`
              }
            >
              {navItems[item].child}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
