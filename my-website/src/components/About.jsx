import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={`content ${styles.aboutContainer}`}>
      {/* Personal Snapshot */}
      <section className={styles.section}>
        <div className={styles.intro}>
          <div className={styles.image}>
            <img
              src="/images/miah.jpg"
              alt="Jeremiah Saemo"
              width="100%"
              height="auto"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textBlock}>
            <h1>Hey, I'm Jeremiah (Miah)</h1>
            <p>
              I’m a Melbourne-based developer and systems-thinker who loves
              turning ideas into working, meaningful software. Outside of tech,
              I’m a big fight-fan, and passionate about faith, community, and clarity in all things.
            </p>
            <p>
              In my spare time, you’ll find me with family, in church, playing
              sports, reading, or sketching out new ideas.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className={styles.section}>
        <h2>What I Do</h2>
        <ul className={styles.bulletList}>
          <li>Build full-stack apps that are robust and scalable</li>
          <li>Analyze data to surface insight and support decision-making</li>
          <li>Design clean, thoughtful interfaces with real users in mind</li>
        </ul>
      </section>

      {/* Philosophy */}
      <section className={styles.section}>
      <div className={styles.textBlock}>
          <h2>Philosophy</h2>
          <p>
          I believe that good software is more than functionality — it’s thoughtful,
          principled, and purpose-driven. At its best, technology reflects clarity
          of thought and care for people. I strive to bring both.
          </p>
          <p>
          My approach is grounded in systems thinking, structured reasoning, and a
          desire to build things that genuinely improve lives. Whether I’m writing
          code, solving design problems, or exploring data, I’m always searching for
          the deeper patterns that drive clarity, insight, and positive impact.
          </p>
      </div>
      </section>

      {/* Tools & Tech */}
      <section className={styles.section}>
        <h2>Tools & Technologies</h2>

        <div className={styles.techGroup}>
          <h4>Languages & Frameworks</h4>
          <div className={styles.badgeGrid}>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>Python</span>
            <span>Java</span>
            <span>React</span>
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className={styles.techGroup}>
          <h4>Tools & Platforms</h4>
          <div className={styles.badgeGrid}>
            <span>Git</span>
            <span>VSCode</span>
            <span>Bash</span>
            <span>Figma</span>
            <span>Adobe Photoshop</span>
            <span>Adobe Illustrator</span>
          </div>
        </div>
      </section>

      {/* Where I'm Headed */}
      <section className={styles.section}>
        <h2>Learning & Growing</h2>
        <p>
          I'm expanding into data science and business insights, where I hope to
          combine logic, systems thinking, and impact-driven design. I’m always
          looking to contribute to projects that serve a greater good.
        </p>
      </section>

      {/* Blog Teaser */}
      <section className={styles.section}>
        <h2>From My Blog</h2>
        <p>
          I write about software, systems thinking, faith + tech, and insights from projects I’ve built.
          <br />
          <Link to="/blog" className={styles.blogLink}>
            → Read latest posts
          </Link>
        </p>
      </section>
    </div>
  );
}

export default About;
