import React, { useState } from "react";
import service from "../appwrite/config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import conf from "../conf/conf";

function TestimonialForm() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);

  const formSubmit = async () => {
    if (!name || !designation || !testimonial || !img) {
      alert("All fields are required.");
      return;
    }
    setLoading(true);
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "my-portfolio");
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${conf.cloud_name}/image/upload`,
        data
      )
      .then((res) => {
        const img_id = res.data.secure_url;
        if (img_id) {
          service
            .createTestimonial({ name, designation, testimonial, img_id })
            .then(() => {
              alert("Your Testimonial is submitted successfully.");
              setName("");
              setDesignation("");
              setTestimonial("");
              setImg();
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
              alert("Error Please try again later !");
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error Please try again later !");
      });
  };

  return (
    <div>
      <div className="mt-16 flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
          }}
          className="text-sm  flex justify-center items-center flex-col gap-10 w-[80%]"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="designation">Designation</Label>
            <Input
              type="text"
              id="designation"
              placeholder="Designation or Relation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="testimonial">Testimonial</Label>
            <Textarea
              placeholder="Type your testimonial here."
              id="testimonial"
              rows="6"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input
              type="file"
              id="picture"
              placeholder="Picture"
              // value={img}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>

          <div>
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TestimonialForm;
