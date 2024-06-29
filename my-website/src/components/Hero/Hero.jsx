import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Jeremiah Saemo</h1>
            <h2 className={styles.nav}>About</h2>
            <h2 className={styles.nav}>Portfolio</h2>
            <h2 className={styles.nav}>Contact</h2>
        </div>
    );
}

export default Hero;