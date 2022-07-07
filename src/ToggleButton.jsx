import React, { useState, useContext } from 'react';
import { UserContext } from './App';
import DishForm from './Dishform';

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
                isToggled && <DishForm />
            }
        </div>
    );
};
