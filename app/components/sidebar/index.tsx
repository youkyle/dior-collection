'use client'
import React, { useRef } from 'react'
import styles from './sidebar.module.scss'
import shoppingCart from '../../../public/images/shopping-cart.svg'
import sidePanel from '../../../public/images/side-panel.svg'
import Image from 'next/image'
import useOnClickOutside from '@/app/hooks/useOnClickOutside'


type SideBarProps = {
    isToggle: boolean;
    setToggle: (bool: boolean) => void;
    carts: [];
    // removeProductFromCart: () => void;
    // clearCart: () => void;
}

const SideBar = ({ isToggle,
    setToggle,
    carts,
    // removeProductFromCart,
    // clearCart,
}: SideBarProps) => {
    const $sideBarRef = useRef();

    // # handle the onclick outside
    useOnClickOutside($sideBarRef, () => setToggle(false));

    console.log(carts);

    const toogleStyles = {

    }

    return (
        <>


            <div ref={$sideBarRef} className={`${styles.cartSideBar} ${styles[isToggle ? "expand" : "shrink"]}`}>
                <div className={styles.wrapper}>
                    <span className={styles.cartCount}>{carts.length}</span>
                    <Image src={shoppingCart} alt='shopping cart' />
                </div>
                {/* <SideBarHeader>shopping cart</SideBarHeader>
                {carts.length === 0 ? (
                    <EmptyCart>Empty Cart</EmptyCart>
                ) : (
                    carts.map(({ product, quantity }) => (
                        <Card key={product.id}>
                            <CardImage src={product.imageURL} />
                            <CardBody>
                                <CardRow>
                                    <CardTitle>{product.title}</CardTitle>
                                    <CardRemove
                                        icon={faTimes}
                                        onClick={() => removeProductFromCart(product.id)}
                                    />
                                </CardRow>
                                <CardRow>
                                    <CardTitle>
                                        Total Quantity ({quantity}) - ${product.price * quantity}
                                    </CardTitle>
                                </CardRow>
                            </CardBody>
                        </Card>
                    ))
                )}

                {carts.length !== 0 && (
                    <ClearButton onClick={() => clearCart()}>Clear Cart</ClearButton>
                )} */}
            </div >
        </>
    );
}

export default SideBar;