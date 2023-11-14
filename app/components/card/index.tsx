'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from './card.module.scss'

type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

type CardProps = {
    product: Product;
    style: React.CSSProperties;
    image: StaticImageData;
}

const Card = ({ product, style, image }: CardProps) => {

    return (
        <div key={product.id} className={styles.card} style={style}>
            <div className={styles[`content${product.id}`]}>
                <div className={styles[`img${product.id}`]}>
                    <Image src={image} alt={product.title} />
                </div>
                <div className={styles.details}>
                    <div className={styles.cardDescription}>{product.description}</div>
                    <div className={styles.cardInfos}>
                        <div className={styles.cardTitle}>
                            {product.title}
                        </div>
                        <div className={styles.cardPrice}>
                            {product.price}€
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;