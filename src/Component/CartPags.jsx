import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  } = useContext(CartContext);


  const discountPercent = 20;
  const discountAmount = (totalPrice * discountPercent) / 100;
  const finalTotal = totalPrice - discountAmount;

  return (
    <div className="cart-main">
      <div className="cart-container">
        <h2 className="cart-heading">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-flex">
            {/* Left Side (Cart Items) */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-img" />

                  <div className="cart-details">
                    <h4>{item.title}</h4>
                    <p>Price: ₹ {item.price}</p>
                    <p>Quantity: {item.quantity}</p>

                    <div className="cart-buttons">
                      <button
                        className="btn-qty"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>
                      <button
                        className="btn-qty"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        ＋
                      </button>
                      <button
                        className="btn-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <h3>Subtotal ({totalQuantity} items)</h3>
                <h3>₹ {totalPrice.toFixed(2)}</h3>
              </div>

              <div className="summary-row">
                <h3>Discount ({discountPercent}%)</h3>
                <h3 className="discount">- ₹ {discountAmount.toFixed(2)}</h3>
              </div>

              <div className="summary-row total">
                <h3>Total</h3>
                <h3>₹ {finalTotal.toFixed(2)}</h3>
              </div>

              <div className="summary-row">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="promo-input"
                />
                <button className="apply-btn">Apply</button>
              </div>

              <button className="checkout-btn">Go to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
