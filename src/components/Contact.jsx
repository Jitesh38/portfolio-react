import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMapPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Contact() {
  return (
    <div className="min-h-screen w-full snap-start pb-10" id="contact">
      <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75">
        Contact me!
      </h2>
      <div className="border-t border-gray-300 w-[50%] m-auto"></div>
      <div className="w-[50%] m-auto mt-5 md:mt-10 flex justify-around gap-6">
        <a href="https://www.linkedin.com/in/jitesh-prajapati/" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          title="LinkedIn"
          className="cursor-pointer hover:text-blue-700"
        />
        </a>
        <a href="https://github.com/Jitesh38" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          title="Github"
          className="cursor-pointer"
        />
        </a>
        <a href="https://www.instagram.com/jitesh.prajapati.46/" target="_blank">
        <FontAwesomeIcon
          icon={faInstagram}
          title="Instagram"
          className="cursor-pointer hover:text-red-400"
        />
        </a>
        <a href="https://wa.me/917226928560" target="_blank">
        <FontAwesomeIcon
          icon={faWhatsapp}
          title="WhatsApp"
          className="cursor-pointer hover:text-green-500"
        />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start m-5 p-5 gap-8">
        <div className="">
          <div className="text-3xl m-2 flex items-center font-thin">
            <FontAwesomeIcon icon={faMapPin} className="text-lg text-red-600" />
            <p className="md:ext-sm m-1 text-xs">
              1338 , Relief Road , Kalupur , Ahmedabad - 01
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8334377502847!2d72.58956937407507!3d23.029887116057516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8430e16e87b9%3A0x56160690f691c153!2sDhanasuthar%20Ni%20Pol!5e0!3m2!1sen!2sin!4v1737448228159!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="w-[300px] h-[300px] lg:w-[500px]"
          ></iframe>
        </div>
        <div className="p-5 flex gap-10 flex-col mt-4">
          <div>
            <h3 className="font-normal text-xl md:text-3xl">
              "Great things start with a simple hello. Let’s connect and create
              something extraordinary!"
            </h3>
          </div>
          <div>
            <div className="md:text-2xl text-xl flex items-center gap-1">
              <FontAwesomeIcon icon={faEnvelope} />:
              <p className="font-semibold text-xl md:text-2xl items-center">
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
  );
}

export default Contact;
