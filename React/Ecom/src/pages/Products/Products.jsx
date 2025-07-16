import React from "react";
import useFetchHook from "../../components/FetchHook";
import { NavLink } from "react-router";
import "./Products.css";
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
                  <div className="product-card">
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p className="price">Price: ₹{product.price}</p>
                  </div>
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
