import React from "react";

import "./Home.css";
import logo from "../assets/default.svg";
import LearnBrige from "../assets/LearnBrige.png";
import Navbar from "./Navbar";
import web from "../assets/web.png";
import cs from "../assets/cs.png";

const techStacks = [
  "React",
  "Node.js",
  "MongoDB",
  "GraphQL",
  "Redux",
  "Express",
  "Docker",
  "Kubernetes",
  "TypeScript",
  "Firebase",
  "Webhooks",
  "gRPC",
  "OAuth",
  "Next.js",
  "TailwindCSS",
  "Jest",
  "Socket.io",
  "MySQL",
  "PostgreSQL",
  "RabbitMQ",
  "Redis",
  "Elasticsearch",
  "SASS",
  "Styled Components",
  "AWS",
  "Google Cloud",
  "Azure",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitHub Actions",
  "CircleCI",
  "FastAPI",
  "Spring Boot",
  "Flask",
  "Django",
];

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Enhance Your Skills with </h1><h1 className="hero1-text">Our LMS</h1>
          <p>Explore top courses and start learning today!</p>
          <div>
          <button className="cta-button">Start Learning</button>
          </div>
         
        </div>
        <div className="hero-image">
          <img src={logo} alt="Learning" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <h2>Explore Our Categories</h2>
      </div>

      

      <div className="courses-container">
        <div className="course-item">
          <img src={LearnBrige} alt="Quantitavive Apptitude" className="course-img" />
          <h3>Quantitative Apptitude</h3>
          
          
          <span className="language">🌍 English</span>
          <button className="view-details">View Details</button>
        </div>

        <div className="course-item">
          <img src={web} alt="web development" className="course-img" />
          <h3>Web Development</h3>
          
          
          <span className="language">🌍Tamil</span>
          <button className="view-details">View Details</button>
        </div>

        <div className="course-item">
          <img src={cs} alt="System Fundamendals" className="course-img" />
          <h3>Core-CS</h3>
          
          <span className="language">🌍Tamil</span>
          <button className="view-details">View Details</button>
        </div>
      </div>
          
        
      

      {/* Tech Stack Carousel with Three Rows */}
      <div className="techstack-wrapper">
        {[...Array(3)].map((_, rowIndex) => (
          <div className="techstack-container" key={rowIndex}>
            <div
              className={`techstack-carousel ${
                rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
              }`}
            >
              {[...techStacks, ...techStacks].map((tech, index) => (
                <div key={index} className="techstack-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Room Section */}
      <div className="chat-room">
        <p>Join our course chat room</p>
        <input type="text" placeholder="Ask a Doubt" />
        <button className="search-button">🔍</button>
      </div>

      {/* Footer */}
      <footer>
        <center>
          <h2>Contact</h2>
          <h3>+91 1234567890 | learnbridge@gmail.com</h3>
          <p>9th street Avenue Park, Madurai, 625620</p>
        </center>
      </footer>
    </div>
  );
};

export default Home;