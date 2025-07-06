import React from 'react'
import useFetchHook from './FetchHook'

const Products = () => {
    const {data,error,loading} = useFetchHook({
        url :`https://fakestoreapi.com/products`,
        method: "GET"
    });
  return (
    <div>
      <h1>Api Data fetching</h1>
      {/* {loading ? "Loading..." : <h1> {data?.title}</h1>} */}

        {loading ? "Loading..." : <div> {data?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} width={100} height={100} />
            <p>Price: {item.price}</p>
            </div>
            
        ))}</div>}
    </div>
  )
}

export default Products
