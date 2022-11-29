import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/in.png" alt="" width={40} height={20} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>₹</span>
            <KeyboardArrowDownIcon />
          </div>
          <Link className="link" to="/products/1">
            <div className="item">Ladies</div>
          </Link>
          <Link className="link" to="/products/2">
            <div className="item">Men</div>
          </Link>
          <Link className="link" to="/products/3">
            <div className="item">Kids</div>
          </Link>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <div className="item">LUNASHOP</div>
          </Link>
        </div>
        <div className="right">
          <Link className="link" to="/">
            <div className="item">Home</div>
          </Link>
          <Link className="link" to="/">
            <div className="item">About</div>
          </Link>
          <Link className="link" to="/">
            <div className="item">Contact</div>
          </Link>
          <Link className="link" to="/">
            <div className="item">Stores</div>
          </Link>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
