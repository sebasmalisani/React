import "./Navbar.css"
import { Link } from "react-router-dom"

import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import ProductsCounter from "../ProductsCounter/ProductsCounter"

const Navbar = () => {
    const { cart } = useContext(dataContext)
    return (
        <div className="nav-container">
            <nav className="navbar">
            <h1 className="navbar-logo">Shop de Sebas</h1>
            <p className="navbar-logo">Pastas</p>
            <Link className="seeCarrito" to={"/cart"}>
                🛒
            {cart.length > 0 ? <ProductsCounter/> : null}
            </Link>
            </nav>
        </div>
    )
}

export default Navbar