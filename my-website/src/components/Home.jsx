import React from "react";

function Home({isDark}) {
    const handleClick = () => {
        alert('Coming soon');
    };

    return (
        <div className="content">
            <a className="project" href="https://theveryrare.co" target="_blank" rel="noopener noreferrer">
                <img src={isDark ? "/images/Logo%20White.png" : "/images/Logo%20Black.png"} 
                    alt="TheVeryRare Logo" width="75%"/>
            </a>
            <a className="project" href="https://planted-city-church.onrender.com" target="_blank" rel="noopener noreferrer">
                <img
                    src={isDark ? "/images/logos/SVG/planted-white.svg" : "/images/logos/SVG/planted-black.svg"}
                    alt="Planted City Church Logo" width="70%"/>
            </a>
            <a className="project" href="https://u24s2103.iedev.org/" target="_blank" rel="noopener noreferrer">
                <img
                    src={isDark ? "/images/logos/SVG/flagmaster-white.svg" : "/images/logos/SVG/flagmaster-black.svg"}
                    alt="FlagMaster Logo" width="50%"/>
            </a>
            <a className="project" rel="noopener noreferrer" onClick={handleClick}>
                <img src={isDark ? "/images/logos/SVG/entry-logo-white.svg" : "/images/logos/SVG/entry-logo-black.svg"}
                     alt="Entry Logo" width="50%"/>
            </a>
            <a className="project" rel="noopener noreferrer"  onClick={handleClick}>
                <img
                    src={isDark ? "/images/logos/SVG/fiery-dragons-white.svg" : "/images/logos/SVG/fiery-dragons-black.svg"}
                    alt="Fiery Dragons Logo" width="50%"/>
            </a>
            <a className="project" href="https://github.com/gzuzson/StaticFactory" target="_blank" rel="noopener noreferrer">
                <img
                    src={isDark ? "/images/logos/SVG/static-factory-white.svg" : "/images/logos/SVG/static-factory-black.svg"}
                    alt="StaticFactory Logo" width="50%"/>
            </a>
        </div>
    );
}

export default Home;
