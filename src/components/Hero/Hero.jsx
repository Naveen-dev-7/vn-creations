import Books from "../../assets/Home-Books.png";
import Web from "../../assets/Home-Site.png";
import Signs from "../../assets/Home-Signs.png";
import Tshirt from "../../assets/Home-Tshirts.png";
import MobHome from "../../assets/Mob-Home.png";

import ScrollReveal from "../Animations/ScrollReveal";

import "./Hero.css";

const Hero = () => {
  return (
    <ScrollReveal>
    <section id='home' className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <span className="tag">FULL-SPECTRUM BRAND HOUSE</span>

          <div className="mob-home-box"><img className="" src={MobHome} alt="Mob-Home-Img" /></div>

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
            <div className="box"><img src={Web} alt="WebImg" /></div>
            <div className="box"><img src={Books} alt="BooksImg" /></div>
            <div className="box"><img src={Signs} alt="SignsImg" /></div>
            <div className="box"><img src={Tshirt} alt="TshirtImg" /></div>
          </div>
        </div>

      </div>
    </section>
    </ScrollReveal>
  );
};

export default Hero;
