import { createLazyFileRoute } from '@tanstack/react-router'
import { Slider } from '../shared/Slider/Slider'
import s from './catalogPage.module.scss'

export const Route = createLazyFileRoute('/catalog') ({
  component: About,
})

function About() {
  return (
    <>
      <Slider/>
      <div className={s.product}></div>
    </>
  )
}