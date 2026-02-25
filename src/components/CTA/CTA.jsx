import ScrollReveal from "../Animations/ScrollReveal";

import "./CTA.css";

const CTA = () => {
  return (
    <ScrollReveal>
    <section id="CTA" className="cta">
      <div className="container cta-inner">
        <h2>
          Let’s Build a Brand That Commands Attention.
        </h2>

        <p>
          From identity design to large-scale production and digital execution —
          we deliver complete brand systems with precision and premium quality.
        </p>

        <div className="cta-buttons">
          <a href="tel:+919353736231" className="cta-primary">
            Call Now
          </a>

          <a href="mailto:vncreationsstudio@gmail.com" className="cta-secondary">
            Email Us
          </a>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default CTA;
