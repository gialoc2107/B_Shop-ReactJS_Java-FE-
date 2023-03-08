import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Main = () => {
  const [category, setCategory] = useState([]);

  const getCategory = () =>
    axios.get("http://localhost:8080/api/category").then((res) => {
      setCategory(res.data);
    });
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      {/* ========================= SECTION MAIN  ========================= */}
      <section className="section-main padding-y">
        <main className="card">
          <div className="card-body">
            <div className="row">
              <aside className="col-lg col-md-3 flex-lg-grow-0">
                <nav className="nav-home-aside">
                  <h6 className="title-category">
                    Danh mục <i className="d-md-none icon fa fa-chevron-down" />
                  </h6>
                  {category.map((category, id) => (
                    <ul key={id} className="menu-category">
                      <li>
                        <Link to={`../Listing_large/${category.id}`}>
                          {category.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </nav>
              </aside>{" "}
              {/* col.// */}
              <div className="col-md-9 col-xl-7 col-lg-7">
                {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                <div
                  id="carousel1_indicator"
                  className="slider-home-banner carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#carousel1_indicator" data-slide-to={1} />
                    <li data-target="#carousel1_indicator" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/images/banners/slider1.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/banners/slider2.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/banners/slider3.jpg"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
              </div>{" "}
              {/* col.// */}
              <div className="col-md d-none d-lg-block flex-grow-1">
                <aside className="special-home-right">
                  <h6 className="bg-blue text-center text-white mb-0 p-2">
                    Danh mục phổ biến
                  </h6>
                  {category.slice(0, 3).map((category, id) => (
                    <div key={id} className="card-banner border-bottom">
                      <div className="py-3" style={{ width: "80%" }}>
                        <h6 className="card-title">{category.name}</h6>
                        <Link
                          to={`../Listing_grid/${category.id}`}
                          className="btn btn-secondary btn-sm"
                        >
                          {" "}
                          Xem ngay{" "}
                        </Link>
                      </div>
                      <img
                        src={category.image}
                        height={80}
                        className="img-bg"
                      />
                    </div>
                  ))}
                </aside>
              </div>{" "}
              {/* col.// */}
            </div>{" "}
            {/* row.// */}
          </div>{" "}
          {/* card-body.// */}
        </main>{" "}
        {/* card.// */}
      </section>
      {/* ========================= SECTION MAIN END// ========================= */}
    </div>
  );
};

export default Main;
