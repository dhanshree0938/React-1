import React, { useEffect, useState } from 'react'
import Product from './Product'

export default function ProductList() {
    // let allProducts=[];
    const [allProducts,setAllProducts]=useState([]);
    const [count, setCount]=useState(0);
    const  updateCount =()=>{
      setCount(count+1);
    }
    // const fetchData =()=>{
    //       fetch('http://localhost:3000/data.json')
    //       .then(resp => resp.json())
    //       .then(data =>{
    //         console.log(data);
    //         allProducts=data.allProducts;
    //         setAllProducts(data.allProducts);
            
    //       });

    // }
    // fetchData();

    //useEffect(callback, Dependency List)
    //useEffect executes the callback function first time.and then if there is any changes in any of the dependency list variables,every time the callback will get executed
    //eg.1)useEffect(callback, []) --> use effect is dependent on count.whenever count will be updated ,callback will be executed again.
    //2)useEffct(callback,[] ) --> Empty DL. the callback will be executed for first time .and as the DL is empty,callback will not be executed again.
    //3)useEffect(callback)-->DL is not passed ,by default all states and prpos are the DL
    //useEffect(callback,[allProducts,count])

    useEffect(()=>{
      fetch('http://localhost:3000/data.json')
          .then(resp => resp.json())
          .then(data =>{
            console.log(data);
            //allProducts=data.allProducts;
            setAllProducts(data.allProducts);
            
    });
  },[])
  console.log("rendering Productlist");
  
  return (
    <div>
        <h3>List of products</h3>
        <button onClick={updateCount}>{count}</button>
        {/* Product productName={allProducts[0].name} */}
        {allProducts.map(product=>< Product key={product.id} productName={product.name}/>)}
    </div>
  )
}

