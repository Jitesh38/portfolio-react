import React from 'react'
import TimeLine from "./TimeLine";
import achievement from './achievement';
import TK24 from "../assets/certificate/TK_2024_Code Complete_Cetificate.png"
import SIH from "../assets/certificate/sih_2k24.jpg"
import TM24 from "../assets/certificate/1.jpg"


function Education() {
  return (
    <div className="h-screen w-full snap-start pb-10 overflow-y-scroll snap-y snap-mandatory" id="education">
    <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75">
      Education
    </h2>
    <div className="border-t border-gray-300 w-[50%] m-auto pb-3"></div>
    <div className="w-[70%] m-auto pb-20">
      <TimeLine />
    </div>
    <h3 className='text-xl md:text-4xl pl-4 p-1 clip bg-gray-900 w-[80%] md:w-1/2 text-white'>Other Activities:</h3>
    
    {/* <p className='text-xl w-[80%] m-auto mt-4 text-slate-100'>
      "Since I am an active and enthusiastic student in college, I participated in many events. Which helped me to gain practical knowledge."
      
    </p> */}
    {achievement.map((item)=>(
      <div className= {`flex bg-gray-900 w-[80%] m-auto mt-10 rounded-lg flex-wrap md:flex-nowrap ${item.class} hover:shadow-lg hover:shadow-gray-500`} key={item.id}>
      <img src={item.img} alt="" className={`w-[550px] h-auto ${item.imgclass}`}/>
      <div className='m-auto'>
        <p className={`text-sm text-center poppins-regular m-1 my-5 tracking-wide`}>" {item.text} "</p>
      </div>
    </div>
    ))}
  </div>
  )
}

export default Education
