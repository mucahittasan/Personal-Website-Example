import contactImage from "../images/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="contact" id="contact">
      <h2 data-aos="fade-down" className="main-header">
        <span>{"<"}</span>
        Contact
        <span>{">"}</span>
      </h2>
      <div className="container">
        <form data-aos="fade-left" className="contact-form">
          <div className="form-content">
            <div className="information">
              <input type="text" placeholder="Name and Surname" />
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="E-mail" />
            </div>
            <textarea placeholder="Message.."></textarea>
          </div>
          <button className="btn-primary">Send</button>
        </form>
        <div data-aos="fade-right" className="contact-image">
          <img src={contactImage} alt="contactImage" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
