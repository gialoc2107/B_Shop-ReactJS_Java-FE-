import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
const Items = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () =>
    axios.get("http://localhost:8080/api/products").then((res) => {
      setProducts(res.data);
    });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* =============== SECTION ITEMS =============== */}
      <section className="padding-bottom-sm">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">
            CÁC SẢN PHẨM ĐƯỢC ĐỀ XUẤT
          </h4>
        </header>
        <div className="row row-sm">
          {products.slice(25, 33).map((product, id) => (
            <div key={id} className="col-md-3">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <Link to={`/product/${product.id}`} className="img-wrap">
                    <img src={product.image} />
                  </Link>
                  <span className="badge badge-danger"> Mới </span>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <Link
                    to={`/product/${product.id}`}
                    className="title mb-2"
                    style={{ fontWeight: "bold" }}
                  >
                    {product.name}
                  </Link>
                  <div className="price-wrap">
                    <div
                      style={{
                        fontSize: "16px",
                        color: "#fa3434",
                        marginBottom: "10px",
                        display: "flex",
                      }}
                      className="price mt-1"
                    >
                      <span
                        style={{
                          textDecorationLine: "line-through",
                          margin: "5px 5px 0 0",
                          fontSize: "15px",
                        }}
                        className="text-muted"
                      >
                        {product.price.toLocaleString()}₫
                      </span>
                      <p style={{ fontSize: "20px" }}>
                        {product.price_discount.toLocaleString()}₫
                        <small
                          style={{ fontSize: "12px" }}
                          className="text-muted"
                        >
                          /{product.pair}
                        </small>
                      </p>
                    </div>{" "}
                  </div>{" "}
                  {/* price-wrap.// */}
                  <hr />
                  <div className="mb-3">
                    <div style={{ display: "flex" }}>
                      <span className="tag">
                        {" "}
                        <i className="fa fa-check" /> Kính:
                      </span>{" "}
                      <p style={{ marginTop: "6px", marginLeft: "65px" }}>
                        {product.glasses}
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className="tag">
                        <i className="fa fa-check" /> Máy:
                      </span>
                      <p style={{ marginTop: "6px", marginLeft: "65px" }}>
                        {product.machine}
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span className="tag">
                        {" "}
                        <i className="fa fa-check" /> Chống nước:{" "}
                      </span>{" "}
                      <p style={{ marginTop: "6px", marginLeft: "20px" }}>
                        {product.waterproof} ATM
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p className="text-left">
                      <img src="assets/images/misc/payments.png" height={26} />
                    </p>
                    <span
                      style={{
                        padding: 0,
                        border: 0,
                        margin: "5px 0px 0px 63px",
                        color: "#00b517",
                      }}
                      className="tag free"
                    >
                      Free ship
                    </span>
                    <i
                      style={{
                        marginLeft: "2px",
                        marginTop: "10px",
                        color: "#00bfa5",
                      }}
                      className="fa fa-truck"
                    ></i>
                  </div>
                  <label className="custom-control mb-3 custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />

                    <div
                      style={{ marginTop: "15px" }}
                      className="custom-control-label"
                    >
                      Thêm vào mục yêu thích
                    </div>
                  </label>
                  <div style={{ display: "flex" }}>
                    {/* <a
                    href="../shopping_cart"
                    className="btn btn-outline-primary"
                  >
                    <i
                      style={{ marginRight: "10px" }}
                      className="fa fa-shopping-cart"
                    />
                    {""}
                    Thêm vào giỏ hàng
                  </a> */}
                    {/* <p style={{ margin: "20px 0px 0px 30px" }} className="text-muted"> */}
                    <p className="text-muted">
                      <i className="fa fa-map-marker-alt" /> {product.address}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>{" "}
        {/* row.// */}
      </section>
      {/* =============== SECTION ITEMS .//END =============== */}
    </div>
  );
};

export default Items;
