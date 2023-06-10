import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authConfig } from "../config";
import "../App.css";

export default function EditProduct() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const { name, price, image } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/products`, product, { auth: authConfig });
    navigate("/control");
  };

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/api/products/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Product</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter product name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Image" className="form-label">
                Image Url
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter image url"
                name="image"
                value={image}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="d-flex justify-content-center my-4">
              <button type="submit" className="btn btn-outline-primary mx-3 login-form">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-3 login-form" to="/control">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
