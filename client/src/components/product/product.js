import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import axios from "axios";

export default function Product() {
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState([]);
  const { product_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/product/${product_id}`
        );
        setProduct(response.data);
        setQuantity(response.data.quantity);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [product_id]);

  const sizeAndQuantity = [
    { size: 29, quantity: 10 },
    { size: 30, quantity: 50 },
    { size: 35, quantity: 5 },
  ];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleBuyClick = () => {
    console.log("Buy button clicked!");
  };

  return (
    <div className="productdetail">
      <img src={product.image_path} alt="product" />

      <div className="productdetail-infomation">
        <div className="description">{product.description}</div>
        <div>Name: {product.name}</div>
        <div>Price: {product.price} VND</div>
        <div>
          Storage quantity:{" "}
          {quantity.find((item) => item.size === selectedSize)?.quantity ||
            "chose your size"}
        </div>
        <div className="size-selector">
          <div>Size:</div>
          {quantity.map((product) => (
            <div>
              <div>{product.size}</div>
              <input
                type="radio"
                value={product.size}
                name="select-size"
                onClick={handleSizeChange}
              />
            </div>
          ))}
        </div>

        <div>Selected Size:{selectedSize}</div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button onClick={handleBuyClick}>Buy</button>
      </div>
    </div>
  );
}
