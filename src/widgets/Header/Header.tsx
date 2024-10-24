import { Link, useLocation } from "@tanstack/react-router";
import s from './Header.module.scss'
import { useState } from "react";


//prop "black" set links color in nav to black  

export function Header({black = false}: {black?: boolean}) {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen((prev) => !prev)
    const close = () => setIsOpen(false)


    const location = useLocation()

    return (
        <>
            <header className={`${s.header} ${black ? s.black : ''} ${location.pathname.match(/logis\/products\/.+/) ? s.black : ''} site-navbar js-site-navbar site-navbar-target`} role="banner" id="site-navbar">
                <div className={`${s.wrapper} container`}>

                    <div className="site-logo py-3">
                        <h1 className="mb-0"><a href="/" className="text-white h2 mb-0">Vanj city</a></h1>
                    </div>
                    
                    <nav className={`${isOpen ? s.open : ''}`} role="navigation">
                        <Link onClick={close} to="/" className="nav-link">Главное</Link>
                        <a onClick={close} href="#section-about" className="nav-link">О нас</a>
                        <a onClick={close} href="#section-how-it-works" className="nav-link">Как мы работаем</a>                                    
                        <Link onClick={close} to="/products" className="nav-link">Магазин</Link>
                        <a onClick={close} href="#section-contact" className="nav-link">Контакты</a>
                    </nav>


                    <button onClick={toggle} className={`${s.burgerButton} ${isOpen ? s.burgerButtonOpen : ''}`} >
                        <span className={s.bar} />
                        <span className={s.bar} />
                        <span className={s.bar} />
                    </button>

                </div>
            </header>
        </>
    )
}