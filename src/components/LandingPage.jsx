import React from "react";
import "./LandingPage.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">HubSpot</div>
        <nav className="navbar">
          <a href="#services">Services</a>
          <a href="#about">Work</a>
          <a href="#">Blog</a>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Write eye-catching <br />
            <span className="highlight-orange">headline here</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            minus odit facilis quaerat, earum quam necessitatibus maxime tenetur
            non repudiandae vitae ducimus error ipsum, consequuntur corporis libero
            dolorum, nemo culpa.
          </p>
          <button>Call to action</button>
        </div>
        <img src="/assets/meeting.png" alt="Hero" />
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h3>Our Services</h3>
        <div className="services-list">
          <div className="service-card">
            <FaLaptopCode size={40} />
            <h4>Web Development</h4>
            <p>
              Building responsive and modern websites tailored to your business
              needs.
            </p>
          </div>
          <div className="service-card">
            <FaMobileAlt size={40} />
            <h4>Mobile Apps</h4>
            <p>
              Cross-platform mobile applications with seamless user experience.
            </p>
          </div>
          <div className="service-card">
            <FaLaptopCode size={40} />
            <h4>Web Development</h4>
            <p>
              Building responsive and modern websites tailored to your business
              needs.
            </p>
          </div>
          <div className="service-card">
            <FaChartLine size={40} />
            <h4>SEO & Marketing</h4>
            <p>
              Improve your visibility and reach with data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Social Media Icons */}
      <section className="about" id="about">
        <h3>About us</h3>
        <div className="about-content">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              dolorem, illum! Provident totam quam laudantium sint, sapiente tempora
              voluptates asperiores exercitationem quisquam sequi, quis dicta sed
              amet repellat qui rerum modi.
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>

          <div className="about-image">
            <img src="/assets/group.png" alt="About" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-content">
          <div className="contact-image">
            <img src="/assets/image.png" alt="Contact Visual" />
          </div>
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
