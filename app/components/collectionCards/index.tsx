"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from './collection-cards.module.scss'
import Image from 'next/image'
import diorLogo from '../../../public/images/dior-logo.svg'
import pngkey from '../../../public/images/pngkey.png'
import shoppingCart from '../../../public/images/shopping-cart.svg'
import sort from '../../../public/images/sort.svg'
import filter from '../../../public/images/filter.png'
import AddToCartButton from '../addToCart'
import SideBar from '../sidebar'
import Context from '../../store/context'
import { gql } from '@apollo/client';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { imageArray, styleArray } from './utils'

const ProductsQuery = gql`
    query ExampleQuery {
        products {
            id
            title
            description
            image
            price
          } 
    }
`;

interface Response {
    products: { id: string; title: string; description: string, image: string, price: number }[];
}

const CollectionCards = () => {

    const { data } = useSuspenseQuery<Response>(ProductsQuery);

    const [isToggle, setToggle] = useState(false);
    const context = useContext(Context);

    useEffect(() => {
        console.log(context);
    }, [context]);

    return (
        <>

            <SideBar
                isToggle={isToggle}
                setToggle={setToggle}
                carts={context.carts}
            // removeProductFromCart={context.removeProductFromCart}
            // clearCart={context.clearCart}
            />
            <div className={styles.main}>
                <div className={styles.headerDiv}>
                    <div className={styles.logoDiv}>
                        <Image src={diorLogo} alt="Dior logo" />
                    </div>
                    <div className={styles.titleDiv}>
                        <Image src={pngkey} alt="key" />
                        <div className={styles.collectionTitle}>
                            THE SECRET COLLECTION
                        </div>
                    </div>
                    <div className={styles.filterDiv}>
                        <div className={styles.filter}>
                            <Image src={filter} alt="filter" /> <div>FILTERS</div>
                        </div>
                        <div className={styles.sort}>
                            <Image src={sort} alt="sort" />  <div>SORT</div>
                        </div>

                    </div>
                    <div className={styles.shoppingCartDiv}>
                        <button className={styles.shoppingCartButton} onClick={() => setToggle(true)}>
                            <Image src={shoppingCart} alt="shopping cart" />
                        </button>

                    </div>
                </div>

                <div className={styles.collectionDiv} >
                    <div className={styles.outer}>
                        {data.products.map((product, i) => {

                            return (

                                <div key={product.id} className={styles.card} style={styleArray[i]}>
                                    <div className={styles[`content${product.id}`]}>
                                        <div className={styles[`img${product.id}`]}>
                                            <Image src={imageArray[i]} alt={product.title} />
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
                                </div>)

                        })}
                    </div>

                </div>
                <div className={styles.buttonDiv}>
                    <AddToCartButton onClick={() => setToggle(true)} />
                </div>
            </div>
        </>
    )
}

export default CollectionCards;