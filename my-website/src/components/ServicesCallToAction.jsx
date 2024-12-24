import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCallToAction.css';

const ServicesCallToAction = () => {
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
    <div className="services-container">
      <div className="services-header">
        <h2>Transform Your Online Presence</h2>
        <p>
          With a track record of successful projects and satisfied clients, I'll help bring your vision to life with clean, modern web development.
        </p>
      </div>

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
};

export default ServicesCallToAction;
