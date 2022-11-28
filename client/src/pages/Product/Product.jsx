import React, { useState } from "react";
import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://cdn.lorem.space/images/shoes/.cache/640x480/usama-akram-kP6knT7tjn4-unsplash.jpg",
    "https://cdn.lorem.space/images/shoes/.cache/640x480/maksim-larin-NOpsC3nWTzY-unsplash.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">₹199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error
          vel blanditiis eveniet! Error, neque suscipit possimus nihil mollitia
          consectetur id, minima, voluptatem unde animi officia. Laboriosam
          perspiciatis veritatis laudantium!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISHLIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Jeetu</span>
          <span>Product Type: Shirt, T-Shirt</span>
          <span>Tag: Men, Women, Children</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
