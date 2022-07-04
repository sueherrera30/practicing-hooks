import React, { useState, useContext } from 'react';
import { UserContext } from './App';

export const ToggleButton = () => {
    const [isToggled, setToggle] = useState(false);
    const user = useContext(UserContext);
    console.log('context', user);

    const handleToggle = () => setToggle(!isToggled);
    return (
        <div>
            <button onClick={handleToggle}>
                Toggle
            </button>
            {
                isToggled && <h1>hello toggle!</h1>
            }
        </div>
    );
};
