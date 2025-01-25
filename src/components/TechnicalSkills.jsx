import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import cLogo from "../assets/svg/C.svg";
import pythonLogo from "../assets/svg/python.svg";
import jsLogo from "../assets/svg/js.svg";
import htmlLogo from "../assets/svg/html.svg";
import cssLogo from "../assets/svg/css.svg";
import bootstrapLogo from "../assets/svg/bootstrap.svg";
import tailwindLogo from "../assets/svg/tailwind.svg";
import reactLogo from "../assets/svg/react.svg";
import djangoLogo from "../assets/svg/django.svg";
import reduxLogo from "../assets/svg/redux.svg";
import gitLogo from "../assets/svg/git.svg";
import vscodeLogo from "../assets/svg/vscode.svg";
import postmanLogo from "../assets/svg/postman.svg";
import appwriteLogo from "../assets/svg/appwrite.svg";

function TechnicalSkills() {
  return (
    // header start
    <div className="min-h-screen w-full snap-start pb-10" id="skills">
      <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75 leading-relaxed">
        Technical Skills
      </h2>
      <div className="border-t border-gray-300 w-[50%] m-auto"></div>
      {/* header start */}

      {/* quote start */}
      <div className="flex justify-center items-center gap-1 mt-4">
        <div className="text-sm self-start">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <p className="text-xl font-ligh text-center">
          Knowledge Should be independent of any Programming Language{" "}
        </p>
        <div className="text-sm self-start">
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      </div>
      {/* quote end */}

      <div className="flex flex-row w-full flex-wrap p-10 gap-10 mt-10">
        {/* individual skill start */}
        <div className="flex  gap-2 items-center hover:text-black hover:bg-white rounded-lg p-2 animate-bounce hover:animate-none  ">
          <h5 className="text-lg font-semibold">Programming Languages:</h5>
          {/* language logo and text */}
          <div >
            <img
              src={cLogo}
              alt="C language"
              className="text-sm "
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <img
              src={pythonLogo}
              alt="Python language"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <img
              src={jsLogo}
              alt="JavaScript"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>
        </div>
        {/* individual skill end */}

        {/* individual skill start */}
        <div className="flex gap-2 items-center  hover:text-black hover:bg-white rounded-lg p-2 animate-bounce hover:animate-none">
          <h5 className="text-lg font-semibold">Web Development:</h5>
          {/* language logo and text */}
          <div>
            <img
              src={htmlLogo}
              alt="HTML"
              title="HTML"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <img
              src={cssLogo}
              alt="CSS"
              title="CSS"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <img
              src={jsLogo}
              alt="JavaScript"
              title="JavaScript"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <img
              src={bootstrapLogo}
              alt="Bootstap"
              title="Bootstap"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <img
              src={tailwindLogo}
              alt="Tailwind CSS"
              title="Tailwind CSS"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>
        </div>
        {/* individual skill end */}

        {/* individual skill start */}
        <div className="flex gap-2 items-center  hover:text-black hover:bg-white rounded-lg p-2 animate-bounce hover:animate-none">
          <h5 className="text-lg font-semibold">Libraries:</h5>
          {/* language logo and text */}
          <div>
            <img
              src={reactLogo}
              alt="React"
              title="React JS"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <img
              src={reduxLogo}
              alt="Redux"
              title="React Redux Toolkit"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>
        </div>
        {/* individual skill end */}

        {/* individual skill start */}
        <div className="flex gap-2 items-center  hover:text-black hover:bg-white rounded-lg p-2 animate-bounce hover:animate-none">
          <h5 className="text-lg font-semibold">Framework:</h5>
          {/* language logo and text */}
          <div>
            <img
              src={djangoLogo}
              alt="Django"
              title="Django"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>
        </div>
        {/* individual skill end */}

        {/* individual skill start */}
        <div className="flex gap-2 items-center  hover:text-black hover:bg-white rounded-lg p-2 animate-bounce hover:animate-none">
          <h5 className="text-lg font-semibold">Version Control:</h5>
          {/* language logo and text */}
          <div>
            <img
              src={gitLogo}
              alt="Git"
              title="Git"
              className="text-sm"
              width={"50rem"}
            />
            <h2></h2>
          </div>

          <div>
            <div className="text-4xl"
              width={"50rem"}>
          <FontAwesomeIcon icon={faGithub} />
          </div>

            <h2></h2>
          </div>
        </div>
        {/* individual skill end */}

        
        {/* individual skill start */}
        <div className="flex gap-4 items-center  hover:text-black hover:bg-white rounded-lg p-2 animate-bounce hover:animate-none">
          <h5 className="text-lg font-semibold">Tools:</h5>
          {/* language logo and text */}
          <div>
            <img
              src={vscodeLogo}
              alt="VS Code"
              title="VS Code"
              className="text-sm"
              width={"40rem"}
            />
            <h2></h2>
          </div>
          <div>
            <img
              src={postmanLogo}
              alt="Postman"
              title="Postman"
              className="text-sm"
              width={"40rem"}
            />
            <h2></h2>
          </div>
          <div>
            <img
              src={appwriteLogo}
              alt="Appwrite"
              title="Appwrite"
              className="text-sm"
              width={"45rem"}
            />
            <h2></h2>
          </div>
        </div>
        {/* individual skill end */}
      </div>
    </div>
  );
}

export default TechnicalSkills;
