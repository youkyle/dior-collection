import { createContext } from "react";
import { Product } from "./global-state";

type CartContextType = {
    products: Product[];
    carts: [];
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productID: String) => void;
    clearCart: () => void;

}

export default createContext<CartContextType>({
    products: [],
    carts: [],
    addProductToCart: (product: Product) => { },
    removeProductFromCart: (productID: String) => { },
    clearCart: () => { },
});