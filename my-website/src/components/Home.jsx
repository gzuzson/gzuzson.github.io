import React from "react";

function Home({isDark}) {
    const handleClick = () => {
        alert('Coming soon');
    };

    return (
        <div className="content">
            <a className="project" href="https://theveryrare.co" target="_blank" rel="noopener noreferrer">
                <img src={isDark ? "/images/Logo%20White.png" : "/images/Logo%20Black.png"} alt="TheVeryRare Logo"
                     width="75%"/>
            </a>
            <a className="project" rel="noopener noreferrer" onClick={handleClick}>
                <img src={isDark ? "/images/logos/SVG/entry-logo-white.svg" : "/images/logos/SVG/entry-logo-black.svg"}
                     alt="Entry Logo" width="50%"/>
            </a>
            <a className="project" rel="noopener noreferrer"  onClick={handleClick}>
                <img
                    src={isDark ? "/images/logos/SVG/fiery-dragons-white.svg" : "/images/logos/SVG/fiery-dragons-black.svg"}
                    alt="Entry Logo" width="50%"/>
            </a>
            <a className="project" href="https://github.com/gzuzson/StaticFactory" target="_blank" rel="noopener noreferrer">
                <img
                    src={isDark ? "/images/logos/SVG/static-factory-white.svg" : "/images/logos/SVG/static-factory-black.svg"}
                    alt="Entry Logo" width="50%"/>
            </a>
        </div>
    );
}

export default Home;