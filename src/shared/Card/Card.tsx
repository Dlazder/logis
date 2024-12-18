import { Link } from '@tanstack/react-router';
import s from './Card.module.scss'

interface CardProps {
    id: number;
    title: string;
    price: number;
    imgSrcs: string[];
}

export function Card(props: {data: CardProps}) {

    const data: CardProps = props.data

    const productLink: string = '/products/$productId'
    const params = {productId: String(data.id)}

    return (
        <div className={s.wrapper}>
            <div className={s.card}>

                <div className={s.cardImg}>
                    <Link to={productLink} params={params}>
                        <img src={data.imgSrcs[0]} alt='product-image'/>
                    </Link>
                </div>

                <div className={s.cardContent}>
                    <Link to={productLink} params={params} className={s.title}>{data.title}</Link>
                    <div className={s.price}>
                        Цена: <span className={s.pricePrimary}> {data.price}₽</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}