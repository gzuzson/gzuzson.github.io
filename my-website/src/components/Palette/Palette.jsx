import styles from './Palette.module.css';

const Palette = () => {
    return (
        <div className={styles.container}>
            <div className={styles.square1}></div>
            <div className={styles.square2}></div>
            <div className={styles.square3}></div>
            <div className={styles.square4}></div>
        </div>
    );
}

export default Palette;