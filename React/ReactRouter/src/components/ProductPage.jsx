import React from 'react'
import { useNavigate, useParams } from 'react-router';
import useFetchHook from './FetchHook';

const ProductPage = () => {
    const { id } = useParams();
    const {data,error,loading} = useFetchHook({
        url :`https://fakestoreapi.com/products/${id}`,
        method: "GET"
    });

    const navigate = useNavigate();

    // const handleAddToCart = () => {
    //     const cartItems =  localStorage.getItem("userCart") || [];
    //     localStorage.setItem("userCart",JSON.stringify([...cartItems,data]));
    //     navigate("/cart");
    // }

    const handleAddToCart = () => {
        const userCart = JSON.parse(localStorage.getItem("userCart")) || [];
        userCart.push(data);
        localStorage.setItem("userCart", JSON.stringify(userCart));
        {alert(`${data?.title} added to cart`)}
        navigate("/cart");
    }


  return (
    <>
      <main>
        
        {loading ? "Product is Loading..." : 
        <div>
            <img src={data?.image} alt="product" width={200} height={200} />
            <h2>{data?.title}</h2>
            <h3>Price: {data?.price}</h3>
            <h3>{data?.category}</h3>
            <p>{data?.description}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        }
      </main>
    </>
  )
}

export default ProductPage
