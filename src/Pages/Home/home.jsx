import { useState, useEffect, useContext } from "react";
import "./Home.css";
import Homeimg from "/home.png";
import BimgA from "/FrameA.png";
import BimgB from "/FrameB.png";
import BimgC from "/FrameC.png";
import BimgD from "/FrameD.png";
import AStar from "/star.png";
import Frame from "/Frame.png";

import { CartContext } from "../../context/CartContext.jsx";


const Home = () => {
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext);  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((responese) => responese.json())
      .then((result) => setData(result))
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <div className="main-home">
        <div className="main-Ahome">
          <h1>
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            <br /> designed individuality and cater to your sense of style.
          </p>
          <button>Shop Now</button>
          <div className="Brands">
            <div>
              <h2>200+</h2>
              <h4>Internatioal Brands</h4>
            </div>
            <div className="Brand1">
              <h2>2000+</h2>
              <h4>High-Quality Product</h4>
            </div>
            <div>
              <h2>3,000+</h2>
              <h4>Happy Customers</h4>
            </div>
          </div>
        </div>
        <div className="main-Bhome">
          <img src={Homeimg} alt="" />
        </div>
      </div>

    
      <h1 className="product-nameplat">NEW ARRIVED</h1>
      <div className="Product-contenor">
        {data.slice(0, 4).map((item) => (
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

     
      <h1 className="product-nameplat">TOP-SELLING</h1>
      <div className="Product-contenor">
        {data.slice(4, 8).map((item) => (
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

     
      <div className="midel-homecard">
        <h1 className="product-nameplat">BROWSE BY dress STYLE</h1>
        <div className="midel-hca">
          <div className="m-card1">
            <img src={BimgA} alt="" />
          </div>
          <div className="m-card2">
            <img src={BimgB} alt="" />
          </div>
        </div>
        <div className="midel-hcb">
          <div className="m-card2">
            <img src={BimgD} alt="" />
          </div>
          <div className="m-card1">
            <img src={BimgC} alt="" />
          </div>
        </div>
      </div>

   
      <h1 className="product-nameplat">OUR HAPPY CUSTOMERS</h1>
      <div className="Home-footer">
        <div className="HF-carddatils">
          <img src={AStar} alt="" style={{ height: 30 }} />
          <div style={{ display: "flex", marginTop: 10, marginBottom: 20 }}>
            <h1>Sarah M.</h1>
            <img src={Frame} alt="" style={{ height: 30 }} />
          </div>
          <p style={{ fontSize: 20 }}>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>

        <div className="HF-carddatils">
          <img src={AStar} alt="" style={{ height: 30 }} />
          <div style={{ display: "flex", marginTop: 10, marginBottom: 20 }}>
            <h1>Alex.F.</h1>
            <img src={Frame} alt="" style={{ height: 30 }} />
          </div>
          <p style={{ fontSize: 20 }}>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>

        <div className="HF-carddatils">
          <img src={AStar} alt="" style={{ height: 30 }} />
          <div style={{ display: "flex", marginTop: 10, marginBottom: 20 }}>
            <h1>Jemes.L</h1>
            <img src={Frame} alt="" style={{ height: 30 }} />
          </div>
          <p style={{ fontSize: 20 }}>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;


