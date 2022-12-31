import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';


export const dataContext = createContext();

const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);

    

    const addProduct = (product) => {
        Swal.fire({
            icon: 'success',
            title: 'Felicidades',
            text: `${product.name} fue agregado al carrito`
        })
        const repeat = cart.some((element) => element.id === product.id)
        

        if (repeat) {
            
            const newProductQuanty = [product];
            Swal.fire({
                icon: 'success',
                title: 'Felicidades',
                text: `${product.name} fue agregado nuevamente al carrito!`
            })
            newProductQuanty.map((element) => {
                if (element.quanty < element.stock) {
                    setQuantity((element.quanty += 1));
                    return setCart(cart, { ...product, quanty: quantity })
                }
            });
        } else {
            setCart([...cart, product]);
        }
    }

    
    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, [])

    return <dataContext.Provider value={{ data, cart, setCart, quantity, setQuantity, addProduct }}>{children}</dataContext.Provider>
};

export default DataProvider;