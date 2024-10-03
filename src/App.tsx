import carWashingImage4 from '../images/car-washing-4.jpg'
import { Slider } from './shared/Slider/Slider'
function App() {

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


          <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" /*style="position: relative; top: 3px;"*/>
          <a href="#" className="site-menu-toggle js-menu-toggle">
            <span className="icon-menu h3"></span>
          </a>
          </div>
        </div>

      </div>
      
    </header>
    <Slider/>

    <div className="site-section" id="section-about">
      <div className="container">
        <div className="row mb-5">
          
          <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade-up" data-aos-delay="100">
            <img src={carWashingImage4} alt="Image" className="img-fluid rounded"/>
          </div>
          <div className="col-md-6 order-md-1" data-aos="fade-up">
            <div className="text-left pb-1 border-primary mb-4">
              <h2 className="text-primary">О нас</h2>
            </div>
            <p>Vanjcity – это команда профессионалов, которые заботятся о вашем автомобиле. Мы предлагаем полный спектр услуг по мойке и уходу за авто, используя современное оборудование и высококачественные средства. Наши ценности – это качество, надежность и индивидуальный подход к каждому клиенту. Добро пожаловать!</p>
            
            <ul className="ul-check list-unstyled success">
              <li>Качественное обслуживание</li>
              <li>Низкие цены</li>
              <li>Опытный персонал</li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
  
    <div className="site-section bg-image overlay" /*style={{backgroundImage: "url('images/car-washing.jpg')"}}*/ id="section-how-it-works">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary" data-aos="fade">Как мы работаем</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <div className="how-it-work-item">
              <span className="number">1</span>
              <div className="how-it-work-body">
                <h2>Качество</h2>
                <ul className="ul-check list-unstyled success">
                  <li className="text-white">Лучшее обслуживание</li>
                  <li className="text-white">Индивидуальный подход</li>
                  <li className="text-white">Низкие цены</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <div className="how-it-work-item">
              <span className="number">2</span>
              <div className="how-it-work-body">
                <h2>Профессионализм</h2>
                <ul className="ul-check list-unstyled success">
                  <li className="text-white">Лучише специалисты</li>
                  <li className="text-white">Многолетний опыт</li>
                  <li className="text-white">Современное оборудование</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
            <div className="how-it-work-item">
              <span className="number">3</span>
              <div className="how-it-work-body">
                <h2>Надёжность</h2>
                <ul className="ul-check list-unstyled success">
                  <li className="text-white">Репутация и отзывы</li>
                  <li className="text-white">Ответственность</li>
                  <li className="text-white">Прозрачность цен</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div className="site-section bg-image overlay" /*style="background-image: url('images/auto.avif');"*/ id="section-how-it-works">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary" data-aos="fade">Магазин</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="service-block">
              <h3>Химчистка салона</h3>
              <p>Удаление пятен и загрязнений из салона автомобиля</p>
              <p>Цена: 1500₽</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-block">
              <h3>Уборка салона</h3>
              <p>Уборка и очистка салона автомобиля</p>
              <p>Цена: 500₽</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-block">
              <h3>Полировка кузова</h3>
              <p>Полировка и восстановление блеска кузова автомобиля</p>
              <p>Цена: 1000₽</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-block">
              <h3>Мойка автомобиля</h3>
              <p>Качественная мойка автомобиля с использованием современного оборудования</p>
              <p>Цена: 800₽</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light" id="section-contact">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary">Контакты</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mb-5">
            <form action="#" className="p-5 bg-white">
              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Написать" className="btn btn-primary py-2 px-4 text-white"/>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5">  
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold">Адрес</p>
              <p className="mb-4">Балашиха, 19-й км, дом 1.</p>

              <p className="mb-0 font-weight-bold">Номер</p>
              <p className="mb-4"><a href="#">+7-9**-***-**-**</a></p>

              <p className="mb-0 font-weight-bold">Электронная почта</p>
              <p className="mb-0"><a href="#"></a></p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}



export default App  