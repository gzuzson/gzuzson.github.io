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
              <a href="#" className="hero">MIAH</a>
              <nav>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
              </nav>
          </header>
          <main className="App-main">
              <div className="toggle">
                  <a>DARK</a>
                  <a>LIGHT</a>
                  <a>FONT</a>
              </div>
              <div className="content">
                  <div className="project">
                      This is an example
                  </div>
                  <div className="project">
                      This is an example
                  </div>
                  <div className="project">
                      This is an example
                  </div>
                  <div className="project">
                      This is an example
                  </div>
                  <div className="project">
                      This is an example
                  </div>
                  <div className="project">
                      This is an example
                  </div>
                  <div className="project">
                      This is an example
                  </div>
                  <div className="project">
                      This is an example
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;