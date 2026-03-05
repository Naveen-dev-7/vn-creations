import "./Services.css";
import { Palette, Package, Globe } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container services-inner">

        <div className="services-header">
          <h2>Our Expertise</h2>
          <p>
            End-to-end brand execution — designed with precision
            and built for impact.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">

          <div className="service-card-icons">
            <span>01</span>
            <Palette className="service-icon" size={24}/>
          </div>
            <h3>Brand Identity</h3>
            <p>
              Logo systems, typography, visual direction and
              comprehensive brand guidelines built for strong recognition.
            </p>
          </div>

          <div className="service-card">

          <div className="service-card-icons">
            <span>02</span>
            <Package className="service-icon" size={24}/>
          </div>

            <h3>Brand Production</h3>
            <p>
              Premium packaging, brochures, business cards,
              merchandise and offset print execution with precision finishing.
            </p>
          </div>

          <div className="service-card">

                    <div className="service-card-icons">
            <span>03</span>
            <Globe className="service-icon" size={24}/>
          </div>

            <h3>Digital Presence</h3>
            <p>
              Modern websites and digital experiences
              crafted to elevate your brand and drive engagement.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
