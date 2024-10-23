import { createLazyFileRoute } from '@tanstack/react-router'
import { Slider } from '../../shared/Slider/Slider'
import s from './productPage.module.scss'
import { Card } from '../../shared/Card/Card'
import products from '../../../public/products.json'

export const Route = createLazyFileRoute('/products/')({
  component: About,
})



function About() {
  return (
    <>
      <Slider />
      <div className={s.productsGrid}>
        {products.map((e) => <Card data={e}/>)}
      </div>
    </>
  )
}
