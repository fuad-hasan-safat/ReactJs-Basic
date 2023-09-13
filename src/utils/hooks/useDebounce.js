import React, { useState } from 'react'

export default function useDebounce() {

    const [typingtimeOut, setTypingtimeOut] = useState("");
    function debounce(func, wait = 1000) {
        clearTimeout(typingtimeOut);
        const timeout = setTimeout(() =>{func();} , wait);
        setTypingtimeOut(timeout);
    }

    return debounce;
}
