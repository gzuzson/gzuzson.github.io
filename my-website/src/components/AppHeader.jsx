import React from 'react';
import { Link } from 'react-router-dom';

function AppHeader() {
    return (
        <header className="App-header">
            <Link to="/" className="logo">MIAH</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default AppHeader;