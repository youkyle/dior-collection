'use client'
import Image from 'next/image'
import React from 'react'
import styles from './addToCart.module.scss'
import shoppingCart from '../../../public/images/shopping-cart.svg'

type AddToCartProps = {
    onClick: () => void;
}

const AddToCartButton = ({ onClick }: AddToCartProps) => {

    return (
        <button type='button' name='addToCart' className={styles.addToCart} onClick={onClick} >
            <div>
                <span>ADD TO CART</span>
                <Image src={shoppingCart} alt="shopping cart" className={styles.addCartIcon} />
            </div>
        </button>
    )
}

export default AddToCartButton;