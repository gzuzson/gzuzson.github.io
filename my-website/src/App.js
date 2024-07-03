import './App.css';
import React from "react";
import useLocalStorage from "use-local-storage";
import AppHeader from "./components/AppHeader";
import Toggle from "./components/Toggle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    return (
        <BrowserRouter>
            <div className="App" data-theme={isDark ? "dark" : "light"}>
                <AppHeader/>
                <main className="App-main">
                    <Toggle isDark={isDark} setIsDark={setIsDark}/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;