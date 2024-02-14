import { useState,useEffect  } from 'react';
import lightImage from '../icons/light.svg'
import darkImage from '../icons/dark.svg'
import smkIcon from '../icons/smkn1kutaselatan.png'
import Image from 'next/image';

const Navbar  = () => {
    // Define state variables
    const [isOpen, setIsOpen] = useState<boolean>(false); // State for toggling navbar
    const [mode, setMode] = useState<boolean>(false); // State for managing mode (not clear what mode represents)
    const [modeCheck, setModeCheck] = useState<boolean>(false);  

    const onCheckboxChange = () => {
        setMode(!mode);
        sessionStorage.setItem('theme', mode ? 'light':'dark');
    };
  
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
    return (
        <nav className='w-full h-14 py-9  flex justify-between items-center z-50 backdrop-blur-sm fixed'>
            <a href='/' className=' px-4 md:text-3xl sm:px-8  text-second flex gap-2 cursor-pointer'style={{ fontFamily: "'Pacifico', cursive" }}>
                <Image
                src={smkIcon}
                alt='SMKN 1 Kuta Selatan Icon'
                width={35}
                height={25}
                />
                TKJ 2
            </a>
            
            <div className="content gap-8 px-8 hidden lg:flex items-center">
                <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">BERANDA</a>
                <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">TENTANG</a>
                <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">ANGGOTA</a>
                <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">MEMORI</a>

                    <input
                        type="checkbox"
                        id="mode-checkbox"
                        hidden
                        checked={mode}
                        onChange={onCheckboxChange}
                    />
                    <Image
                        src={mode ? lightImage : darkImage}
                        alt={mode ? 'Light' : 'Dark'}
                        id="mode"
                        title="Dark Mode"
                        className="w-8 ml-4 cursor-pointer"
                        onClick={onCheckboxChange}
                    />
                </div>

            <button className="flex items-center px-6  text-dark dark:text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className={`w-10 h-10 ${isOpen ? 'hidden' : 'block'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                    <svg
                        className={`w-10 h-10 ${isOpen ? 'block' : 'hidden'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className={`h-screen fixed inset-0 lg:hidden z-50 flex justify-end transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} Z-[9999]`} onClick={(e)=>{setIsOpen(false)}}>
                    <div className={`w-3/4  bg-white dark:bg-darkBg  backdrop-blur-sm  h-screen mt-16  `} onClick={(e) => e.stopPropagation()}>
                        <div className={` content w-full backdrop-filter backdrop-blur-5 flex items-center flex-col gap-4 text-center `}>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">BERANDA</a>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">TENTANG</a>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">ANGGOTA</a>
                            <a className='text-lg   cursor-pointer hover:text-second dark:text-primary dark:hover:text-second' href="">MEMORI</a>
                            <input
                                type="checkbox"
                                id="mode-checkbox"
                                hidden
                                checked={mode}
                                onChange={onCheckboxChange}
                            />
                            <Image
                                src={mode ? lightImage : darkImage}
                                alt={mode ? 'Light' : 'Dark'}
                                id="mode"
                                title="Dark Mode"
                                className="w-10 ml-4 cursor-pointer"
                                onClick={onCheckboxChange}
                            />
                        </div>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;
