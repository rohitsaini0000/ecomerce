import { useState, useEffect, useContext } from "react";
import "./Shop.css";
import { CartContext } from "../../context/CartContext.jsx"; 
const Shop = () => {
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <div className="Product-contenor">
        {data.slice(0, 9).map((item) => (
          <div className="Product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="Product-img" />
            <h3>{item.title.slice(0, 30)}</h3>
            <p>Price: ${item.price}</p>
            <button
              className="Product-Button"
              onClick={() => addToCart(item)} 
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;

