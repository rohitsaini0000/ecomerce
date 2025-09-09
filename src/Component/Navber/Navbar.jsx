import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx"; 

function Navibar() {
  const { totalQuantity } = useContext(CartContext);  
  const navigate = useNavigate();

  return (
    <div className="main">
     
      <h1 className="Nav-h1" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        SHOP.CO
      </h1>

      
      <div className="name">
        <ul>
          <li><Link to="/">Homes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/onsell">On Sell</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </div>

      <input type="text" placeholder="Search for products.." />

      <div className="logo">
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <FaShoppingCart size={28} />
           {totalQuantity > 0 && (
             <span className="cart-badge">{totalQuantity}</span>
           )}
        </div>

        <div className="user-icon">
          <FaRegCircleUser size={28} />
        </div>
      </div>

    </div>
  );
}

export default Navibar;
