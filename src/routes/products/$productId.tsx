import { createFileRoute } from '@tanstack/react-router'
import s from './productId.module.scss'
export const Route = createFileRoute('/products/$productId')({component: Product})
import products from '../../../public/products.json'
import { Swiper, SwiperSlide } from 'swiper/react'

function Product() {
  const { productId } = Route.useParams()
  const productData = products.filter((e) => e.id === Number(productId))[0]
  return (
    <>
      <main className={s.main}>


        <div className='container'>
          <div className={s.productWrapper}>


            <div className={s.leftSide}>
              {/* main image */}
              <img src={productData.imgSrcs[0]} alt="" />

              {/* images slider */}
              <div className={s.images}>
                <Swiper slidesPerView={3} spaceBetween={10} loop>
                  {productData.imgSrcs.map((e) => <SwiperSlide><img src={e} alt="" /></SwiperSlide>)}
                </Swiper>
              </div>
            </div>


            <div className={s.rightSide}>
              <h2>{productData.title}</h2>
              <span>{productData.price} ₽</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt id, maxime exercitationem, sapiente expedita laudantium voluptatem saepe fugiat commodi ducimus sunt tenetur explicabo, doloribus praesentium officia! Aliquid ipsum error magnam.</p>
            </div>
            
          </div>
        </div>


      </main>
    </>
  )
}
