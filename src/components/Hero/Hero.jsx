import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">

        <div className="hero-content">

          <span className="hero-label">
            Full-Spectrum Brand House
          </span>

          <h1>
            We build brands that
            <br />
            exist everywhere.
          </h1>

          <p>
            From identity design to packaging, print production,
            merchandise and digital presence — VN Creations
            delivers complete brand execution under one roof.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Start a Project
            </a>

            <a href="#work" className="secondary-btn">
              View Our Work
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
