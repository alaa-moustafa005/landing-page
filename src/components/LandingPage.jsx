import React from "react";
import "./LandingPage.css";
import { FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa"; // استيراد الأيقونات

export default function LandingPage() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">HubSpot</div>
        <nav className="navbar">
          <a href="#services">Services</a>
          <a href="#">Work</a>
          <a href="#">Blog</a>
          {/* السـيرش بار */}
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>
            Write eye-catching <br />
            <span className="highlight-orange">headline here</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus odit facilis quaerat, earum quam necessitatibus maxime tenetur non repudiandae vitae ducimus error ipsum, consequuntur corporis libero dolorum, nemo culpa.
          </p>
          <button>Call to action</button>
        </div>
        <img src="/assets/meeting.png" alt="Hero" />
      </section>

      {/* سكشن Services */}
      <section className="services" id="services">
        <h3>Our Services</h3>
        <div className="services-list">
          <div className="service-card">
            <FaLaptopCode size={40} />
            <h4>Web Development</h4>
            <p>Building responsive and modern websites tailored to your business needs.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt size={40} />
            <h4>Mobile Apps</h4>
            <p>Cross-platform mobile applications with seamless user experience.</p>
          </div>
          <div className="service-card">
            <FaChartLine size={40} />
            <h4>SEO & Marketing</h4>
            <p>Improve your visibility and reach with data-driven strategies.</p>
          </div>
        </div>
      </section>

     
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ad,Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Dolorem, illum! Provident totam quam laudantium sint, 
               sapiente tempora voluptates asperiores exercitationem quisquam sequi,
               quis dicta sed amet repellat qui rerum modi. incidunt.
                Architecto cum hic explicabo quibusdam!
            </p>
          </div>
          <div className="about-image">
            <img src="/assets/group.png" alt="About" />
          </div>
        </div>
      </section>

      {/* سكشن Contact */}
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
