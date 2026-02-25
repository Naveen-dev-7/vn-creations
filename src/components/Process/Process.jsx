import ScrollReveal from "../Animations/ScrollReveal";


import "./Process.css";

const Process = () => {
  return (
    <ScrollReveal>
    <section id="process" className="process">
      <div className="container process-inner">

        <div className="process-header">
          <h2>Our Process</h2>
          <p>
            A structured execution system designed to deliver
            clarity, precision and measurable impact.
          </p>
        </div>

        <div className="process-steps">

          <div className="step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>
              We understand your vision, business model,
              audience and market positioning.
            </p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Strategy & Design</h3>
            <p>
              We build brand direction, visual systems and
              structured design solutions aligned with your goals.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Production & Execution</h3>
            <p>
              From offset printing to digital launch,
              every detail is executed with premium precision.
            </p>
          </div>

          <div className="step">
            <span>04</span>
            <h3>Launch & Scale</h3>
            <p>
              We ensure your brand is market-ready and
              positioned for long-term growth.
            </p>
          </div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
};

export default Process;
