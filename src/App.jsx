import { Outlet } from "react-router-dom";
import { SquaresDemo } from "../src/components/SquaresDemo";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-row">
      
        <NavBar />
      

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
