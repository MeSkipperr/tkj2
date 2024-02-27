'use client'
import { useState,useEffect } from 'react';

export const useModeState = () => {
  //*mode dark or light

  const [mode, setMode] = useState<boolean>(false); // State for managing mode (not clear what mode represents)
  const [modeCheck, setModeCheck] = useState<boolean>(false);  

  useEffect (()=>{
      const sessionTheme = sessionStorage.getItem('theme');
      if(sessionTheme == 'dark'){
          setMode(true)
      }else if(sessionTheme === null){
          if(!modeCheck){
              const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              sessionStorage.setItem('theme', !isDarkMode ? 'light':'dark');
              setModeCheck((true))
          }
      }else{
        setMode(false)
      }
  },[setMode,setModeCheck,modeCheck])

  useEffect(() => {
      if (mode) {
          document.body.classList.add("dark");
      } else {
          document.body.classList.remove("dark");
      }
  });

  //* Check this LG screen or not

  
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      if (window.innerWidth >= 992) {
        setIsLgScreen(true); // If screen size is large (lg)
      } else {
        setIsLgScreen(false); // If screen size is small (sm) or default
      }
    }

    checkScreenSize();

    // Add event listener to monitor screen size changes
    window.addEventListener('resize', checkScreenSize);

    // Cleanup: remove event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  return { mode, setMode ,isLgScreen};
};
