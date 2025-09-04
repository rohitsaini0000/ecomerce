import { useState, useEffect, useContext } from "react";
import "./About.css";
import AimgA from "/AhimgA.png";
import AimgB from "/AhimgB.png";
import AimgC from "/AhimgC.png";
import AimgD from "/AhimgD.png";
import { CartContext } from "../../context/CartContext.jsx";  

const About = () => {
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
      <div className="Top-hadder">
        <div className="colum-t">
          <img className="img1" src={AimgA} alt="" />
          <img className="img1" src={AimgB} alt="" />
          <img className="img1" src={AimgC} alt="" />
        </div>

        <div className="colum-r">
          <img className="img2" src={AimgD} alt="" />
        </div>

        <div className="text">
          <div>
            <h1>ONE LIFE GREAPHIC T-SHIRT</h1>
            <img
              style={{ marginTop: "10px" }}
              src="Frame 10.png"
              alt=""
              height="30px"
            />

            <div className="mony">
              <h1>$260</h1>
              <h1 style={{ color: "rgba(0, 0, 0, 0.432)" }}>
                <del>$300</del>
              </h1>
              <button
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.452)",
                  height: "30px",
                  width: "70px",
                  borderRadius: "20px",
                  border: "none",
                }}
              >
                -40%
              </button>
            </div>

            <p style={{ color: "rgba(0, 0, 0, 0.39)" }}>
              The Iusto, nulla nisi, repellat eius magni totam quam culpa
              voluptatum. Dolorem reprehenderit eveniet sed.
            </p>
          </div>

          <div className="color">
            <h3 style={{ color: "rgba(0, 0, 0, 0.493)" }}>Select Color</h3>
            <div className="mony">
              <div className="class1"></div>
              <div className="class2"></div>
              <div className="class3"></div>
            </div>
          </div>

          <div style={{ borderBottom: "2px solid rgba(0, 0, 0, 0.37)" }}>
            <h3 style={{ color: "rgba(0, 0, 0, 0.63)" }}>Select Size</h3>
            <div className="mony">
              <button className="bu1">Small</button>
              <button className="bu1">Medium</button>
              <button className="bu2">Large</button>
              <button className="bu1">X-Large</button>
            </div>
          </div>

          <div className="mony">
            <button className="bu3">- 1 +</button>
            <button className="bu4" onClick={() => addToCart({ id: 101, title: "ONE LIFE GREAPHIC T-SHIRT", price: 260, image: AimgA })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        YOU MIGHT ALSO LIKE
      </h1>

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
    </>
  );
};

export default About;

