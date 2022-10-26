/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* eslint-disable jsx-a11y/no-redundant-roles */
function Contact({ contactData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const API = `http://${window.location.hostname}:4000`;

  const formDetail = {
    subject: "Sending Mail",
    email: email,
    html: `
    <div style="border: 1px solid #dadce0; width: 500px; border-radius :8px; padding: 40px 20px; text-align: center; margin: auto">
    <p style="font-size: 20px">${name}<br /></p> 
    <p style="font-size: 18px">${email}<br /></p> 
    <p style="font-size: 18px">${subject}<br /></p>
    <p style="font-size: 18px">${contact}<br /></p>
    <hr />
    <p style="font-size: 15px; text-align: left">${message}</p></div>
    `,
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    const myPromise = new Promise((resolve) =>
      fetch(`${API}/text_mail`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetail),
      }).then((response) => {
        resolve(response);
      })
    );
    toast.promise(myPromise, {
      pending: "Please wait...",
      success: "Thank you for registration. My team will contact you",
      error: "Something went wrong",
    });
    setName("");
    setEmail("");
    setSubject("");
    setContact("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>{contactData.description}</p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{contactData.location}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{contactData.email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{contactData.call}</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7363.700696005232!2d75.88434609599112!3d22.659367640260967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666765228950!5m2!1sen!2sin" width="400" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={sumbitForm}>
              <ToastContainer autoClose="2000" />
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Enter Subject"
                    required
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    id="contact"
                    required
                    placeholder="+1 (999) 999 9999"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                  placeholder="Message here..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
