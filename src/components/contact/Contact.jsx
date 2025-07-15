import React, { useRef } from "react";
import "./contact.css";
import myart from "../../assets/contactPage/My-art.png";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

import linkedin from "../../assets/contactPage/social-logos/linkedin.png";
import github from "../../assets/contactPage/social-logos/github.png";
import email from "../../assets/contactPage/social-logos/email.png";
import instagram from "../../assets/contactPage/social-logos/instagram.png";
import whatsapp from "../../assets/contactPage/social-logos/whatsapp.png";

const Contact = () => {
  const form = useRef();

  const sendemail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hqonff9",
        "template_0nwr5ac",
        form.current,
        "LqxwXDHuzb5_WNw4G"
      )
      .then(
        (result) => {
          toast.success("✅Message Sent SuccessFully:thanks To Connect❤️");
          form.current.reset();
        },
        (error) => {
          toast.error("❌Faild To Send Message.Please Try Again🥲");
        }
      );
  };

  return (
    <div className={` flexitems-center justify-center`}>
      <div className="main-container flex gap-20">
        <div className={`my_img_logo w-1/2 pl-10`}>
          {/* "logo w-1/2 pl-10" */}
          <img src={myart} alt="" />
        </div>
        <div className="form-container flex items-center justify-center form ">
          <form
            action=""
            ref={form}
            onSubmit={sendemail}
            className="flex flex-col gap-5"
          >
            <div className="form-elem">
              <label htmlFor="" className="text-white text-lg">
                Full Name:
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-elem">
              <label htmlFor="" className="text-white text-lg">
                Mobile No:
              </label>
              <input
                type="text"
                name="mobile_no"
                placeholder="Mobile No"
                required
              />
            </div>
            <div className="form-elem">
              <label htmlFor="" className="text-white text-lg">
                Email:
              </label>
              <input type="text" name="email" placeholder="Email" required />
            </div>
            <div className="form-elem">
              <label htmlFor="" className="text-white text-lg">
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                rows={5}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className=" py-2 px-10 bg-orange-500 rounded-2xl text-white text-lg cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="socials ">
          <div className="socials">
            <img src={github} alt="" />
          </div>
          <div className="socials">
            <img src={linkedin} alt="" />
          </div>
          <div className="socials">
            <img src={instagram} alt="" />
          </div>
          <div className="socials">
            <img src={email} alt="" />
          </div>
          <div className="socials">
            <img src={whatsapp} alt="" />
          </div>
          {/* <div className="socials">other if any</div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
