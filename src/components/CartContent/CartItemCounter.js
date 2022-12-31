import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


const CartItemCounter = ({ product }) => {
    const { cart, setCart, quantity, setQuantity, addProduct } = useContext(dataContext);

    const decrese = () => {
        const newProductQuanty = [product];
        newProductQuanty.map((element) => {
            element.quanty !== 1 && setQuantity((element.quanty -= 1));
            return setCart(cart, { ...product, quanty: quantity })
        });
    }

    return (
        <>
            <p className='counter-button' onClick={decrese}>-</p>
            <span className="counter-value">{product.quanty}</span>
            <p className='counter-button' onClick={() => addProduct(product)}>+</p>

        </>
    )
}

export default CartItemCounter