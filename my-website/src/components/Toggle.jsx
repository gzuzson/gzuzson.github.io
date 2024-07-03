import React from 'react';

function Toggle({ isDark, setIsDark }) {
    return (
        <div className="toggle">
            <p className="toggleLabel">LIGHT</p>
            <input
                type="checkbox"
                checked={!isDark}
                onChange={() => setIsDark(!isDark)}
            />
            <p className="toggleLabel">DARK</p>
            <input
                type="checkbox"
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
            />
        </div>
    );
}

export default Toggle;
