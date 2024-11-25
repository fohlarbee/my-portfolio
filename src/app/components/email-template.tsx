import React from 'react';

type Props = {
  name: string;
  subject: string;
  message: string;
}
const EmailTemplate = ({ name, subject, message }: Props) => (
  <div
    style={{
      fontFamily: "'Arial', sans-serif, Poppins ",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "0.5px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      
    }}
  >
    <header
      style={{
        textAlign: "center",
        marginBottom: "20px",
        borderBottom: "2px solid #1F4529",
        paddingBottom: "5px",
      }}
    >
      <h1 style={{ color: "#1F4529", fontSize:"16px" }}>Thank You for Reaching Out!</h1>
    </header>
    <main>
      <h2 style={{ fontSize: "20px", color: "#555" }}>
        Hi {name || "there"},
      </h2>
      <p style={{ fontSize: "16px", color: "#666" }}>
        Thank you for getting in touch through my portfolio website. I&apos;ve
        received your message:
      </p>
      <blockquote
        style={{
          fontSize: "16px",
          fontStyle: "italic",
          color: "#444",
          backgroundColor: "#f2f2f2",
          padding: "10px",
          borderLeft: "4px solid #1F4529",
          margin: "15px 0",
        }}
      >
        {subject || "Your subject goes here"}: &quot;{message || "Your message goes here"}&quot;
        {/* &quot;{message || "Your message goes here"}&quot; */}
      </blockquote>
      <p style={{ fontSize: "16px", color: "#666" }}>
        I’ll get back to you as soon as possible. If you’d like to provide any
        additional details, feel free to reply directly to this email.
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href={`mailto:"sammyola246@gmail.com"`}
          style={{
            display: "inline-block",
            padding: "12px 20px",
            fontSize: "12px",
            fontWeight:"bold",
            color: "#fff",
            backgroundColor: "#1A5319",
            textDecoration: "none",
            borderRadius: "5px",
          }}

        >
          Reply to This Email
        
        </a>
      </div>
    </main>
    <footer
      style={{
        marginTop: "30px",
        textAlign: "center",
        fontSize: "12px",
        color: "#999",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Dev.Fohlarbee. All rights reserved.
      </p>
      <p>
        This email was sent from my portfolio website:{" "}
        <a
          href="https://my-portfolio-beta-three-33.vercel.app"
          style={{ color: "#0073e6", textDecoration: "none" }}
        >
          dev.fohlarbee
        </a>
      </p>
    </footer>
  </div>
);

export default EmailTemplate;