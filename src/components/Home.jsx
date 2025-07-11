import { TypeAnimation } from "react-type-animation";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";
import Contact from "./Contact";


function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="min-h-screen flex justify-center items-center flex-col snap-start">
        <TypeAnimation
          sequence={["Jitesh Prajapati", 2000, "Software Engineer", 3000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block" }}
          className="text-3xl md:text-8xl poppins-medium text-center"
        />
      </div>
      <SoftSkills />
      <TechnicalSkills />
      <Contact />
    </div>
  );
}

export default Home;
