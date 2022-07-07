import { useEffect } from "react";

export const useOnClickOutside = (ref, setToggle) =>{
    useEffect(() => {
        console.log('Hellloito REFFFFFFFFF!!!!!', ref.current)
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)) return;
            setToggle();
        }
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
        }
    }, []);
};