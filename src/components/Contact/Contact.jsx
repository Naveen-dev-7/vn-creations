import React, { useState } from "react";

import ScrollReveal from "../Animations/ScrollReveal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = { name, email, phone, message };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz9LWhrdXZMa2ibcSfhTlpKbGj4HZGcnucwSvznWGFoyiLc7JjXlIsgZmC8D2iuz9o3/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <ScrollReveal>
    <section id='contact' style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Let's Work Together</h2>
        <p style={styles.subheading}>
          Have a project in mind? Send us a message and let's create something amazing.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>

          {success && (
            <div style={styles.success}>
              ✅ Message Sent Successfully! we’ll get back to you shortly.
            </div>
          )}

          {error && (
            <div style={styles.error}>
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Phone (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />

          <textarea
            placeholder="Tell me about your project..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />

          <button
            type="submit"
            disabled={loading || success}
            style={{
              ...styles.button,
              background: success
                ? "#28a745"
                : loading
                ? "#555"
                : "#000",
              opacity: loading || success ? 0.6 : 1,
              transform: success ? "scale(1.05)" : "scale(1)",
            }}
          >
            {loading
              ? "Sending..."
              : success
              ? "Sent ✓"
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
    </ScrollReveal>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    background: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "600px",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
    textAlign: "center",
  },
  subheading: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "30px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  textarea: {
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    minHeight: "120px",
    resize: "none",
  },
  button: {
    padding: "15px",
    borderRadius: "8px",
    border: "none",
    background: "#000",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s ease",
    
  },
  success: {
    background: "#e6ffed",
    color: "#0f5132",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "500",
  },
  error: {
    background: "#ffe6e6",
    color: "#842029",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "500",
  },
};

export default Contact;
