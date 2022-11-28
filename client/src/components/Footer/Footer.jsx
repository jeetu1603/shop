import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Grocery</span>
          <span>Mobiles</span>
          <span>Fashion</span>
          <span>Electronics</span>
          <span>Home</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eaque
            autem odio quis minima. Odio corporis dicta commodi, quidem, nostrum
            et facilis neque minus veritatis suscipit fugit sint, laborum autem
            debitis sequi. Temporibus similique magni corporis. Commodi
            repudiandae neque, modi cumque quod quidem itaque soluta dolor
            temporibus omnis est harum!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            tempora itaque, dicta error repellat odio amet consectetur quam
            aperiam a dolorum, maxime praesentium. Sit harum aliquam aut
            provident, sunt nobis neque vitae, commodi rerum laboriosam dolores,
            perspiciatis iusto. Nihil dolor accusamus autem animi perspiciatis
            alias ducimus doloribus sunt asperiores temporibus?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LUNASHOP</span>
          <span className="copyright">© 2022</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" height={100} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
