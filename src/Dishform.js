import  React, { useRef } from 'react';
import { useBodyScrollLock } from './hooks/bodyScrollLock';
import { useOnClickOutside } from './hooks/useOnClickOutside';
const DishForm = ({setToggle}) => {
    useBodyScrollLock();
    const ref = useRef();
    useOnClickOutside(ref, setToggle);

    return (
        <div className='dish-card' ref={ref}>
            <form>
                <label>Name:</label>
                <input type="text" id="name" />
            </form>
        </div>
    )
};
export default DishForm;