import Books from '../../assets/Books.png'
import Web from '../../assets/Mob-web.png'
import Signs from '../../assets/Signages.jpeg'
import Offset from '../../assets/Both.jpeg'
import "./Portfolio.css";

import ScrollReveal from "../Animations/ScrollReveal";

const Portfolio = () => {
  return (
    <ScrollReveal>
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
          <img src={Web} alt="" />
            <div className="overlay">
              <h3>Luxury Brand Identity</h3>
              <p>Logo • Packaging • Print System • Web • Signages </p>
            </div>
          </div>

          <div className="portfolio-item">
          <img src={Books} alt="" />
            <div className="overlay">
              <h3>Corporate Brochure</h3>
              <p>Offset Print • Layout • Finishing</p>
            </div>
          </div>

          <div className="portfolio-item">
          <img src={Offset} alt="" />
            <div className="overlay">
              <h3>Packaging System</h3>
              <p>Box Design • Production • Execution</p>
            </div>
          </div>

          <div className="portfolio-item wide">
          <img src={Signs} alt="" />
            <div className="overlay">
              <h3>Signage systems</h3>
              <p>3D Letters • Acrylic • Display</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
};

export default Portfolio;
