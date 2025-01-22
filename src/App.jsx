import { NavLink, Outlet } from "react-router-dom";
import { SquaresDemo } from "../src/components/SquaresDemo";
import { NavBar } from "./components";
function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="bg-black  h-12 sticky z-20 top-0 w-full flex justify-end items-center md:items-start md:justify-center md:w-[5%] md:min-h-screen md:py-2">
          <NavBar />
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
