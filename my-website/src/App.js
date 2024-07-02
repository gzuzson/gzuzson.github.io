import './App.css';
import React from "react";
import useLocalStorage from "use-local-storage";
import {Toggle} from "./components/Toggle/Toggle";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
      <div className="App" data-theme={isDark ? "dark" : "light"}>
          <header className="App-header">
              <nav>
                  <a>About</a>
                  <a>Projects</a>
                  <a>Contact</a>
              </nav>
          </header>
          <main className="App-main">
              <div className="content">
                  <p>
                      I am Jeremiah Saemo, a UI Designer with full-stack web development skills,
                      currently based in Melbourne, Australia.
                  </p>
                  <h1 className="hero">MIAH</h1>
              </div>
          </main>
      </div>
  );
}

export default App;