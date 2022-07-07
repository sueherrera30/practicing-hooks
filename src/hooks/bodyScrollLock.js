import { useLayoutEffect } from "react";

export function useBodyScrollLock () {
   useLayoutEffect(() => {
    const originalOverFlow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        document.body.style.background = 'pink';
        return () => {
            document.body.style.overflow = originalOverFlow;
            document.body.style.backgroundColor = 'white';
        };
   }) 
};

