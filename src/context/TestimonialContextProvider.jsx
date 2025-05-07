import React, { useState } from "react";
import TestimonialContext from "./TestimonialContext";

const TestimonialContextProvider = ({ children }) => {
  const [testimonial, setTestimonial] = useState([]);

  return (
    <TestimonialContext.Provider value={{ testimonial, setTestimonial }}>
      {children}
    </TestimonialContext.Provider>
  );
};

export default TestimonialContextProvider;
