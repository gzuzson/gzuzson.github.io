import React from "react";
import { Link } from 'react-router-dom';

function Home({isDark}) {
    const handleClick = () => {
        alert('Coming soon');
    };

    const services = [
      {
        title: "Custom Website Development",
        description: "From portfolio sites to e-commerce platforms, I build responsive, modern websites tailored to your needs.",
      },
      {
        title: "Web Application Development",
        description: "Need something more complex? I create interactive web applications with React and modern technologies.",
      },
      {
        title: "Website Optimization",
        description: "Improve your existing website's performance, SEO, and user experience.",
      }
    ];

    return (
        <div className="content"> 
            {/* Services Header */}
            <div className="services-header">
                <h2>Transform Your Online Presence</h2>
                <p>
                    With a track record of successful projects and satisfied clients, I'll help bring your vision to life with clean, modern web development.
                </p>
            </div>
            <div className="projects-grid"> 
                <a className="project" href="https://theveryrare.co" target="_blank" rel="noopener noreferrer">
                    <img src={isDark ? "/images/Logo%20White.png" : "/images/Logo%20Black.png"} 
                        alt="TheVeryRare Logo" width="75%"/>
                </a>
                <a className="project" href="https://planted-city-church.onrender.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={isDark ? "/images/logos/SVG/planted-white.svg" : "/images/logos/SVG/planted-black.svg"}
                        alt="Planted City Church Logo" width="70%"/>
                </a>
                <a className="project" href="https://u24s2103.iedev.org/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={isDark ? "/images/logos/SVG/flagmaster-white.svg" : "/images/logos/SVG/flagmaster-black.svg"}
                        alt="FlagMaster Logo" width="50%"/>
                </a>
                <a className="project" rel="noopener noreferrer" onClick={handleClick}>
                    <img src={isDark ? "/images/logos/SVG/entry-logo-white.svg" : "/images/logos/SVG/entry-logo-black.svg"}
                         alt="Entry Logo" width="50%"/>
                </a>
                <a className="project" rel="noopener noreferrer"  onClick={handleClick}>
                    <img
                        src={isDark ? "/images/logos/SVG/fiery-dragons-white.svg" : "/images/logos/SVG/fiery-dragons-black.svg"}
                        alt="Fiery Dragons Logo" width="50%"/>
                </a>
                <a className="project" href="https://github.com/gzuzson/StaticFactory" target="_blank" rel="noopener noreferrer">
                    <img
                        src={isDark ? "/images/logos/SVG/static-factory-white.svg" : "/images/logos/SVG/static-factory-black.svg"}
                        alt="StaticFactory Logo" width="50%"/>
                </a>
            </div>

            {/* Services Grid and CTA */}
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="cta-section">
                <h3>Ready to Start Your Project?</h3>
                <p>
                    Let's discuss how I can help you achieve your goals. I offer competitive rates and flexible collaboration options.
                </p>
                <Link to="/contact" className="cta-button">
                    Get in Touch →
                </Link>
            </div>
        </div>
    );
}

export default Home;
