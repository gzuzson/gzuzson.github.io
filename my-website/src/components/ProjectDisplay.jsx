import './ProjectDisplay.css';
import React, { useState, useEffect } from "react";

function ProjectDisplay({ isDark }) {
  const [selectedProject, setSelectedProject] = useState("Project 1");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const projects = {
    "Project 1": {
      title: "Monash Paramedicine 🚑",
      role: "Software Developer/Data Analyst",
      contribution: "Led development of a web-based assessment tool to support community paramedics in co-designing health programs with underserved populations. Designed database schema, built full-stack features using CakePHP, implemented offline support with IndexedDB and Dexie.js, and integrated data visualization (D3.js, ECharts) and PDF report generation. Translated qualitative insights into quantitative formats to enable scalable analysis.", 
      images: [
        "images/projects/cpnat/1.png",
        "images/projects/cpnat/2.png",
        "images/projects/cpnat/3.png",
        "images/projects/cpnat/4.png",
        "images/projects/cpnat/5.png",
        "images/projects/cpnat/6.png",
        "images/projects/cpnat/7.png",
      ], 
      features: "Offline-first assessment platform with real-time response saving, collaborative editing with permission control, domain-based question templates, branching logic, interactive charts, exportable reports, and public/private assessment modes with search and filter capabilities.",
    },
    "Project 2": {
      title: "Energy Efficiency Council 💡",
      role: "UX/UI Designer",
      contribution: "Collaborated in a cross-functional team to prototype an electrification app using design thinking methodologies. Focused on user flow, pain points, and interface clarity to guide product vision.",
      images: [
        "/images/projects/eec/Frame 221.png",
        "/images/projects/eec/Frame 222.png",
        "/images/projects/eec/Frame 223.png",
        "/images/projects/eec/Frame 224.png",
        "/images/projects/eec/Frame 225.png",
        "/images/projects/eec/Frame 226.png",
        "/images/projects/eec/Frame 227.png",
        "/images/projects/eec/Frame 228.png",
        "/images/projects/eec/Frame 229.png",
      ],
      features: "Prototype with myGov sign-in flow, customer dashboard, book-an-inspector/installer, centralized info hub, and rewards tracker to increase consumer adoption"
    },
    "Project 3": {
      title: "FlagMaster 🏁",
      role: "Web Developer",
      contribution: "Led development, implemented full-stack functionality and system architecture.",
      images: [
        "/images/projects/flagmaster/Frame 10.png",
        "/images/projects/flagmaster/Frame 11.png",
        "/images/projects/flagmaster/Frame 12.png",
        "/images/projects/flagmaster/Frame 13.png",
        "/images/projects/flagmaster/Frame 14.png",
        "/images/projects/flagmaster/Frame 15.png",
        "/images/projects/flagmaster/Frame 16.png",
        "/images/projects/flagmaster/Frame 17.png",
        "/images/projects/flagmaster/Frame 18.png",
      ],
      features: "Fully responsive website with admin dashboard, customer dashboard, add-to-cart, checkout, FlagMaker (Create your own custom flags), customer sign-in and sign-up"
    },
    "Project 4": {
      title: "Planted City Church 🌱",
      role: "Full-Stack Developer",
      contribution: "Designed and developed a responsive website to support online engagement, donations, and contact for a newly launched ministry. Integrated third-party APIs and deployed the site with zero downtime.",
      images: [
        "/images/projects/pcc/Frame 4.png",
        "/images/projects/pcc/Frame 5.png",
        "/images/projects/pcc/Frame 6.png",
        "/images/projects/pcc/Frame 7.png",
        "/images/projects/pcc/Frame 8.png",
        "/images/projects/pcc/Frame 9.png",
        "/images/projects/pcc/image 19.png",
        "/images/projects/pcc/image 20.png",
        "/images/projects/pcc/image 21.png",
      ],
      features: "Responsive landing page, Stripe-based giving portal, contact-us form with Google CAPTCHA, embedded social links, Google Maps integration for church location"
    },
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentProject = projects[selectedProject];
  const currentImages = currentProject.images;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length
    );
  };

  return (
    <div id="projects" className="project-display">
      <div className={"project-layout " + (isMobile ? "mobile" : "desktop")}> 
        {!isMobile && (
          <div className="project-sidebar">
            {Object.entries(projects).map(([key, project]) => (
              <button
                key={key}
                className={`project-tab ${selectedProject === key ? "active" : ""}`}
                onClick={() => {
                  setSelectedProject(key);
                  setCurrentIndex(0);
                }}
              >
                <h2>{project.title}</h2>
              </button>
            ))}
          </div>
        )}

        <div className="project-main">
          {isMobile && (
            <select
              className="project-select"
              value={selectedProject}
              onChange={(e) => {
                setSelectedProject(e.target.value);
                setCurrentIndex(0);
              }}
            >
              {Object.entries(projects).map(([key, project]) => (
                <option key={key} value={key}>{project.title}</option>
              ))}
            </select>
          )}

          <div className="carousel-container">
            <img
              src={currentImages[currentIndex]}
              alt={`${currentProject.title} Screenshot ${currentIndex + 1}`}
              className="carousel-image"
            />
            <div className="carousel-nav">
              <button onClick={goToPrevious} className="carousel-btn">Prev</button>
              <button onClick={goToNext} className="carousel-btn">Next</button>
            </div>
          </div>

          <div className="project-details">
            <h2>{currentProject.title}</h2>
            <p><strong>Role:</strong> {currentProject.role}</p>
            <p><strong>Contribution:</strong> {currentProject.contribution}</p>
            <p><strong>Core Features:</strong> {currentProject.features}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;