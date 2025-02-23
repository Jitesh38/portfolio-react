import React, { useState } from "react";
import service from "../appwrite/config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function TestimonialForm() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);

  const formSubmit = () => {
    if (!name || !designation || !testimonial || !img) {
      alert("All fields are required.");
      return;
    }
    setLoading(true);
    console.log("form invoked");
    service.uploadFile(img).then((img_detail) => {
      const img_id = img_detail.$id;
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
            setLoading(false);
          });
      }
    });
  };

  return (
    <div>
      <div className="mt-14">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
          }}
          className="text-sm  flex justify-center items-center flex-col gap-10"
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
