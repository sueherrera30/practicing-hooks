import { useState, useEffect } from "react";

export const useTitle = (initialValue) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        document.title = value;
      });
    
    // return [value, setValue];
    return  [value, setValue];
}