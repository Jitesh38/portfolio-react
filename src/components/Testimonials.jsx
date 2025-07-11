import { useEffect, useContext } from "react";
import service from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TestimonialContext from "../context/TestimonialContext";

function Testimonials() {
  const { testimonial, setTestimonial } = useContext(TestimonialContext);
  const navigate = useNavigate();

  useEffect(() => {
    service.allTestimonial().then((data) => {
      if (data) {
        const displayItems = data.documents.filter(
          (item) => item.display == true
        );
        setTestimonial(displayItems);
      }
    });
  }, []);

  document.title = "Jitesh Prajapati - Testimonials";

  return (
    <div className="h-screen w-full snap-start pb-10 overflow-y-scroll snap-y snap-mandatory">
      <div className="p-20">
        <div className="text-white text-sm flex gap-3 flex-wrap">
          {testimonial &&
            testimonial.map((item) => (
              <figure
                className="md:flex rounded-xl p-8 md:p-0 bg-slate-800 w-full md:w-auto"
                key={item.$id}
              >
                <img
                  loading="lazy"
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto md:rounded-l-xl"
                  src={item.img_id}
                  alt={item.name}
                  width="384"
                  height="512"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-lg font-medium">“{item.testimonial}”</p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-sky-400">{item.name}</div>
                    <div className="text-slate-400">{item.designation}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
        </div>

        <div
          className="h-32 w-64 flex items-center justify-center flex-col border border-dashed border-white hover:border-solid hover:border-blue-600 hover:border-2 text-lg hover:text-blue-600 my-5 rounded-xl cursor-pointer"
          onClick={() => {
            navigate("/add-testimonial");
          }}
        >
          <div className="text-center">
            <FontAwesomeIcon icon={faPlus} />
          </div>

          <button>Add Testimonial</button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
