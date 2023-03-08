import React from "react";
import Footer from "../home/footer";
import Header from "../home/header";
import Cart_content from "./cart_content";
import Cart_policy from "./cart_policy";

const Shopping_cart = () => {
  return (
    <div>
      <Header />

      <Cart_content />

      <Cart_policy />

      <Footer />
    </div>
  );
};

export default Shopping_cart;
