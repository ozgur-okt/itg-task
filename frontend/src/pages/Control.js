import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { authConfig } from "../config";

export default function Control() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    let result = await axios.get("http://localhost:8080/api/products", { auth: authConfig });
    setProducts(result.data);
  };

  const deleteProduct = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      await axios.delete(`http://localhost:8080/api/products/${id}`, { auth: authConfig });
      loadProducts();
    }
  };

  return (
    <div className="container">
      <div className="py-4">

        <div className="d-flex justify-content-between mb-4">
          <h3>Products</h3>
          <Link className="btn btn-success" to="/addproduct">
            Add Product
          </Link>
        </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th className="text-center" scope="col">ID</th>
              <th className="text-center" scope="col">Name</th>
              <th className="text-center" scope="col">Price</th>
              <th className="text-center" scope="col">Image Url</th>
              <th className="text-center" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th className="text-center" scope="row">
                  {index + 1}
                </th>
                <td className="text-center">{product.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">{product.image}</td>
                <td className="text-center">

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproduct/${product.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
