import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              women's clothing
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              electronics
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.lorem.space/images/furniture/.cache/640x480/halacious-Vfml26Iy4mI-unsplash.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              furniture
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://api.lorem.space/image/fashion?w=640&h=480&r=4154"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  clothes
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://api.lorem.space/image?w=640&h=480&r=2672"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  others
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://api.lorem.space/image/shoes?w=640&h=480&r=2301"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
