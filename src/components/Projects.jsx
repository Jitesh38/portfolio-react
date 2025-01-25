import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import project from "./project";

function Projects() {
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
    <div className="min-h-screen w-full snap-start pb-10" id="skills">
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
            className="h-[30rem] w-[25rem] text-8xl flex bg-slate-700 bg-transparent  rounded-lg flex-col cursor-pointer "
            key={item.index}
          >
            <img
              src={item.img}
              alt=""
              className="h-1/2 w-full rounded-lg mt-0"
            />
            <div className="ml-4">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-lg font-normal">{item.content}</p>
            </div>
            <div className="flex justify-center items-center h-full">
              <Button variant="outline" className="dark text-white">
                Button
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
