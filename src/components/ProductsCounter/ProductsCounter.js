import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./ProductsCounter.css"
const ProductsCounter = () => {
    const { cart } = useContext(dataContext)

    const totalProducts = cart.reduce((acc, el) => acc + el.quanty, 0)
    return <span className="cart-content">{totalProducts}</span>;
}

export default ProductsCounter