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
      <div className="container">
        <h2 data-aos="fade-down" className="main-header">
          <span>{"<"}</span>
          Contact
          <span>{">"}</span>
        </h2>

        <div className="contact-content">
          <form data-aos="zoom-in">
            <div className="form-content">
              <div className="form-info">
                <input type="text" placeholder="Fullname" />
                <input type="text" placeholder="Subject" />
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form-text">
                <textarea placeholder="Message.."></textarea>
              </div>
            </div>
            <button className="btn-primary">Send</button>
          </form>
          <div data-aos="fade-up" className="contact-image">
            <img src={contactImage} alt="contactImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
