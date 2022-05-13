import contactImage from "../images/contact.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="main-header">
          <span>{"<"}</span>
          Contact
          <span>{">"}</span>
        </h2>

        <div className="contact-content">
          <form>
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
          <div className="contact-image">
            <img src={contactImage} alt="contactImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
