import React from 'react';

function Toggle({ isDark, setIsDark, isShowingLogos, setIsShowingLogos }) {
    const handleOpacityToggle = () => {
        setIsShowingLogos((prev) => !prev); // Toggle the state for opacity effect
    };

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
            <p className="toggleLabel">LOGOS</p>
            <input
                type="checkbox"
                checked={!isShowingLogos}
                onChange={handleOpacityToggle}
            />
        </div>
    );
}

export default Toggle;
