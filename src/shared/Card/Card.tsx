import { Link } from '@tanstack/react-router';
import s from './Card.module.scss'

interface CardProps {
    title: string;
    price: number;
    imgSrc?: string;
}

export function Card(props: CardProps) {


    return (
        <div className={s.wrapper}>
            <div className={s.card}>

                <div className={s.cardImg}>
                    <a href="/catalog">
                        <img src={props.imgSrc} alt='product-image' />
                    </a>
                </div>

                <div className={s.cardContent}>
                    <Link className={s.title}>{props.title}</Link>
                    <br />
                    <div className={s.price}>
                        Цена: <span className={s.pricePrimary}>{props.price}₽</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}