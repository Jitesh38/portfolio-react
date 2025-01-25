import React from "react";
import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";

function Skills() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory w-full">
      <SoftSkills />
      <TechnicalSkills />
    </div>
  );
}

export default Skills;
