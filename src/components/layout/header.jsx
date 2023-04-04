import { useState } from 'react'

const Header = ({toggleLightMode, changeActivePage}) => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    function toggleMobileMenu() {
        mobileMenuActive === true ? setMobileMenuActive(false) : setMobileMenuActive(true)
    }

    return (
        <header>
            <nav className='flex flex-col items-center max-w-screen-xl mx-auto md:flex-row md:justify-between 2xl:px-0 md:px-12'>
                <button id='logo' onClick={()=>changeActivePage('weather')} className='flex items-center self-start my-4 mx-4' role='link'>
                    <span className='text-2xl text-emerald-600 font-bold dark:text-slate-300 dark:font-medium'>castforecast</span>
                </button>
                <button
                    onClick={toggleMobileMenu}
                    id='navMenuBtn'
                    className='absolute right-6 top-5 md:hidden'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 dark:stroke-slate-200'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                </button>
                <menu
                    id='navMenu'
                    className={
                        `${mobileMenuActive === true ? ' ' : ' hidden '}` +
                        'flex flex-col w-11/12 mb-4 rounded-md bg-white shadow-md my-auto md:font-medium md:flex md:flex-row md:p-0 md:w-auto md:bg-transparent md:shadow-none dark:bg-gray-500 dark:md:bg-transparent'
                    }>
                    <li className='w-full'>
                        <button
                            id='demoLink'
                            className='w-full px-4 py-2 text-start capitalize hover:backdrop-brightness-95 md:hover:backdrop-brightness-100 md:hover:text-slate-400 dark:text-slate-200 dark:hover:backdrop-brightness-110 dark:md:hover:backdrop-brightness-100'
                            role='link'
                            onClick={()=>changeActivePage('weather')}>
                            Weather
                        </button>
                    </li>
                    <li className='w-full'>
                        <button
                            id='homeLink'
                            className='w-full px-4 py-2 text-start capitalize hover:backdrop-brightness-95 md:hover:backdrop-brightness-100 md:hover:text-slate-400 dark:text-slate-200 dark:hover:backdrop-brightness-110 dark:md:hover:backdrop-brightness-100'
                            role='link'
                            onClick={()=>changeActivePage('about')}>
                            About
                        </button>
                    </li>
                    <li className='w-full'>
                        <button
                            onClick={toggleLightMode}
                            type='button'
                            id='themeBtn'
                            className='w-full px-4 py-2 hover:backdrop-brightness-95 md:hover:backdrop-brightness-100 dark:hover:backdrop-brightness-110 dark:md:hover:backdrop-brightness-100 group'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                className='w-6 h-6 stroke-black dark:stroke-slate-200 md:group-hover:stroke-slate-400'>
                                <title>light screen theme</title>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                                />
                            </svg>
                        </button>
                    </li>
                </menu>
            </nav>
        </header>
    )
}

export default Header
