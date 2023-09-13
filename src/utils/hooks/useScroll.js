import React, { useEffect, useState } from 'react'

export default function useScroll() {
 const [schrollPosition, setSchrollPosition] = useState(null);

 function handleScroll(){
    setSchrollPosition(window.scrollY);
 }

 useEffect(() => {
   document.addEventListener('scroll',handleScroll);
   return()=> document.removeEventListener('scroll',handleScroll);
   
 }, [])
 

 return schrollPosition;
}
