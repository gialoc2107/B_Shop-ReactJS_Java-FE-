import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import Subscribe from "../home/subscribe";

const All_category = () => {
  const [category, setCategory] = useState([]);

  const getCategory = () =>
    axios.get("http://localhost:8080/api/category").then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container">
          <nav className="row">
            {category.slice(0, 8).map((category, id) => (
              <div className="col-md-3">
                <div className="card card-category">
                  <div className="img-wrap" style={{ height: "350px" }}>
                    <img style={{ width: "350px" }} src={category.image} />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link to={`../Listing_large/${category.id}`}>
                        {category.name}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </nav>{" "}
          {/* row.// */}
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Subscribe />

      <Footer />
    </div>
  );
};

export default All_category;
