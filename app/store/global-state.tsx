import React, { useReducer } from "react";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Reducer from "./reducer";
import Context from "./context";

export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

export default function GlobalState(props: unknown) {
    const products = [
        {
            id: "1",
            title: "MEN SHIRT",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis mollitia tempore hic earum voluptatem exercitationem.",
            image: "menShirt",
            price: 18000
        },
        {
            id: "2",
            title: "LADY BAG",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis mollitia tempore hic earum voluptatem exercitationem.",
            image: "ladyBag",
            price: 3000
        },
        {
            id: "3",
            title: "DIOR JEWELRY",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis mollitia tempore hic earum voluptatem exercitationem.",
            image: "diorJewelry",
            price: 100000
        }
    ];

    const [state, dispatch] = useReducer(Reducer, { carts: [] });

    // # add product to cart
    const addProductToCart = (product: Product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: product,
        });
    };

    // # remove product from cart
    const removeProductFromCart = (productID: String) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productID,
        });
    };

    // # clear all product from cart
    const clearCart = () => {
        dispatch({
            type: CLEAR_ALL_FROM_CART,
        });
    };

    return (
        <Context.Provider
        value={{
          products: products,
          addProductToCart: addProductToCart,
          removeProductFromCart: removeProductFromCart,
          clearCart: clearCart,
          carts: state.carts,
        }}
      >
        {props.children}
      </Context.Provider>
  );
}