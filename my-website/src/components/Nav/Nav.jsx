import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.nav}>About</h1>
            <h1 className={styles.nav}>Projects</h1>
            <h1 className={styles.nav}>Contact</h1>
        </div>
    );
}

export default Nav;