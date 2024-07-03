import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className="content">
            <div className={styles.text}>
                <p> Hi :) </p>
                <p>
                    I'm Jeremiah, but most people call me Miah  - pronounced "ma-ya".
                </p>
                <p>
                    I am a Full Stack Developer currently based in Melbourne (AUS),
                    focused on building digital products and experiences for both mobile and the web,
                    but, more importantly, for the people that use it.
                </p>
                <p>
                    I believe that people ignore design that ignores people, and so I believe successful design
                    is achieved through understanding the people I am designing for.  Having the ability to
                    outline problems, or come up with ideas, and being able to create value by generating
                    solutions, is something that brings me great joy.
                </p>
                <p>
                    The icons in the background represent some of the tools I am currently working with.
                    {/*
                    - React
                    - JavaScript
                    - TypeScript
                    - Git
                    - CSS
                    - PHP
                    - CakePHP
                    - Java
                    - MySQL
                    - MongoDB
                    */}
                </p>
                <p>
                    Let's connect!
                </p>
            </div>
        </div>
    );
}

export default About;