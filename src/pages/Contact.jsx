

import { useEffect, useRef, useState } from "react";
import { gsap } from "../animations/gsap";

export const Contact = () => {
  const contactRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  useEffect(() => {
    if (!gsap) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(".contact-section .contact-card, .contact-section .contact-form", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      <div className="container">
        <div className="section-heading">
          <h2>Contact Us</h2>
          <p>
            Share your goals with us and we will match you with the right
            class, coach, and schedule.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    How can we help?
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your experience level, goals, and preferred times."
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Send Message
              </button>

              {submitted && (
                <div className="alert alert-success mt-3" role="alert">
                  Thanks for reaching out! A coach will reply within one
                  business day with class options and a free trial invite.
                </div>
              )}
            </form>
          </div>

          <div className="col-lg-5">
            <div className="contact-card">
              <h3>Visit the Dojo</h3>
              <p>
                22 Defender Street, Marina District
                <br />
                Mumbai, MH 400001
              </p>
              <div className="contact-grid">
                <div>
                  <p className="contact-label">Call or WhatsApp</p>
                  <p>+91 90000 12345</p>
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p>hello@karateacademy.com</p>
                </div>
              </div>
              <p className="contact-label">Hours</p>
              <ul>
                <li>Mon - Fri: 6:00 AM – 9:00 PM</li>
                <li>Saturday: 7:00 AM – 6:00 PM</li>
                <li>Sunday: Private coaching only</li>
              </ul>
              <button type="button" className="btn btn-outline-light">
                Book a Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
