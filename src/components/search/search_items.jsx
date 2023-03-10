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
                      <option value>T???t c??? c??c lo???i</option>
                      <option value="codex">?????c bi???t</option>
                      <option value="comments">T???t nh???t</option>
                      <option value="content">L??u ?????i</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="T??m ki???m"
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
                        <i className="fa fa-search" /> T??m ki???m
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
                      <small className="text"> Tin nh???n </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-store" />
                      </div>
                      <small className="text"> ????n h??ng </small>
                    </a>
                  </div>
                  <div className="widget-header">
                    <Link to={"../shopping_cart"} className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                        <span className="notify">{totalUniqueItems}</span>
                      </div>
                      <small className="text"> Gi??? h??ng </small>
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
                    <i /> Trang ch???{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"../all_category"} className="nav-link">
                    T???t c??? danh m???c
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/introduce">
                    Gi???i thi???u B-Shop
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
                        ????ng nh???p
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"../register"} className="nav-link">
                        ????ng k??
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
                    Ti???ng Vi???t
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Ti???ng Anh
                    </a>
                    <a className="dropdown-item" href="#">
                      Ti???ng Nga
                    </a>
                    <a className="dropdown-item" href="#">
                      Ti???ng Ph??p
                    </a>
                    <a className="dropdown-item" href="#">
                      Ti???ng T??y Ban Nha
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
                      <Link to={"/"}>Trang ch???</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Danh m???c ph??? bi???n</a>
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
                        Nh?? cung c???p{" "}
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
                        Qu???c gia{" "}
                      </a>
                      <div className="dropdown-menu p-3">
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          Nh???t B???n{" "}
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
                          Th???y S???
                        </label>
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          M???{" "}
                        </label>
                        <label className="form-check">
                          {" "}
                          <input
                            type="checkbox"
                            className="form-check-input"
                          />{" "}
                          ??an M???ch{" "}
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
                        H??nh d???ng m???t s???
                      </a>
                      <div className="dropdown-menu">
                        <a href className="dropdown-item">
                          Tr??n
                        </a>
                        <a href className="dropdown-item">
                          Ch??? nh???t
                        </a>
                        <a href className="dropdown-item">
                          Vu??ng
                        </a>
                        <a href className="dropdown-item">
                          ?????c bi???t
                        </a>
                      </div>
                    </li>
                    <li className="list-inline-item mr-3 dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        K??ch th?????c m???t s???
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
                        <label className="mr-2">Gi??</label>
                        <input
                          className="form-control form-control-sm"
                          placeholder="Th???p"
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
                          L???c
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
                          Mi???n ph?? giao h??ng
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
                <option>M???i nh???t</option>
                <option>Xu h?????ng</option>
                <option>Ph??? bi???n nh???t</option>
                <option>R??? nh???t</option>
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
                            {product.price.toLocaleString()}???
                          </span>
                          <small className="text-muted">/{product.pair}</small>
                        </div>{" "}
                        {/* price-wrap.// */}
                        <p className="text-muted ">
                          C??ng ty {product.manufacturer}
                        </p>
                        <hr />
                        <p className="mb-3">
                          <span className="tag">
                            {" "}
                            <i className="fa fa-check" /> ???? x??c minh
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
                            ????nh d???u s???n ph???m
                          </div>
                        </label>
                        <a href="#" className="btn btn-outline-primary">
                          {" "}
                          <i className="fa fa-envelope" /> Li??n h??? v???i nh?? cung
                          c???p{" "}
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
                  Tr?????c
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
                  K??? ti???p
                </a>
              </li>
            </ul>
          </nav>
          <div className="box text-center">
            <p>B???n ???? t??m th???y nh???ng g?? b???n ??ang t??m ki???m ?</p>
            <a href className="btn btn-light">
              ????ng
            </a>
            <a href className="btn btn-light">
              Kh??ng
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
