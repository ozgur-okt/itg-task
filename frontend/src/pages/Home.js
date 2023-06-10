import React, { useEffect, useState } from 'react'
import { authConfig } from '../config';
import axios from 'axios';

export default function Home() {
   

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/api/products", { auth: authConfig });
        setProducts(result.data);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-md-2" key={index}>
                        <div className="card mb-5">
                            <img src={product.image} className="card-img-top" alt="Image 1" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text"> <span className='fs-4 fw-bold'> {product.price} </span>  TL</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
