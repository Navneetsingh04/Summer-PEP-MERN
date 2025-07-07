import React, { use, useEffect } from 'react'
import { useNavigate } from 'react-router';
import './cartpage.css';
const CartPage = () => {

    const navigate = useNavigate();

    const handleRemoveFromCart = (index) => {
        const userCart = JSON.parse(localStorage.getItem("userCart")) || [];
         JSON.parse(localStorage.getItem("userCart"))?.map((item,index) => (
            alert(`Item ${item.title} Removed From the cart`)
        ))
        if(userCart.length > 0){
            userCart.splice(index,1); 
            localStorage.setItem("userCart", JSON.stringify(userCart));
        } 
        else {
            alert("No iteam in the Cart");
        }
        navigate("/cart");
    }

    useEffect(() => {
        if (!localStorage.getItem("userCart")) {
            localStorage.setItem("userCart", JSON.stringify([]));
        }
    }, []);

    const goToProducts = () => {
        navigate("/products");
    }

  return (
    <>
        <h1>Cart Page</h1>
        <h2>Items in cart </h2>
        <div>
            {JSON.parse(localStorage.getItem("userCart"))?.map((item, index) => (

                <div key={index}>
                    <h4>{item.title}</h4>
                    <img src={item.image} alt={item.title} width={100} height={100} />
                    <p>Price: {item.price}</p>
                    <button onClick={handleRemoveFromCart}>Remove Item</button>
                </div>
            ))}
        </div>

        <br /><br />
        <button onClick={goToProducts}>Go to Products</button>
    </>
  )
}

export default CartPage
