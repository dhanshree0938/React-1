import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
    const params = useParams();
    //  console.log(params);
    const productId = params.productId;
    const [ProductDetails, setProductDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(resp => resp.json())
            .then(data => setProductDetails(data));
    }, []);

    const goBack = ()=>{
        navigate('/');
    }

    return (
        ProductDetails ? (
            <div className="container mt-4">
                <div className="card shadow-sm">
                    <div className="row g-0">
                        <div className="col-md-5">
                            {ProductDetails.images?.length > 1 ? (
                                <div id={`productCarousel${productId}`} className="carousel slide h-100" data-bs-ride="carousel">
                                    <div className="carousel-inner h-100">
                                        {ProductDetails.images.map((img, idx) => (
                                            <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''} h-100`}>
                                                <img
                                                    src={img}
                                                    className="d-block w-100 h-100"
                                                    alt={`${ProductDetails.title}-${idx}`}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={`#productCarousel${productId}`} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={`#productCarousel${productId}`} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            ) : (
                                <img
                                    src={ProductDetails.images?.[0]}
                                    className="img-fluid rounded-start"
                                    alt={ProductDetails.title}
                                    style={{ objectFit: 'cover', height: '100%' }}
                                />
                            )}
                        </div>

                        <div className="col-md-7">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h3 className="card-title mb-0">{ProductDetails.title}</h3>
                                        <p className="text-muted small mb-1">{ProductDetails.brand} • {ProductDetails.category}</p>
                                    </div>
                                    <div className="text-end">
                                        <h4 className="mb-1 text-success">${ProductDetails.price}</h4>
                                        <span className="badge bg-warning text-dark">{ProductDetails.discountPercentage}% off</span>
                                    </div>
                                </div>

                                <p className="card-text mt-3">{ProductDetails.description}</p>

                                <div className="d-flex align-items-center mb-3">
                                    <div className="me-3">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span
                                                key={i}
                                                style={{ color: i < Math.round(ProductDetails.rating) ? '#ffc107' : '#e9ecef', fontSize: '1.05rem' }}
                                                className="me-1"
                                            >
                                                ★
                                            </span>
                                        ))}
                                        <small className="text-muted ms-2">({ProductDetails.rating})</small>
                                    </div>
                                    <div>
                                        <span className={`badge ${ProductDetails.stock > 0 ? 'bg-primary' : 'bg-danger'}`}>
                                            {ProductDetails.stock > 0 ? `In stock (${ProductDetails.stock})` : 'Out of stock'}
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex gap-2">
                                    <button className="btn btn-primary">Add to Cart</button>
                                    {/* <button className="btn btn-outline-secondary" onClick={() => window.history.back()}>Back</button> */}
                                     <button className="btn btn-primary" onClick={goBack}>Back to Product List</button>
                                    <button className="btn btn-success ms-auto">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Brand:</strong> {ProductDetails.brand}</li>
                        <li className="list-group-item"><strong>Category:</strong> {ProductDetails.category}</li>
                        <li className="list-group-item"><strong>Discount:</strong> {ProductDetails.discountPercentage}%</li>
                    </ul>
                </div>
            </div>
    
        ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    )
}
