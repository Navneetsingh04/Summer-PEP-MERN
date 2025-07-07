import React from "react";
import useFetchHook from "./FetchHook";
import { NavLink } from "react-router";
import './Products.css'
const Products = () => {
  const { data, error, loading } = useFetchHook({
    url: `https://fakestoreapi.com/products`,
    method: "GET",
  });
  return (
    <>
    <h1 className="heading">Products</h1>
    <main className="products">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data?.map((product, i) => {
            return (
              <NavLink to={`/products/${product.id}`} key={i}>
                <img
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                />
                <p>{product.title}</p>
                <p>Price: {product.price}</p>
              </NavLink>
            );
          })}
        </>
      )}
    </main>
    </>
  );
};

export default Products;
