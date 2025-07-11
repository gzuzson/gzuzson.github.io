import './App.css';
import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import AppHeader from "./components/AppHeader";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ThreeScene from "./components/ThreeScene/ThreeScene";
import { Canvas } from "@react-three/fiber";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference); // State for dark mode
    const [isShowingLogos, setIsShowingLogos] = useState(true); // State for ThreeScene visibility

    return (
        <HashRouter>
            <div className="App" data-theme={isDark ? "dark" : "light"}>
                {/* Pass toggle props to AppHeader */}
                <AppHeader
                    isDark={isDark}
                    setIsDark={setIsDark}
                    isShowingLogos={isShowingLogos}
                    setIsShowingLogos={setIsShowingLogos}
                />
                <main className="App-main">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home isDark={isDark} />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<BlogList />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                        </Routes>
                    </div>
                </main>

            </div>
            
            {/* Conditionally render ThreeScene */}
            {isShowingLogos && (
                <div className="background">
                    <Canvas
                        camera={{ position: [0, 0, 10] }}
                        style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        pointerEvents: 'none',
                        overflow: 'hidden',
                        }}
                    >
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            decay={0}
                            intensity={Math.PI}
                        />
                        <pointLight
                            position={[-10, -10, -10]}
                            decay={0}
                            intensity={Math.PI}
                        />
                        <ThreeScene />
                    </Canvas>
                </div>
            )}
        </HashRouter>
    );
}

export default App;
