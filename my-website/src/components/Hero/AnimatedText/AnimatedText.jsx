import {useEffect, useState} from "react";
import styles from "./AnimatedText.module.css";

const words = [
    "Jeremiah Saemo",
    "Full Stack Developer",
    "Mobile Developer",
    "Graphic Designer",
];

const AnimatedText = () => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [wordIndex, setWordIndex] = useState(0);

    const changeWord = () => {
        if(wordIndex < words.length - 1) {
            setWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }
    };

    useEffect(() => {
        if(wordIndex < words.length - 1) {
            const interval = setInterval(changeWord, 5000);
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        setCurrentWord(words[wordIndex]);
    }, [wordIndex]);

    return (
        <div className={styles.container}>
            <h1 className={styles.typing}>
                {currentWord}
            </h1>
        </div>
    );
}

export default AnimatedText;