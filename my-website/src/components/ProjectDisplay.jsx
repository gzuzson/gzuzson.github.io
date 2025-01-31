import './ProjectDisplay.css';
import React, { useState } from "react";

function ProjectDisplay({ isDark }) {
  const [selectedProject, setSelectedProject] = useState("Project 1");
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = {
    "Project 1": {
      title: "FlagMaster 🇼🇸🇵🇭",
      description: "A flagmaking business specialising in providing a diverse range of flag products. FlagMaster were undergoing a business transformation from manual operations to a full online presence. Through a full-stack responsive web-based solution, this project automated FlagMaster's core business processes, improving customer and staff experience.",
      techStack: "CakePHP, MySQL, TailwindCSS, Fabric.js, Stripe API, cPanel",
      images: [
        "/images/projects/Frame 10.png",
        "/images/projects/Frame 11.png",
        "/images/projects/Frame 12.png",
        "/images/projects/Frame 13.png",
        "/images/projects/Frame 14.png",
        "/images/projects/Frame 15.png",
        "/images/projects/Frame 16.png",
        "/images/projects/Frame 17.png",
        "/images/projects/Frame 18.png",
      ],
    },
    "Project 2": {
      title: "Planted City Church 🌱",
      description: "A newly established church; Planted were looking to expand their online presence by building a website for visitors to learn more about their ministry.  This project provides a consolidated and responsive place for visitors to view the church's core information, contact the church for any queries, as well as donate to the church through a giving portal.",
      techStack: "Express.js, TailwindCSS, Node.js, Stripe API, Google API, render",
      images: [
        "/images/projects/Frame 4.png",
        "/images/projects/Frame 5.png",
        "/images/projects/Frame 6.png",
        "/images/projects/Frame 7.png",
        "/images/projects/Frame 8.png",
        "/images/projects/Frame 9.png",
        "/images/projects/image 19.png",
        "/images/projects/image 20.png",
        "/images/projects/image 21.png",
      ],
    },
    "Project 3": {
      title: "Energy Efficiency Council",
      description: "The EEC is Australia's peak body for energy management. Through Jake Knapp's design sprint framework, I, along with six others, was tasked with designing a comprehensive one-stop shop model for delivering energy efficiency upgrades and electrification in homes across the country. Our team developed a prototype for a new electrification app: EnergyEasy, providing a solution to electrification barriers for Australian homes such as: lack of clear and consistent information, consumer confidence in electric products, accessing financing, and low standards of service",
      techStack: "Figma",
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
    },
  };

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

  const handleProjectChange = (event) => setSelectedProject(event.target.value);

  return (
    <div className="project-display">
      {/* Top Menu for Project Selection */}
      <div className="top-menu">
        <select onChange={handleProjectChange} value={selectedProject}>
          <option value="Project 1">Project 1</option>
          <option value="Project 2">Project 2</option>
          <option value="Project 3">Project 3</option>
        </select>
      </div>

      {/* Content Row */}
      <div className="project-content">
        {/* Image Carousel */}
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src={currentImages[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>
          {/* Navigation Buttons */}
          <div className="carousel-nav">
            <button onClick={goToPrevious} className="carousel-btn">Prev</button>
            <button onClick={goToNext} className="carousel-btn">Next</button>
          </div>
        </div>

        {/* Project Details */}
        <div className="project-details">
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <p><strong>Tech Stack:</strong> {currentProject.techStack}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;