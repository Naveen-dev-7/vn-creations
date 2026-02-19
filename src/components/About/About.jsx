import React from "react";

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>About VN Creation</h2>

        <p style={textStyle}>
          VN Creation is a branding and creative studio dedicated to building
          powerful visual identities and meaningful brand experiences. We work
          with ambitious businesses to create designs that are not only visually
          compelling but strategically aligned for growth.
        </p>

        <p style={textStyle}>
          Our vision is to build one of India’s most impactful creative
          companies — transforming brands and creating opportunities that
          change lives.
        </p>

        <div style={highlightsStyle}>
          <div style={cardStyle}>
            <h4>Strategic Thinking</h4>
            <p>Design backed by purpose and business clarity.</p>
          </div>

          <div style={cardStyle}>
            <h4>Clean Execution</h4>
            <p>Minimal, modern, and high-quality visual outcomes.</p>
          </div>

          <div style={cardStyle}>
            <h4>Growth Focused</h4>
            <p>Every project is built to elevate brand value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: "100px 20px",
  backgroundColor: "#f9f9f9",
};

const containerStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "32px",
  marginBottom: "25px",
};

const textStyle = {
  maxWidth: "700px",
  margin: "0 auto 20px",
  lineHeight: "1.7",
  color: "#555",
};

const highlightsStyle = {
  marginTop: "40px",
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "25px",
  borderRadius: "10px",
  width: "250px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
};

export default About;
