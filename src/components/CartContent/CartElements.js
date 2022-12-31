import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css"


const CartElements = () => {
    const {cart, setCart, setQuantity} = useContext(dataContext);

    const deleteProduct = (id) => {
      const foundId = cart.find((element) => element.id === id)
      
      const newCart = cart.filter((element) => {
        setQuantity((foundId.quanty = 1));
        return element !== foundId;
      })
      setCart(newCart);
    }
  return cart.map((product)=> {
    return(
      
        <div className="cartContent" key={product.id}>
            <img src={product.img} alt="producto-card" />      
            <h3 className="name">{product.name}</h3>
            <CartItemCounter product={product}/>
            <h4 className="precio">{product.precio * product.quanty}$</h4>
            <h3 className="cart-delete-button" onClick={()=> deleteProduct(product.id)}>❌</h3>
        </div>
        
    );
  });
};


export default CartElements