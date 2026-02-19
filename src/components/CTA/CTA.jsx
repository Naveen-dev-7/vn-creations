import "./CTA.css";

const CTA = () => {
  return (
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

          <a href="vncreationsstudio@gmail.com" className="cta-secondary">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
