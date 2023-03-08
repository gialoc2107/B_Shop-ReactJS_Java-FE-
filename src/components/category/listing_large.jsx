import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import Subscribe from "../home/subscribe";

const Listing_large = () => {
  const { categoryid } = useParams();
  console.log(categoryid);

  const [products, setProducts] = useState([]);

  const getProducts = () =>
    axios
      .get(`http://localhost:8080/api/v1/products/${categoryid}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  useEffect(() => {
    getProducts();
  }, []);

  //---------------------------------------------------------------------------------

  const [brand, setBrand] = useState([]);

  const getBrand = () =>
    axios.get("http://localhost:8080/api/brand").then((res) => {
      console.log(res.data);
      setBrand(res.data);
    });
  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container">
          {/* ============================  FILTER TOP  ================================= */}
          <div className="card mb-3">
            <div className="card-body">
              <ol className="breadcrumb float-left">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Trang chủ</Link>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Danh mục</a>
                </li>
              </ol>
            </div>{" "}
            {/* card-body .// */}
          </div>{" "}
          {/* card.// */}
          {/* ============================ FILTER TOP END.// ================================= */}
          <div className="row">
            <aside className="col-md-2">
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_2"
                  >
                    {" "}
                    Thương hiệu{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_2">
                  <div className="inner">
                    {brand.map((brand, id) => (
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          {brand.name}
                          <b className="badge badge-pill badge-light float-right">
                            {brand.quantity}
                          </b>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_3"
                  >
                    {" "}
                    Phạm vi giá{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_3">
                  <div className="inner">
                    <input
                      type="range"
                      className="custom-range"
                      min={0}
                      max={100}
                      name
                    />
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Tối thiểu</label>
                        <input
                          className="form-control"
                          placeholder="0₫"
                          type="number"
                        />
                      </div>
                      <div className="form-group text-right col-md-6">
                        <label>Tối đa</label>
                        <input
                          className="form-control"
                          placeholder="100 triệu"
                          type="number"
                        />
                      </div>
                    </div>{" "}
                    {/* form-row.// */}
                    <button className="btn btn-block btn-primary">
                      Lọc giá
                    </button>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_4"
                  >
                    {" "}
                    Kích thước mặt số{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_4">
                  <div className="inner">
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light">{"< 29 mm "}</span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> 30 - 34 mm </span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> 35 - 39 mm </span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> 40 - 43 mm </span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light">{"> 44 mm "}</span>
                    </label>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_5"
                  >
                    {" "}
                    Hình dạng mặt số{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_5">
                  <div className="inner">
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        defaultChecked
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Tròn</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Chữ nhật</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Vuông</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Đặc biệt</div>
                    </label>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_5"
                  >
                    {" "}
                    {"Bộ máy & năng lượng"}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_5">
                  <div style={{ paddingTop: "0" }} className="inner">
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Pin (Quartz)</div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Cơ (Automatic)</div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        Năng lượng ánh sáng
                      </div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        Vừa Pin - Vừa tự động
                      </div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        Lên cót tay (Hand Winding)
                      </div>
                    </label>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
            </aside>{" "}
            {/* col.// */}
            <main className="col-md-10">
              <header className="mb-3">
                <div className="form-inline">
                  <strong className="mr-md-auto"></strong>
                  <select className="mr-2 form-control">
                    <option>Mới nhất</option>
                    <option>Xu hướng</option>
                    <option>Phổ biến nhất</option>
                    <option>Rẻ nhất</option>
                  </select>
                  <div className="btn-group">
                    <Link
                      to={`../Listing_grid`}
                      className="btn btn-light"
                      data-toggle="tooltip"
                      title="List view"
                    >
                      <i className="fa fa-bars" />
                    </Link>
                    <Link
                      to={`../Listing_large`}
                      className="btn btn-light active"
                      data-toggle="tooltip"
                      title="Grid view"
                    >
                      <i className="fa fa-th" />
                    </Link>
                  </div>
                </div>
              </header>
              {/* sect-heading */}
              {products &&
                products
                  .filter((x) => x.categoryid)
                  .slice(0, 5)
                  .map((product, id) => (
                    <article className="card card-product-list">
                      <div className="row no-gutters">
                        <aside style={{ height: "250px" }} className="col-md-3">
                          <Link
                            to={`/product/${product.id}`}
                            className="img-wrap"
                          >
                            <span className="badge badge-danger"> Mới </span>
                            <img
                              style={{ marginTop: "20px" }}
                              src={product.image}
                            />
                          </Link>
                        </aside>{" "}
                        {/* col.// */}
                        <div className="col-md-6">
                          <div className="info-main">
                            <Link
                              to={`/product/${product.id}`}
                              className="h5 title"
                            >
                              {" "}
                              {product.name}
                            </Link>
                            <div className="rating-wrap mb-2">
                              <ul className="rating-stars">
                                <li
                                  style={{ width: "100%" }}
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
                              <div className="label-rating">9/10</div>
                            </div>{" "}
                            {/* rating-wrap.// */}
                            <p className="mb-3">
                              <span className="tag">
                                {" "}
                                <i className="fa fa-check" /> {product.verified}
                              </span>
                              <span className="tag">{product.insurance}</span>
                              <span className="tag">{product.reviews}</span>
                              <span className="tag"> {product.origin} </span>
                            </p>
                            <p>{product.short_description}</p>
                          </div>{" "}
                          {/* info-main.// */}
                        </div>{" "}
                        {/* col.// */}
                        <aside className="col-sm-3">
                          <div className="info-aside">
                            <div className="price-wrap">
                              <span className="h5 price">
                                {product.price.toLocaleString()}₫
                              </span>
                              <small className="text-muted">
                                /{product.pair}
                              </small>
                            </div>{" "}
                            {/* price-wrap.// */}
                            <small style={{ color: "#00b517" }}>
                              {product.delivery}
                            </small>
                            <p className="text-muted mt-3">
                              Công ty {product.manufacturer}
                            </p>
                            <p className="mt-3">
                              <a href="#" className="btn btn-outline-primary">
                                {" "}
                                <i className="fa fa-envelope" /> Liên hệ với nhà
                                cung cấp
                              </a>
                              <a href="#" className="btn btn-light">
                                <i className="fa fa-heart" /> Thêm vào mục yêu
                                thích{" "}
                              </a>
                            </p>
                            <label className="custom-control mt-3 custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                              />
                              <div className="custom-control-label">
                                Đánh dấu sản phẩm
                              </div>
                            </label>
                          </div>{" "}
                          {/* info-aside.// */}
                        </aside>{" "}
                        {/* col.// */}
                      </div>
                    </article>
                  ))}
              {/* card-product .// */}
              <nav className="mb-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Trước
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Kế tiếp
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="box text-center">
                <p>Bạn đã tìm thấy những gì bạn đang tìm kiếm ?</p>
                <a href className="btn btn-light">
                  Đúng
                </a>
                <a href className="btn btn-light">
                  Không
                </a>
              </div>
            </main>{" "}
            {/* col.// */}
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Subscribe />

      <Footer />
    </div>
  );
};

export default Listing_large;
