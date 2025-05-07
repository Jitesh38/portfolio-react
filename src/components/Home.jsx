import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import TechnicalSkills from "./TechnicalSkills";
import Projects from "./ProjectsPage";
import SoftSkills from "./SoftSkills";
import Contact from "./Contact";
import Education from "./Education";
import Jitesh from "../assets/photos/jitesh.webp"

function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="min-h-screen flex justify-center items-center flex-col snap-start">
        <TypeAnimation
          sequence={[
            // "My name is ",
            // 1000,
            "Jitesh Prajapati",
            2000,
            // "Software Developer",
            // 3000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block" }}
          className="text-3xl md:text-8xl poppins-medium text-center"
        />
        {/* <div>
            <img src={Jitesh} alt="" className="border" />
        </div> */}
        {/* <div className="mt-20">
          <Button children={"Download Resume"} />
        </div> */}
      </div>

      {/* <Education /> */}
      <SoftSkills />
      <TechnicalSkills />
      {/* <Projects /> */}
      <Contact />

    </div>
  );
}

export default Home;
