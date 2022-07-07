import  React from 'react';
import { useBodyScrollLock } from './hooks/bodyScrollLock';

const DishForm = ({toggled}) => {
    useBodyScrollLock(toggled);
    return (
        <div className='dish-card'>
            <form>
                <label>Name:</label>
                <input type="text" id="name" />
            </form>
        </div>
    )
};

export default DishForm;