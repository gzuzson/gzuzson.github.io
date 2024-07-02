import React from 'react';
import HeroSVG from "./HeroSVG/HeroSVG";
import AnimatedText from "./AnimatedText/AnimatedText";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <HeroSVG />
            <AnimatedText className={styles.animation}/>
        </div>
    );
};

export default Hero;
