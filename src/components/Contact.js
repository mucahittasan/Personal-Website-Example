import contactImage from "../images/contact.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setSubject("");
    setEmail("");
    setMessage("");

    toast.success("Message successfully sended!");
  };

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="contact" id="contact">
      <ToastContainer />

      <div className="container">
        <h2 className="main-header">
          <span>{"<"}</span>
          Contact
          <span>{">"}</span>
        </h2>

        <div className="contact-content">
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mzboayzz"
            method="POST"
          >
            <div className="form-content">
              <div className="form-info">
                <input
                  type="text"
                  placeholder="Fullname"
                  name="fullname"
                  id="fullname"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-text">
                <textarea
                  placeholder="Message.."
                  name="message"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn-primary">
              Send
            </button>
          </form>
          <div className="contact-image">
            <img src={contactImage} alt="contactImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
