import { createLazyFileRoute } from '@tanstack/react-router'
import { Slider } from '../../shared/Slider/Slider'
import s from './productPage.module.scss'
import { Card } from '../../shared/Card/Card'

export const Route = createLazyFileRoute('/products/')({
  component: About,
})

function About() {
  return (
    <>
      <Slider />
      <div className={s.productsGrid}>
        <Card
          data={{
            id: 1,
            title: 'Auto Clutch & Brake',
            price: 12000,
            imgSrc:
              'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-1-290x350.jpg',
          }}
        />
        <Card
          data={{
            id: 2,
            title: 'Auto Clutch & Brake',
            price: 13000,
            imgSrc:
              'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-2-290x350.jpg',
          }}
        />
        <Card
          data={{
            id: 3,
            title: 'Auto Clutch & Brake',
            price: 15000,
            imgSrc:
              'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-3-290x350.jpg',
          }}
        />
        <Card
          data={{
            id: 4,
            title: 'Auto Clutch & Brake',
            price: 18000,
            imgSrc:
              'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-4-290x350.jpg',
          }}
        />
        <Card
          data={{
            id: 5,
            title: 'Auto Clutch & Brake',
            price: 20000,
            imgSrc:
              'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-5-290x350.jpg',
          }}
        />
        <Card
          data={{
            id: 6,
            title: 'Auto Clutch & Brake',
            price: 22000,
            imgSrc:
              'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-6-290x350.jpg',
          }}
        />
      </div>
    </>
  )
}
