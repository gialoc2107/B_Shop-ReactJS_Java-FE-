import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import Subscribe from "../home/subscribe";

const Listing_grid = () => {
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

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container">
          {/* ============================  FILTER TOP  ================================= */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <nav className="col-md-8">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Danh mục phổ biến</a>
                    </li>
                  </ol>
                </nav>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
              <hr />
              <div className="row">
                <div className="col-md-10">
                  <ul className="list-inline">
                    <li className="list-inline-item mr-3 dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        {" "}
                        Nhà cung cấp{" "}
                      </a>
                      <div
                        className="dropdown-menu p-3"
                        style={{ maxWidth: "400px" }}
                      >
                        <label className="form-check">
                          <input
                            type="radio"
                            name="myfilter"
                            className="form-check-input"
                          />{" "}
                          Seikosha
                        </label>
                        <label className="form-check">
                          <input
                            type="radio"
                            name="myfilter"
                            className="form-check-input"
                          />{" "}
                          Toyo Tokei
                        </label>
                        <label className="form-check">
                          <input
                            type="radio"
                            name="myfilter"
                            className="form-check-input"
                          />{" "}
                          Toyo Tokei
                        </label>
                        <label className="form-check">
                          <input
                            type="radio"
                            name="myfilter"
                            className="form-check-input"
                          />{" "}
                          Swatch Group
                        </label>
                        <label className="form-check">
                          <input
                            type="radio"
                            name="myfilter"
                            className="form-check-input"
                          />{" "}
                          Tadao Kashio
                        </label>
                      </div>{" "}
                      {/* dropdown-menu.// */}
                    </li>
                    <li className="list-inline-item mr-3 dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        {" "}
                        Quốc gia{" "}
                      </a>
                      <div className="dropdown-menu p-3">
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          Nhật Bản{" "}
                        </label>
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          Nga{" "}
                        </label>
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          Thụy Sỹ
                        </label>
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          Mỹ{" "}
                        </label>
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          Đan Mạch{" "}
                        </label>
                      </div>{" "}
                      {/* dropdown-menu.// */}
                    </li>
                    <li className="list-inline-item mr-3 dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Hình dạng mặt số
                      </a>
                      <div className="dropdown-menu">
                        <a href className="dropdown-item">
                          Tròn
                        </a>
                        <a href className="dropdown-item">
                          Chữ nhật
                        </a>
                        <a href className="dropdown-item">
                          Vuông
                        </a>
                        <a href className="dropdown-item">
                          Đặc biệt
                        </a>
                      </div>
                    </li>
                    <li className="list-inline-item mr-3 dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Kích thước mặt số
                      </a>
                      <div className="dropdown-menu">
                        <a href className="dropdown-item">
                          {"< 29 mm "}
                        </a>
                        <a href className="dropdown-item">
                          30 - 34 mm
                        </a>
                        <a href className="dropdown-item">
                          35 - 39 mm
                        </a>
                        <a href className="dropdown-item">
                          40 - 43 mm
                        </a>
                        <a href className="dropdown-item">
                          {"> 44 mm "}
                        </a>
                      </div>
                    </li>
                    <li className="list-inline-item mr-3">
                      <div className="form-inline">
                        <label className="mr-2">Giá</label>
                        <input
                          className="form-control form-control-sm"
                          placeholder="Thấp"
                          type="number"
                        />
                        <span className="px-2"> - </span>
                        <input
                          className="form-control form-control-sm"
                          placeholder="Cao"
                          type="number"
                        />
                        <button
                          type="submit"
                          className="btn btn-sm btn-light ml-2"
                        >
                          Lọc
                        </button>
                      </div>
                    </li>
                    <li className="list-inline-item mr-3">
                      <label className="custom-control mt-1 custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          Miễn phí giao hàng
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </div>{" "}
            {/* card-body .// */}
          </div>{" "}
          {/* card.// */}
          {/* ============================ FILTER TOP END.// ================================= */}
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
                  to={"../Listing_grid"}
                  className="btn btn-light active"
                  data-toggle="tooltip"
                  title="List view"
                >
                  <i className="fa fa-bars" />
                </Link>
                <Link
                  to={"../Listing_large"}
                  className="btn btn-light"
                  data-toggle="tooltip"
                  title="Grid view"
                >
                  <i className="fa fa-th" />
                </Link>
              </div>
            </div>
          </header>
          {/* sect-heading */}
          <div className="row">
            {products &&
              products
                .filter((x) => x.categoryid)
                .slice(0, 8)
                .map((product, id) => (
                  <div className="col-md-3">
                    <figure className="card card-product-grid">
                      <div className="img-wrap">
                        <Link
                          to={`/product/${product.id}`}
                          className="img-wrap"
                        >
                          <span className="badge badge-danger"> Mới </span>

                          <img src={product.image} />
                        </Link>
                      </div>{" "}
                      {/* img-wrap.// */}
                      <figcaption className="info-wrap">
                        <Link
                          to={`/product/${product.id}`}
                          className="title mb-2"
                        >
                          {product.name}
                        </Link>
                        <div className="price-wrap">
                          <span className="price">
                            {product.price.toLocaleString()}₫
                          </span>
                          <small className="text-muted">/{product.pair}</small>
                        </div>{" "}
                        {/* price-wrap.// */}
                        <p className="text-muted ">
                          Công ty {product.manufacturer}
                        </p>
                        <hr />
                        <p className="mb-3">
                          <span className="tag">
                            {" "}
                            <i className="fa fa-check" /> Đã xác minh
                          </span>
                          <span className="tag">{product.insurance}</span>
                          <span className="tag"> {product.reviews} </span>{" "}
                          <br />
                          <span className="tag"> {product.origin} </span>
                        </p>
                        <label className="custom-control mb-3 custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">
                            Đánh dấu sản phẩm
                          </div>
                        </label>
                        <a href="#" className="btn btn-outline-primary">
                          {" "}
                          <i className="fa fa-envelope" /> Liên hệ với nhà cung
                          cấp{" "}
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                ))}
          </div>{" "}
          {/* row end.// */}
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
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Subscribe />

      <Footer />
    </div>
  );
};

export default Listing_grid;
