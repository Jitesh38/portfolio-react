import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <div className="min-h-screen w-full snap-start pb-10" id="skills">
      {/* Header Start */}
      <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75 leading-relaxed">
        Projects
      </h2>
      <div className="border-t border-gray-300 w-[50%] m-auto"></div>
      {/* header End */}

      {/* quote start */}
      <div className="flex justify-center items-center gap-1 mt-4">
        <div className="text-sm self-start">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <p className="text-xl font-ligh text-center">
        Turning Ideas into Reality, One Project at a Time
        </p>
        <div className="text-sm self-start">
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
