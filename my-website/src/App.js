import './App.css';
import React, {useState} from "react";
import useLocalStorage from "use-local-storage";
import AppHeader from "./components/AppHeader";
import Toggle from "./components/Toggle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ThreeScene from "./components/ThreeScene/ThreeScene";
import {Canvas} from "@react-three/fiber";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);
    const [isBlurOn, setIsBlurOn] = useState(true); // State for blur effect

    return (
        <BrowserRouter>
            <div className="App" data-theme={isDark ? "dark" : "light"}>
                <AppHeader/>
                <main className="App-main">
                    <Toggle isDark={isDark} setIsDark={setIsDark} isBlurOn={isBlurOn} setIsBlurOn={setIsBlurOn} />
                    <Routes>
                        <Route path="/" element={<Home isDark={isDark}/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
            </div>
            <div className="background" style={{ filter: isBlurOn ? 'blur(10px)' : 'none' }}>
                <Canvas camera={{position: [0, 0, 10]}}>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <ThreeScene />
                </Canvas>,
            </div>
        </BrowserRouter>
    );
}

export default App;