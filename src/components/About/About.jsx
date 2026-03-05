import ScrollReveal from "../Animations/ScrollReveal";
import './About.css'

const About = () => {
  return (
    <ScrollReveal>
    <section id="about" className="about-section">
      <div className="about-container">

        <p className="about-label">ABOUT VN CREATION</p>

        <h2 className="about-heading">
          We Build Brands That Command Attention.
        </h2>

        <div style={{
  width: "60px",
  height: "2px",
  background: "#b48a5a",
  margin: "30px auto"
}} />

        <p className="about-text">
          VN Creation is a branding and digital execution studio focused on
          precision, clarity, and impact. From identity systems and print
          production to web development and digital experiences, we deliver
          complete brand ecosystems.
        </p>

        <p className="about-text">
          We don’t just design visuals. We design perception. We execute with
          discipline. And we build long-term brand value.
        </p>

        <div className="about-highlight">
          Design. Print. Digital. Execution.
        </div>

      </div>
    </section>
    </ScrollReveal>
  );
};

export default About;
