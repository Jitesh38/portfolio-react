import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import project from "./project_data";

function ProjectsPage() {
  const [selectedValue, setSelectedValue] = useState("All"); // Default value

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const filteredProjects = project.filter((project) => {
    if (selectedValue === "All") {
      return true; // Show all projects
    } else {
      return project.category === selectedValue;
    }
  });

  return (
    <div
      className="h-screen w-full snap-start pb-10 overflow-y-scroll snap-y snap-mandatory"
      id="skills"
    >
      <div className="p-10 flex justify-end items-center gap-1">
        <Select value={selectedValue} onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Frontend">Frontend</SelectItem>
            <SelectItem value="Backend">Backend</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full flex justify-center flex-row flex-wrap  p-5 gap-5">
        {filteredProjects.map((item) => (
          <div
            className="h-[27rem] w-[25rem] text-8xl flex rounded-lg flex-col  bg-gray-900 hover:shadow-sm hover:shadow-slate-500 overflow-hidden"
            key={item.id}
          >
            <img
              loading="lazy"
              src={item.img}
              alt=""
              className="h-auto w-auto rounded-t-lg mt-0"
            />

            <div className="p-4 pt-3 text-start relative w-auto">
              <h2 className="text-xl font-medium poppins-normal absolute">
                {item.title}
              </h2>
              <div className="text-lg absolute right-4 cursor-pointer">
                <a href={item.link} target="_blank">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div className="pl-4 pb-2 flex gap-1 pt-5">
              {/* <p className="text-lg poppins-light">Technologies</p> */}
              {item.technologies.map((tech) => (
                <div
                  className={`text-xs flex items-center gap-1 rounded-md p-1 ${tech.color} `}
                >
                  <img src={tech.logo} alt="" className="w-5" />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-600 w-[90%] mx-auto mt-1 mb-1 pb-2"></div>

            <div className="pl-4 pr-1">
              <p className="text-sm text-slate-300 leading-normal tracking-wide ">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
