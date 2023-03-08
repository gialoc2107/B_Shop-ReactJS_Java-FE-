import Apparel from "./apparel";
import Deal from "./deal";
import Electronics from "./electronics";
import Footer from "./footer";
import Header from "./header";
import Items from "./items";
import Main from "./main";
import Region from "./region";
import Request from "./request";
import Services from "./services";
import Subscribe from "./subscribe";
import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Index = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () =>
    api.get("api/products").then((res) => {
      setProducts(res.data);
    });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <Main />

        <Deal />

        <Apparel
          products={
            products && products.filter((x) => x.typeid === 2).slice(0, 8)
          }
        />

        <Electronics
          products={
            products && products.filter((x) => x.typeid === 3).slice(0, 8)
          }
        />

        <Request />

          <Items />

        <Services />

        <Region />

        <article className="my-4">
          <img src="assets/images/banners/ad-sm.png" className="w-100" />
        </article>
      </div>
      {/* container end.// */}

      <Subscribe />

      <Footer />
    </div>
  );
};

export default Index;
