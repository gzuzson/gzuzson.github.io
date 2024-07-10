import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className="content">
            <div className={styles.text}>
                <h1>About Me</h1>
                <p> Hi, I'm Jeremiah, but most people call me Miah - pronounced "ma-ya" </p>
                <p>
                    I am a final year IT student currently based in Melbourne (AUS),
                    specialising in Software Development, and focused on
                    building digital products and experiences for both mobile and the web.
                    Software is one of the mediums through which I express myself.
                </p>
                <p>
                    In my spare time, I enjoy tinkering around with software projects, like building mobile apps.
                    Outside of software, I enjoy spending time with family, reading books,
                    being in the sun, choosing an outfit to wear for the day, listening to music,
                    and following the sports of boxing and basketball.
                </p>
                <h2>Programming</h2>
                <p>
                    For me, the craft of programming is 99% the abstract; concepts like:  data structures,
                    algorithms, abstraction, best practices, architecture and design, people, culture, and
                    many other aspects that are agnostic to a particular programming language or technology.
                </p>
                <p>
                    When it comes to building new projects, I believe in 'The right tool for the right job',
                    and have written programs in a variety of different languages.  Nevertheless, the icons
                    in the background represent some of the tools that I am working with at the moment.
                </p>
                <h2>This Website</h2>
                <p>
                    This website was built using React.js and React Fiber (three.js)
                    and is hosted on Github Pages.  The website is maintained by me, last updated
                    2024-07-10 :)
                </p>
            </div>
        </div>
    );
}

export default About;