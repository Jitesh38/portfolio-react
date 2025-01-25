import React from 'react'
import TimeLine from "./TimeLine";


function Education() {
  return (
    <div className="min-h-screen w-full snap-start pb-10" id="education">
    <h2 className="font-bold p-2 md:p-4 text-center text-4xl md:text-6xl -motion-translate-x-in-100 motion-translate-y-in-75">
      Education
    </h2>
    <div className="border-t border-gray-300 w-[50%] m-auto"></div>
    <div className="w-[70%] m-auto">
      <TimeLine />
    </div>
  </div>
  )
}

export default Education
