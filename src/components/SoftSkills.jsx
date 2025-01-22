import React from 'react'

function SoftSkills() {
  return (
    <div className="min-h-screen w-full snap-start pb-10" id="skills">
      
    <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75 leading-relaxed text-yellow-600">
      Soft Skills
    </h2>
    <div className="border-t border-gray-300 w-[50%] m-auto"></div>

    <div className="w-full flex flex-row flex-wrap justify-center items-center gap-1 p-5">
      <div className="h-96 w-96  bg-yellow-600 hover:bg-white text-white hover:text-black  ">
      <h2>Time Management</h2>
      </div>
      <div className="h-96 w-96 bg-black hover:bg-white"></div>
      <div className="h-96 w-full md:w-96 bg-black hover:bg-white"></div>
    </div>
  </div>
  )
}

export default SoftSkills
