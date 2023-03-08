import React, { useState } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import useAuth from "../../services/check-login/useAuth";
import Footer from "../home/footer";
import Subscribe from "../home/subscribe";

const Search_items = () => {
  const [search, setSearch] = useState("");
  const productSearch = `http://localhost:8080/api/search?name=${search}`;
  const [products, setProducts] = useState([]);

  const isAuth = useAuth();
  const useName = localStorage.getItem("userName");

  const useNavigateParams = () => {
    const navigate = useNavigate();

    return (url, params) => {
      const path = generatePath(":url?:queryString", {
        url,
        queryString: params,
      });
      navigate(path);
    };
  };

  const navigate = useNavigateParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(productSearch)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    navigate("/search_items", `key = ${encodeURIComponent(search)}`);
  };

  const { totalUniqueItems } = useCart();

  return (
    <div>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-12">
                <Link to={"/"} className="brand-wrap">
                  <img
                    style={{ marginLeft: "110px" }}
                    className="logo"
                    src="/assets/images/logo2.png"
                  />
                </Link>
                {/* brand-wrap.// */}
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6">
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <select
                      className="custom-select border-right"
                      name="category_name"
                    >
                      <option value>Tất cả các loại</option>
                      <option value="codex">Đặc biệt</option>
                      <option value="comments">Tốt nhất</option>
                      <option value="content">Lâu Đời</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div
                      className="input-group-append"
                      style={{ margin: "-1px" }}
                    >
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                      >
                        <i className="fa fa-search" /> Tìm kiếm
                      </button>
                    </div>
                  </div>
                </form>{" "}
                {/* search-wrap .end// */}
              </div>{" "}
              {/* col.// */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header mr-3">
                    <Link to={"../administration"} className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user" />
                      </div>
                      {isAuth ? (
                        <small className="text"> {useName} </small>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </div>

                  <div className="widget-header mr-3">
                    <a href="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-comment-dots" />
                      </div>
                      <small className="text"> Tin nhắn </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-store" />
                      </div>
                      <small className="text"> Đơn hàng </small>
                    </a>
                  </div>
                  <div className="widget-header">
                    <Link to={"../shopping_cart"} className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                        <span className="notify">{totalUniqueItems}</span>
                      </div>
                      <small className="text"> Giỏ hàng </small>
                    </Link>
                  </div>
                </div>{" "}
                {/* widgets-wrap.// */}
              </div>{" "}
              {/* col.// */}
            </div>{" "}
            {/* row.// */}
          </div>{" "}
          {/* container.// */}
        </section>{" "}
        {/* header-main .// */}
        <nav className="navbar navbar-main navbar-expand-lg border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link" data-toggle="dropdown" to={"/"}>
                    {" "}
                    <i /> Trang chủ{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"../all_category"} className="nav-link">
                    Tất cả danh mục
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/introduce">
                    Giới thiệu B-Shop
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-md-auto">
                {isAuth ? (
                  <></>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to={"../login"} className="nav-link">
                        Đăng nhập
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"../register"} className="nav-link">
                        Đăng ký
                      </Link>
                    </li>
                  </>
                )}

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="http://example.com"
                    data-toggle="dropdown"
                  >
                    Tiếng Việt
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Tiếng Anh
                    </a>
                    <a className="dropdown-item" href="#">
                      Tiếng Nga
                    </a>
                    <a className="dropdown-item" href="#">
                      Tiếng Pháp
                    </a>
                    <a className="dropdown-item" href="#">
                      Tiếng Tây Ban Nha
                    </a>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* collapse .// */}
          </div>{" "}
          {/* container .// */}
        </nav>
      </header>{" "}
      {/* section-header.// */}
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
                          <span className="badge badge-danger"> NEW </span>
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

export default Search_items;
