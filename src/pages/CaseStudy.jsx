const CaseStudy = () => {
  return (
    <section className="case-study">

      <div className="case-hero">
        <img src="/images/case-hero.jpg" alt="Luxury Brand Identity" />
        <div className="case-hero-overlay">
          <h1>Luxury Brand Identity System</h1>
          <p>Logo • Packaging • Print Production • Execution</p>
        </div>
      </div>

      <div className="container case-content">

        <div className="case-section">
          <h2>Project Overview</h2>
          <p>
            VN Creations developed a full-spectrum brand system for a premium
            retail business including identity design, packaging structure,
            and complete offset print execution.
          </p>
        </div>

        <div className="case-section">
          <h2>The Challenge</h2>
          <p>
            The client required a high-end visual identity that could translate
            consistently across packaging, brochures and retail signage.
          </p>
        </div>

        <div className="case-section">
          <h2>Our Approach</h2>
          <p>
            We structured the brand system around material selection,
            embossing techniques, and production accuracy to ensure
            flawless execution.
          </p>
        </div>

        <div className="case-gallery">
          <img src="/images/case1.jpg" alt="" />
          <img src="/images/case2.jpg" alt="" />
          <img src="/images/case3.jpg" alt="" />
        </div>

      </div>

    </section>
  );
};

export default CaseStudy;
