import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="link" to={`/product/${item.id}`}>
        <div className="image">
          <span>New Season</span>
          <img src={item.image} alt="" className="mainImg" />
          <img src={item.image} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>₹{item.price}</h3>
          <h3>₹{item.price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
