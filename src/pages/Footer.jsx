// Footer.js

import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="font-weight-bold">Footer Heading</h2>
            <p>Some descriptive text goes here.</p>
            <button className="btn btn-primary">Centered Button</button>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">© 2024 Your Company, Inc.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <p className="text-muted">Site Map | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
};

