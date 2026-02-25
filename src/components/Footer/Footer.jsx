import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          <h3>VN Creations</h3>
          <p>
            Building powerful brand systems through strategic design,
            precision printing, and digital execution.
          </p>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Brand Identity</li>
            <li>Packaging & Boxes</li>
            <li>Brochures & Offset Printing</li>
            <li>Signages & Flex</li>
            <li>Web Development</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+919353736231">Call Now</a>

            </li>
            <li><a href="mailto:vncreationsstudio@gmail.com">Email Us</a></li>


            <li>India</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 VN Creations. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
