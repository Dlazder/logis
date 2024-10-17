import { createLazyFileRoute } from '@tanstack/react-router'
import { Slider } from '../shared/Slider/Slider'
import s from './catalogPage.module.scss'
import { Card } from '../shared/Card/Card'

export const Route = createLazyFileRoute('/catalog') ({
  component: About,
})

function About() {
  return (
    <>
      <Slider/>
      <div className={s.productsGrid}>
        <Card title="Auto Clutch & Brake" price={12000} imgSrc={'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-1-290x350.jpg'}/>
        <Card title="Auto Clutch & Brake" price={13000} imgSrc={'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-2-290x350.jpg'}/>
        <Card title="Auto Clutch & Brake" price={15000} imgSrc={'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-3-290x350.jpg'}/>
        <Card title="Auto Clutch & Brake" price={12000} imgSrc={'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-1-290x350.jpg'}/>
        <Card title="Auto Clutch & Brake" price={13000} imgSrc={'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-2-290x350.jpg'}/>
        <Card title="Auto Clutch & Brake" price={15000} imgSrc={'https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-3-290x350.jpg'}/>
      </div>
    </>
  )
}