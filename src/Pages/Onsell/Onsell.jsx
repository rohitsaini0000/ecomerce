import React, { useContext } from "react";
import "./Onsell.css";
import OnimgA from "/OnsellA.png";
import OnimgB from "/OnsellB.png";
import OnimgC from "/OnsellC.png";
import { CartContext } from "../../context/CartContext.jsx"; 

function Onsell() {
  const { addToCart } = useContext(CartContext); 

  return (
    <>
      <div className="main-hadder">
        <div className="maindiv1">
          
          <div className="div1 div2">
            <img src={OnimgA} alt="" />
            <div className="divh1">
              <h3>Gradient Graphic T-shirt</h3>
              <p>Size: Large</p>
              <p>Color: White</p>
              <div className="but">
                <h3>$145</h3>
                <button
                  className="but2"
                  onClick={() =>
                    addToCart({
                      id: 201,
                      title: "Gradient Graphic T-shirt",
                      price: 145,
                      image: OnimgA,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

         
          <div className="div1 div2">
            <img src={OnimgB} alt="" />
            <div className="divh1">
              <h3>Checkered Shirt</h3>
              <p>Size: Medium</p>
              <p>Color: Red</p>
              <div className="but">
                <h3>$180</h3>
                <button
                  className="but2"
                  onClick={() =>
                    addToCart({
                      id: 202,
                      title: "Checkered Shirt",
                      price: 180,
                      image: OnimgB,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

         
          <div className="div1 h1">
            <img src={OnimgC} alt="" />
            <div>
              <h3>Skinny Fit Jeans</h3>
              <p>Size: Large</p>
              <p>Color: White</p>
              <div className="but">
                <h3>$240</h3>
                <button
                  className="but2"
                  onClick={() =>
                    addToCart({
                      id: 203,
                      title: "Skinny Fit Jeans",
                      price: 240,
                      image: OnimgC,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="maindiv2">
          <h1>Order Summary</h1>

          <div className="h-tags">
            <h3 className="classh3">Subtotal</h3>
            <h3>$565</h3>
          </div>

          <div className="h-tags">
            <h3 className="classh3">Discount (-20%)</h3>
            <h3 className="clas1">-$113</h3>
          </div>

          <div className="h-tags h-t">
            <h3 className="classh3">Subtotal</h3>
            <h3>$565</h3>
          </div>

          <div className="h-tags">
            <h3 className="classh3">Total</h3>
            <h3>$467</h3>
          </div>

          <div className="h-tags">
            <button className="h-tagsbutton">Add Promo code</button>
            <button className="h-tagsbutton1">Apply</button>
          </div>

          <button className="h-tagsbutton2">Go to Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Onsell;
