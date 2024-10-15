import { Link } from "@tanstack/react-router";
import s from './Header.module.scss'
import { useState } from "react";

export function Header() {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen((prev) => !prev)
    return (
        <>
            {/* <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div> */}
            <header className={`${s.header} site-navbar js-site-navbar site-navbar-target`} role="banner" id="site-navbar">
                <div className={`${s.wrapper} container`}>

                    <div className="site-logo py-3">
                        <h1 className="mb-0"><a href="/" className="text-white h2 mb-0">Vanj city</a></h1>
                    </div>
                    
                    <nav className={`${isOpen ? s.open : ''}`} role="navigation">
                        <Link to="/" className="nav-link">Главное</Link>
                        <a href="#section-about" className="nav-link">О нас</a>
                        <a href="#section-how-it-works" className="nav-link">Как мы работаем</a>                                    
                        <Link to="/catalog" className="nav-link">Магазин</Link>
                        <a href="#section-contact" className="nav-link">Контакты</a>
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