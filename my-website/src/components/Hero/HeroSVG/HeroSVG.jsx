import {ReactComponent as SVG} from './hero.svg'
import styles from './HeroSVG.module.css'

const HeroSVG = () => (
    <div className={styles.container}>
       <SVG className={styles.svg}></SVG>
    </div>
);

export default HeroSVG;