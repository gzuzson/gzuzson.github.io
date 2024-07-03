import './App.css';
import React from "react";
import useLocalStorage from "use-local-storage";
import AppHeader from "./components/AppHeader/AppHeader";
import Toggle from "./components/Toggle/Toggle";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
      <div className="App" data-theme={isDark ? "dark" : "light"}>
          <AppHeader />
          <main className="App-main">
              <Toggle isDark={isDark} setIsDark={setIsDark}/>
              <div className="content">
                  <div className="project">
                      TheVeryRare
                  </div>
                  <div className="project">
                      Entry
                  </div>
                  <div className="project">
                      FieryDragons
                  </div>
                  <div className="project">
                      StaticFactory
                  </div>
                  <div className="project">
                      Graphic Design Work
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