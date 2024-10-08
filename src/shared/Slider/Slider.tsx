import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import carWashingImage1 from '/car-washing-1.jpg'
import carWashingImage2 from '/car-washing-2.avif'
import carWashingImage3 from '/car-washing-3.avif'

import s from './Slider.module.scss'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react'


export function Slider() {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const swiperRef = useRef<SwiperType>();
    return (
        <Swiper 
            className={s.slider}
            loop grabCursor
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]} 
            pagination={{clickable: true}}
            navigation={{prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current}}
            autoplay={{delay: 2500, disableOnInteraction: false}}
            slidesPerView={1}
            coverflowEffect={{
                depth: 200,
                modifier: 2,
                rotate: 30,
                scale: 1,
                stretch: 0,
                slideShadows: true,
            }}
            speed={1000}
            effect={'coverflow'}
            onBeforeInit={(swiper) => {swiperRef.current = swiper}}
        >
            <SwiperSlide className={s.slide}><img src={carWashingImage1} alt="Slide 1"/></SwiperSlide>
            <SwiperSlide className={s.slide}><img src={carWashingImage2} alt="Slide 2"/></SwiperSlide>
            <SwiperSlide className={s.slide}><img src={carWashingImage3} alt="Slide 3"/></SwiperSlide>
            <div className={s.welcome}>Добро пожаловать!</div>
            <button onClick={() => swiperRef.current?.slidePrev()} className={s.btnPrev} />
            <button onClick={() => swiperRef.current?.slideNext()} className={s.btnNext} />
        </Swiper>
    )
}