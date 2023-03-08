import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

const Deal = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () =>
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* =============== SECTION DEAL =============== */}
      <section className="padding-bottom">
        <div className="card card-deal">
          <div className="col-heading content-body">
            <header className="section-heading">
              <h3 className="section-title">Ưu đãi giờ vàng</h3>
              <p>Thời lượng chương trình</p>
            </header>
            {/* sect-heading */}
            <div className="timer">
              <div>
                {" "}
                <span className="num">04</span> <small>Ngày</small>
              </div>
              <div>
                {" "}
                <span className="num">12</span> <small>Giờ</small>
              </div>
              <div>
                {" "}
                <span className="num">58</span> <small>Phút</small>
              </div>
              <div>
                {" "}
                <span className="num">02</span> <small>Giây</small>
              </div>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="row no-gutters items-wrap">
            {products.slice(0, 5).map((product, id) => (
              <div key={id} className="col-md col-6">
                <figure
                  className="card-product-grid card-sm"
                  style={{
                    minHeight: "268px",
                    width: "202.21px",
                    textAlign: "left",
                  }}
                >
                  <div className="text-wrap p-3">
                    <span className="badge badge-danger">
                      {" "}
                      {product.discount}%{" "}
                    </span>
                    <Link to={`/product/${product.id}`} className="img-wrap">
                      <img src={product.image} />
                    </Link>
                    <Link
                      style={{ fontWeight: "bold" }}
                      to={`/product/${product.id}`}
                      className="title_deal"
                    >
                      {product.name}
                    </Link>
                    <div className="content_app">
                      <div className="price_app">
                        <p style={{ color: "red", fontSize: "20px" }}>
                          {product.price_discount.toLocaleString()}₫
                        </p>
                        <div className="price-wrap">
                          <span
                            style={{
                              color: "#969696",
                              textDecorationLine: "line-through",
                            }}
                            className="price"
                          >
                            {product.price.toLocaleString()}₫
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", margin: "10px 0 10px 0" }}>
                      <ul className="rating-stars">
                        <li style={{ width: "83%" }} className="stars-active">
                          <i className="fa fa-star" />{" "}
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />{" "}
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />{" "}
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />{" "}
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                      <p
                        style={{
                          fontSize: "12px",
                          margin: "5px 0 5px 3px",
                        }}
                      >
                        Đã bán {product.sold}
                      </p>
                    </div>
                    <p style={{ fontSize: "15px" }} className="text-muted">
                      <i className="fa fa-map-marker-alt" /> {product.address}
                    </p>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =============== SECTION DEAL // END =============== */}
    </div>
  );
};

export default Deal;
