// Footer.js

import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h2 className="font-weight-bold">Karate Academy</h2>
            <p>
              Elevate your discipline, confidence, and strength through
              structured martial arts training led by certified instructors.
            </p>
            <button className="btn btn-primary">Schedule a Visit</button>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#program">Programs</a></li>
              <li><a href="#instructors">Instructors</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Stay Connected</h4>
            <p>Follow us for training tips and upcoming events.</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            </div>
            <div className="footer-newsletter">
              <input type="email" placeholder="Email address" />
              <button className="btn btn-outline-light">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">© 2024 Karate Academy. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <p className="text-muted">Safety Policy | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
