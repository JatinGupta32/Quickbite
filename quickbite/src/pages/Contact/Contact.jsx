import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <h2 className="contact-title">
            Get in <span>Touch</span>
          </h2>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message ✨
          </p>

          <form>
            <div className="row g-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="First Name"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Last Name"
                />
              </div>

              <div className="col-12">
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="Email Address"
                />
              </div>

              <div className="col-12">
                <textarea
                  className="form-control custom-input"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="col-12">
                <button className="contact-btn w-100" type="submit">
                  Send Message 🚀
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;