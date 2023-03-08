import React, { useState } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import useAuth from "../../services/check-login/useAuth";

const Header = () => {
  const [search, setSearch] = useState("");
  const productSearch = `http://localhost:8080/api/search?name=${search}`;
  const [products, setProducts] = useState([]);
  const isAuth = useAuth();
  const useName=localStorage.getItem("userName");

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

  const {totalUniqueItems}=useCart();

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
                      {isAuth?
                      <small className="text"> {useName} </small>
                      :<></>}
                    </Link>
                  </div>
                  
                  <div className="widget-header mr-3">
                    <a href="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-comment-dots" />
                        {/* <span className="notify">1</span> */}
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
                      <div className="icon-area" >
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
              {isAuth ? <></>
                :
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
                </>}
                
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
    </div>
  );
};

export default Header;
