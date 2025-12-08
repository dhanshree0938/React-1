import React, { useEffect, useState } from 'react'
import Product from './Product';

export default function Home() {
    const [allProducts, setAllProducts] = useState(null);

    // allProducts Array
    useEffect(() => {
      fetch('https://dummyjson.com/products')
      // fetch('https://localhost:8080/products')
      // console.log(fetch)
      .then(resp => { // client side errors
        if(resp.ok) {
          return resp.json();
        }
        else {
          console.log("error in fetch");
        }
      })
      .then(data => {
        // console.log(data);
        setAllProducts(data.products.slice(0,8));
      })
      .catch(err => console.log(err)); // server side errors
    },[]);

    return (
      <div>
        {/*<h2>Home Components</h2>*/}
        {/*condiional Rendering(shortcircuit)*/}
        {!allProducts && <h3>...Loading</h3>}
        
        <div className='row'>
        {allProducts &&  allProducts.map(prod => <Product key={prod.id} productObj={prod}/>)}
      </div>
      </div>
    )
  }
