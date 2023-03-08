import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

const Electronics = ({ products }) => {
  return (
    <div>
      {/* =============== SECTION 2 =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Citizen</h4>
        </header>
        <div className="card card-home-category">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="home-category-banner bg-light-orange">
                <h5 className="title">Đồng hồ Citizen</h5>
                <p>
                  Đi đầu với công nghệ dùng năng lượng ánh sáng để thay thế cho
                  các loại năng lượng khác góp phần vì mục đích bảo vệ môi
                  trường. Dòng đồng hồ CITIZEN ECO-DRIVE đã và đang gây nên trào
                  lưu mới trong làng đồng hồ thế giới.
                </p>
                <img
                  alt=""
                  style={{ top: "155px", right: "-58px" }}
                  src="assets/images/home/CITIZEN.png"
                  className="img-bg"
                />
              </div>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-9">
              <ul className="row no-gutters bordered-cols">
                {products.slice(4, 8).map((product, id) => (
                  <div className="col-md-3" style={{ height: "405px" }}>
                    <figure className="card card-product-grid">
                      <div className="img-wrap" style={{ height: "200px" }}>
                        <Link
                          to={`/product/${product.id}`}
                          className="img-wrap"
                        >
                          <img
                            alt=""
                            style={{
                              width: "172.2px",
                              height: "180px",
                              marginTop: "20px",
                            }}
                            src={product.image}
                          />
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
                          <small className="text-muted">
                            {""} -{product.discount}%
                          </small>
                          <span
                            style={{
                              padding: 0,
                              border: 0,
                              margin: 0,
                              marginLeft: "63px",
                              color: "#00b517",
                            }}
                            className="tag"
                          >
                            Free ship
                          </span>
                          <i
                            style={{
                              marginLeft: "2px",
                              marginTop: "5px",
                              color: "#00bfa5",
                            }}
                            class="fa fa-truck"
                          ></i>
                        </div>{" "}
                        {/* price-wrap.// */}
                        <hr />
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                          <ul className="rating-stars">
                            <li
                              style={{ width: "91%" }}
                              className="stars-active"
                            >
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
                              marginTop: "5px",
                              marginLeft: "3px",
                            }}
                          >
                            Đã bán {product.sold}
                          </p>
                        </div>
                        <p className="text-muted">
                          <i className="fa fa-map-marker-alt" />{" "}
                          {product.address}
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </ul>
            </div>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* card.// */}
      </section>
      {/* =============== SECTION 2 END =============== */}
    </div>
  );
};

export default Electronics;
