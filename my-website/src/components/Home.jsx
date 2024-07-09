import React from "react";

function Home({isDark}) {
    return (
        <div className="content">
            <a className="project" href="https://theveryrare.co" target="_blank" rel="noopener noreferrer">
                    <img src={isDark ? "/tvr/Logo%20White.png" : "/tvr/Logo%20Black.png"} alt="TheVeryRare Logo" width="75%" />
            </a>
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
        </div>
    );
}

export default Home;