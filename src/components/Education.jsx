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
    <div className="border-t border-gray-300 w-[50%] m-auto"></div>
    <div className="w-[70%] m-auto">
      <TimeLine />
    </div>
    <h3 className='text-4xl ml-4 mt-4'>Other Activities:</h3>
    <p className='text-xl w-[80%] m-auto mt-4'>
      "I participated in many events during my colledge where i got experience about many things.
      Which shows I'm active student in my college."
      
    </p>
    {achievement.map((item)=>(
      <div className= {`flex bg-gray-900 w-[80%] m-auto mt-10 rounded-lg flex-wrap md:flex-nowrap ${item.class} hover:shadow-lg hover:shadow-gray-500`} key={item.id}>
      <img src={item.img} alt="" className={`w-[550px] h-auto ${item.imgclass}`}/>
      <div className='m-auto'>
        <p className={`text-sm text-center poppins-regular m-1 my-5 tracking-wide`}>" {item.text} "</p>
      </div>
    </div>
    ))}
    {/* <div className='flex bg-gray-900 w-[80%] m-auto mt-10 rounded-lg flex-wrap md:flex-nowrap'>
      <img src={TK24} alt="" className='w-[550px] h-auto rounded-l-lg'/>
      <div className='m-auto'>
        <p className='text-lg text-center poppins-thin'>"Participated in Hackathon conducted by Department of Computer Science. Where i know the importance patience in pressure."</p>
      </div>
    </div>

    <div className='flex bg-black w-[80%] m-auto mt-10 rounded-lg flex-wrap'>
      <div className='m-auto'>
        <p className='text-lg text-center poppins-thin'>"Participated in Smart India Hackathon where i understand the importance of team. how to work in team but unfortunately due to technical error applications of whole Gujarat Universty didn't submitted."</p>
      </div>
      <img src={SIH} alt="" className='w-[550px] h-auto rounded-r-lg' />
    </div>

    <div className='flex bg-black w-[80%] m-auto mt-10 rounded-lg flex-wrap'>
      <img src={TM24} alt="" className='w-[550px] h-[400px] rounded-l-lg' />
      <div className='m-auto'>
        <p className='text-xl tracking-wide text-center poppins-thin'>
          "Game Coordinator of shaan-e-technomantra which is the main game of our annual tech fest. Created question paper under guidance of faculty for the game."
          </p>
      </div>
    </div> */}
  </div>
  )
}

export default Education
