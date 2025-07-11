import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import ProjectDisplay from "./ProjectDisplay";

function Home({isDark}) {
    const handleClick = () => {
        alert('Coming soon');
    };

    const notAvailable = () => {
        alert('This project is no longer available')
    }

    return (
        <div className="home-container">
            {/* Landing Page */}
            <div className="landing-page">
                <div className="hero-text">
                    <h1>Developer. Analyst. Designer.</h1>
                    <p>
                        I design and build reliable, scalable, and insight-driven software systems—from clean front-end interfaces to robust back-end logic and real-time data tools. With experience across full-stack development and a passion for structured thinking, I bring clarity to complex problems through code.
                    </p>
                    <p>
                        My work reflects a deep interest in logic, systems, and uncovering truth through data—whether I’m developing collaborative web apps, building decision-support tools, or analyzing behaviour in complex environments.
                    </p>
                    <div className="hero-actions">
                      <ScrollLink to="projects" className="primary-btn" smooth={true} duration={500}>My Projects</ScrollLink>
                      <RouterLink to="/contact" className="secondary-btn">Hire Me</RouterLink>
                    </div>
                </div>
            </div>

            <div className="content"> 
                {/* Services Header */}
                <div className="services-header">
                    <h2>What I bring to a Team</h2>
                    <p>
                        I combine technical fluency with systems thinking to build tools that are robust, scalable, and grounded in real-world understanding. Whether contributing to a team or leading development, I bring structure, clarity, and an obsession with getting the fundamentals right.
                    </p>
                </div>

                <div className="skills-overview">
                  <h2>Core Strengths</h2>
                  <div className="skills-grid">
                    <div className="skill">
                      <h4>System Architecture</h4>
                      <p>I break down complexity and build scalable systems with clean backend logic and efficient data flow.</p>
                    </div>
                    <div className="skill">
                      <h4>Data & Insight</h4>
                      <p>I love using data to find patterns, derive insight, and drive decision-making—turning ambiguity into clarity.</p>
                    </div>
                    <div className="skill">
                      <h4>Full-Stack Web Dev</h4>
                      <p>From beautiful UIs to reliable backend systems, I deliver complete web apps using modern frameworks.</p>
                    </div>
                  </div>
                </div>

                <div id="projects" className="projects-header">
                  <h2>Highlighted Projects</h2>
                  <p>Here are some of the systems I've built—from collaborative tools to live applications solving real-world problems.</p>
                </div>

                <ProjectDisplay isDark={false} />

                <div className="approach-toolbox-section">
                  <div className="approach">
                    <h2>My Approach</h2>
                    <p>
                      I believe great software starts with empathy and ends with impact. Whether it’s a lightweight prototype or a full-scale system, I value clarity, context, and craftsmanship in every step—from understanding user needs to delivering clean, maintainable code.
                    </p>
                    <p>
                      I don’t just build features—I build systems that make sense.
                    </p>
                  </div>

                  <div className="toolbox">
                    <h2>Toolbox</h2>
                    <p>
                      Here are some of the technologies I’ve worked with to deliver full-stack, data-powered systems:
                    </p>
                    <ul className="stack-list">
                        <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, PHP, Java, Python</li>
                        <li><strong>Databases:</strong> MySQL, MongoDB</li>
                        <li><strong>Frontend:</strong> Vanilla JS, Bootstrap, Tailwind CSS, React</li>
                        <li><strong>Backend:</strong> CakePHP, Node.js, Flask</li>
                        <li><strong>Design & UX:</strong> Figma, Adobe Photoshop, Adobe Illustrator</li>
                        <li><strong>Dev Tools:</strong> Git, Bash, VS Code, Postman</li>
                        <li><strong>Data Analysis:</strong> Python (Pandas, NumPy), SQL, Excel, CSV pipelines, Data Cleaning</li>
                        <li><strong>Data Visualization:</strong> Google Charts, ECharts, D3.js</li>
                    </ul>
                  </div>
                </div>

                <div className="cta-section">
                <h3>Let’s Build Something Thoughtful</h3>
                <p>
                    Whether you’re building a product, solving a problem, or exploring a prototype—I’d love to hear from you.
                </p>
                <RouterLink to="/contact" className="cta-button">Start a Conversation →</RouterLink>
                </div>
            </div>
        </div>
    );
}

export default Home;
