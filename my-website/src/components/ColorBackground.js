import styles from './ColorBackground.module.css';

const ColorBackground = () => {
    return (
        <div className={styles.container}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
        </div>
    );
}

export default ColorBackground;