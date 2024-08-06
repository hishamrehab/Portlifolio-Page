import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import "./Contact.css";
import { MdOutlineVerifiedUser, MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="contact-us flex">
        <div className="contact-us-left">
          <h1 className="title">
            <span className="icon-envelove">
              <BsFillEnvelopeFill />
            </span>
            Contact us
          </h1>
          <p className="sub-title">
            Contact us for more information and Get notified when I publish some
            new{" "}
          </p>

          <div className="flex">
            <form className="">
              <div className="form">
                <label htmlFor="email">Email Address:</label>
                <input required type="email" name="" id="email" />
              </div>

              <div className="flex" style={{ marginTop: "24px" }}>
                <label htmlFor="message">Your messsage:</label>
                <textarea required name="" id="message"></textarea>
              </div>

              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="contact-us-right">
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/05/email-headers.jpg"
            alt="image"
          />
        </div>
      </section>
      <div className="all-icons flex">
        <div className="icon">
          <a href="https://mail.google.com/mail/u/0/#inbox">
            {" "}
            <MdEmail />
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/hishamrehab">
            <BsGithub />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/hisham-rehab-383543226/">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/hisham.rehab.1">
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
