import "./Hero.css";

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <span className="tag">FULL-SPECTRUM BRAND HOUSE</span>

          <h1>
            We Build Brands <br />
            That Dominate Markets.
          </h1>

          <p>
            From identity design to packaging, print production,
            merchandise and digital presence — VN Creations delivers
            complete brand execution under one roof.
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

        <div className="hero-right">
          <div className="mockup-grid">
            <div className="box"><img src="" alt="" /></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
