import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './Toggle'; // Import Toggle

function AppHeader({ isDark, setIsDark, isShowingLogos, setIsShowingLogos }) {
    return (
        <header className="App-header">
            <div className='header-top'>
            <nav>
                <Link to="/" className="logo">MIAH</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            </div>
            {/* Add the Toggle component */}
            <Toggle
                isDark={isDark}
                setIsDark={setIsDark}
                isShowingLogos={isShowingLogos}
                setIsShowingLogos={setIsShowingLogos}
            />
        </header>
    );
}

export default AppHeader;
