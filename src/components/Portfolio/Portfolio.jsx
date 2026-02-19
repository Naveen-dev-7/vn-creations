import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="work" className="portfolio">
      <div className="container portfolio-inner">

        <div className="portfolio-header">
          <h2>Selected Work</h2>
          <p>
            A curated selection of brand executions —
            from identity systems to physical production.
          </p>
        </div>

        <div className="portfolio-grid">

          <div className="portfolio-item large">
            <div className="overlay">
              <h3>Luxury Brand Identity</h3>
              <p>Logo • Packaging • Print System</p>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="overlay">
              <h3>Corporate Brochure</h3>
              <p>Offset Print • Layout • Finishing</p>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="overlay">
              <h3>Packaging System</h3>
              <p>Box Design • Production • Execution</p>
            </div>
          </div>

          <div className="portfolio-item wide">
            <div className="overlay">
              <h3>Website Experience</h3>
              <p>UI/UX • Development • Launch</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;
