import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import TimeLine from "./TimeLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMapPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";
import Projects from "./Projects"
import SoftSkills from "./SoftSkills";

function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="min-h-screen flex justify-center items-center flex-col snap-start">
        {/* <TypeAnimation
          sequence={[
            "My name is ",
            1000,
            "Jitesh Prajapati",
            2000,
            "Software Developer",
            3000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block" }}
          className="text-2xl md:text-8xl"
        /> */}
        <Button children={"Download Resume"} />
      </div>

      <div className="min-h-screen w-full snap-start pb-10" id="education">
        <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75">
          Education
        </h2>
        <div className="border-t border-gray-300 w-[50%] m-auto"></div>
        <div className="w-[70%] m-auto">
          <TimeLine />
        </div>
      </div>

      <Education />
      <SoftSkills />
      <Projects />

      <div className="min-h-screen w-full snap-start pb-10 " id="contact">
        <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75">
          Contact me!
        </h2>
        <div className="border-t border-gray-300 w-[50%] m-auto"></div>
        <div className="w-[50%] m-auto mt-10 flex justify-around ">
          <FontAwesomeIcon
            icon={faLinkedin}
            title="LinkedIn"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faGithub}
            title="Github"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            title="Instagram"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            title="WhatsApp"
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start m-5 p-5 gap-8">
          <div className="">
            <div className="text-3xl m-2 flex items-center">
              <FontAwesomeIcon icon={faMapPin} />
              <p className="text-sm m-1">
                1338 , Relief Road , Kalupur , Ahmedabad - 01
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8334377502847!2d72.58956937407507!3d23.029887116057516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8430e16e87b9%3A0x56160690f691c153!2sDhanasuthar%20Ni%20Pol!5e0!3m2!1sen!2sin!4v1737448228159!5m2!1sen!2sin"
              width="500"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="p-5 flex gap-10 flex-col mt-4">
            <div>
              <h3 className="font-normal text-xl md:text-3xl">
                "Great things start with a simple hello. Let’s connect and
                create something extraordinary!"
              </h3>
            </div>
            <div>
              <div className="text-2xl flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} />:
                <p className="font-semibold text-2xl items-center">
                  jitesh.office38@gmail.com
                </p>
              </div>
            </div>
            <div className="flex justify-start ">
              <Button children={"Download Resume"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
