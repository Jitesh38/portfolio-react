import React from "react";
import clockLogo from "../assets/svg/clock.svg";
import adaptiveLogo from "../assets/svg/adaptive.svg";
import learnLogo from "../assets/svg/learn.svg";

function SoftSkills() {
  return (
    <div className="min-h-screen w-full snap-center pb-10" id="skills">
      <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75 leading-relaxed ">
        Soft Skills
      </h2>
      <div className="border-t border-gray-300 w-[50%] m-auto"></div>

      <div className="group w-full flex flex-row flex-wrap justify-center items-center gap-2 md:gap-0 p-5 transition-colors duration-1000">
        <div className="softskill-card  bg-cyan-500  group-hover:bg-emerald-500 group-hover:text-white ">
          <div className="flex justify-center">
            <img src={clockLogo} alt="" className="w-30" />
          </div>
          <h2 className="softskill-h2">Time Management</h2>

          <p className="text-xl font-normal text-center p-5 leading-normal tracking-wide">
            " Time management is the process of organizing and planning how to
            divide your time between activities. It can help you be more
            productive, focused, and confident. "
          </p>
        </div>

        <div className="softskill-card bg-amber-500 group-hover:bg-cyan-500">
          <div className="flex justify-center">
            <img src={adaptiveLogo} alt="" className="w-30" />
          </div>
          <h2 className="softskill-h2">Adaptive</h2>
          <p className="text-xl font-normal text-center p-5 leading-normal tracking-wide">
         " I am able to collaborate effectively with diverse teams and individuals. "
          </p>
        </div>

        <div className="softskill-card bg-emerald-500 group-hover:bg-rose-500 group-hover:text-white">
          <div className="flex justify-center mt-3">
            <img src={learnLogo} alt="" className="w-16 m-3" />
          </div>
          <h2 className="softskill-h2">Willingness to Learn</h2>
          <p className="text-xl font-normal text-center p-5 leading-normal tracking-wide">" desire to gain knowledge and skills to enhance work performance and achieve professional growth "</p>
        </div>
      </div>
    </div>
  );
}
export default SoftSkills;
