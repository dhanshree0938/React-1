import React from 'react'
import {Link} from 'react-router-dom';

export default function Product(props) {
    const product = props.productObj;
    return (
        <div className='col-md-3 mt-3 d-flex'>
            <div className="card w-100">
                <img src={product.images[0]} className="card-img-top" alt="..." style={{"height": "400px", "objectFit": "cover" }} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.id}</h5>
                        <h6 className="card-title">{product.title}</h6>
                        <p className="card-text flex-grow-1">{product.description.substring(0,100)+ "..."}</p>
                        <h6>$ {product.price}</h6>
                        <Link to={`/products/${product.id}`} className="btn btn-primary mt-auto">Product Details</Link>
                    </div>
            </div>
        </div>
    )
}