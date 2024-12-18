import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className="content">
            <div className={styles.text}>
                <h1>About Me</h1>
                <p>
                    Hi!  I'm Jeremiah, but most people call me Miah (ma-ya).  I'm a final year IT student 
                    currently based in Melbourne, Aus, with an avid interest in software and using its 
                    powers to contribute to the greater good. 

                    My experience mainly consists of working with full-stack tools - things such as the MEAN 
                    stack, CSS frameworks like Tailwind, and more - to analyse, design, and build applications 
                    for the web.  

                    In my spare time, I enjoy spending time with family, going to church, reading, learning 
                    more about tech, playing sports, and listening to music. 
                </p>
                <p>
                    Looking forward, I would love to learn more about data science and machine 
                    learning.  Seeing the things that other developers are doing with these technologies is
                    really inspiring, and I would love to be able to dive deeper into the field and build/contribute 
                    to projects that contribute to the betterment of others. 
                </p>
                <h2>Programming</h2>
                <p>
                    For me, programming is 99% the abstract; concepts like: data structures,
                    algorithms, abstraction, best practices, architecture, design, people, and
                    many other aspects that are agnostic to a particular programming language or technology.
                </p>
                <p>
                    I believe in 'The right tool for the right job, and have written programs in a variety of 
                    different languages. Nevertheless, the icons in the background represent some of the tools 
                    that I am working with at the moment (press 'LOGOS').
                </p>
                <h2>This Website</h2>
                <p>
                    This website was built using React.js and React Fiber (three.js)
                    and is hosted on Github Pages. The website is maintained by me, last updated
                    2024-12-18 :)
                </p>
            </div>
            <div className={styles.image}>
                <img src="/images/miah.jpg" alt="Photo of Jeremiah Saemo" width="100%" height="auto"/>
            </div>
        </div>
    );
}

export default About;
