export function Header() {
    
    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <header className="site-navbar py-3 js-site-navbar site-navbar-target" role="banner" id="site-navbar">

                <div className="container">
                    <div className="row align-items-center">
                        
                        <div className="col-11 col-xl-2 site-logo">
                            <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0">Vanj city</a></h1>
                        </div>
                        <div className="col-12 col-md-10 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">

                                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                    <li><a href="#section-home" className="nav-link">Главное</a></li>
                                    <li className="has-children">
                                    <a href="#section-about" className="nav-link">О нас</a>
                                    <ul className="dropdown">
                                        <li><a href="#section-how-it-works" className="nav-link">Как мы работаем</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#section-services" className="nav-link">Магазин</a></li>
                                    <li><a href="#section-contact" className="nav-link">Контакты</a></li>
                                </ul>
                            </nav>
                        </div>


                        <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: 'relative', top: '3px'}}>
                            <a href="#" className="site-menu-toggle js-menu-toggle">
                                <span className="icon-menu h3"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}