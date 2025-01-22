import React from "react";

function TimeLine() {
  return (
    <div>
      {/* <!-- component --> */}
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Class X</h3>
              <h3 className="font-semibold text-lg mb-1">2018-19</h3>
              <p className="font-semibold text-lg mb-1">
                Percentile Rank : 97.03
              </p>
              <p className="font-semibold text-sm mb-1">Board:GSHSEB</p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Class XII</h3>
              <h3 className="font-semibold text-lg mb-1">2020-21</h3>
              <p className="font-semibold text-lg mb-1">
                Percentile Rank : 97.18
              </p>
              <p className="font-semibold text-sm mb-1">Board:GSHSEB</p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">BSc.(CA & IT)</h3>
              <h3 className="font-semibold text-lg mb-1">2023-24</h3>
              <h3 className="font-semibold text-lg mb-1">GPA : 3.91/5</h3>
              <h4 className="font-semibold text-sm mb-1">
                Institution : K.S.School of Business Management & Information
                Technology
              </h4>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
