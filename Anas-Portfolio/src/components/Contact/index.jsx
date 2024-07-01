import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_wk6exwt", "template_kbofzfr", form.current, "Ezv_SVSjZ99_qZfjX")
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col items-center py-10 relative z-1 bg-[#178582]">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 gap-3">
        <h2 className="text-4xl font-bold text-center mt-5 text-primary text-[#BD8B28]">Contact Me</h2>
        <div className="w-1/2 h-1 bg-[#BD8B28] mx-auto mb-8"></div>
        <p className="text-lg font-semibold text-center max-w-lg text-secondary mt-0 text-[#0A1828]">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form ref={form} onSubmit={handleSubmit} className="w-11/12 max-w-lg flex flex-col bg-[#0A1828] p-8 rounded-lg shadow-lg mt-7 gap-3">
          <h3 className="text-2xl font-semibold text-primary mb-2 text-[#BD8B28]">Email Me</h3>
          <input
            type="email"
            placeholder="Your Email"
            name="from_email"
            className=" text-white w-full bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg py-3 px-4 focus:border-primary"
          />
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            className=" text-white w-full bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg py-3 px-4 focus:border-primary"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className=" text-white w-full bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg py-3 px-4 focus:border-primary"
          />
          <textarea
            placeholder="Message"
            rows="4"
            name="message"
            className=" text-white w-full bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg py-3 px-4 focus:border-primary"
          />
          <input
            type="submit"
            value="Send"
            className=" w-full text-center bg-gradient-to-r from-purple-500 to-pink-500 py-3 mt-1 rounded-lg border-none text-white text-lg font-semibold cursor-pointer hover:opacity-90"
          />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
