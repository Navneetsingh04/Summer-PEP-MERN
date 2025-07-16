import React, { use, useEffect } from "react";
import { useNavigate } from "react-router";
import "./cartpage.css";
const CartPage = () => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (index) => {
    const userCart = JSON.parse(localStorage.getItem("userCart")) || [];

    if (userCart.length > 0 && index >= 0 && index < userCart.length) {
      const removeIteam = userCart[index];
      userCart.splice(index, 1);
      localStorage.setItem("userCart", JSON.stringify(userCart));
      alert(`Item "${removeIteam.title}" removed from the cart`);
    } else {
      alert("No iteam in the Cart");
    }
    navigate("/cart");
  };

  useEffect(() => {
    if (!localStorage.getItem("userCart")) {
      localStorage.setItem("userCart", JSON.stringify([]));
    }
  }, []);

  const goToProducts = () => {
    navigate("/products");
  };

  const cartItems = JSON.parse(localStorage.getItem("userCart")) || [];
    const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h1>Cart Page</h1>
      <h2>Items in cart </h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Items: {cartItems.length}</p>
            <div className="total-price">Total: ${totalPrice}</div>
          </div>

          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title}  width={200} height={200} />
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove Item
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add some products to explore the carts</p>
        </div>
      )}

      <button className="products-btn" onClick={goToProducts}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
