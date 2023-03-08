import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer_admin from "../footer_admin";
import Head from "../head";
import Navbar_admin from "../navbar_admin";
import Sidebar_admin from "../sidebar_admin";

const Brand_crud = () => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    loadBrand();
  }, []);

  const loadBrand = async () => {
    const result = await axios.get("http://localhost:8080/api/brand");
    setBrand(result.data.reverse());
  };

  const deleteBrand = (brandId) => {
    axios
      .delete("http://localhost:8080/api/brand/" + brandId)
      .then((result) => {
        loadBrand();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };
  return (
    <div>
      <Head />
      <div className="wrapper">
        <Navbar_admin />

        <Sidebar_admin />

        <div className="content-wrapper">
          <section className="content">
            <div className="py-4">
              <h3 style={{ fontWeight: "bold" }} class="mb-3 text-center">
                Quản Lý Thương Hiệu
              </h3>
              <NavLink
                className="btn btn-outline-success"
                exact
                to="/add_brand"
              >
                Thêm mới
              </NavLink>
              <table class="table border shadow">
                <thead class="thead-primary">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tên Thương Hiệu</th>
                    <th scope="col">Hình Thương Hiệu</th>
                    <th scope="col">Đường dẫn</th>
                    <th scope="col">Ngày Tạo</th>
                    <th scope="col">Ngày Cập Nhật</th>
                    <th>Tính Năng</th>
                  </tr>
                </thead>
                <tbody>
                  {brand.slice(0, 10).map((brands, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{brands.name}</td>
                      <td>
                        <img src={brands.image} width="125" height="100" />
                      </td>
                      <td>{brands.slug}</td>
                      <td>{brands.created_on_utc}</td>
                      <td>{brands.update_on_utc}</td>
                      <td>
                        <td
                          style={{
                            borderTop: 0,
                            paddingTop: 0,
                            paddingLeft: 0,
                          }}
                          class="text-center align-middle"
                        >
                          <div
                            style={{ fontSize: 18 }}
                            class="btn-group align-top"
                          >
                            <Link
                              class="btn btn-sm btn-outline-secondary badge"
                              exact
                              to={`/edit_brand/${brands.id}`}
                            >
                              <i class="fa fa-edit"></i>
                            </Link>
                            <button
                              class="btn btn-sm btn-outline-secondary badge"
                              type="button"
                              onClick={() => deleteBrand(brands.id)}
                              href="#"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

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
            </div>
          </section>
        </div>

        <Footer_admin />

        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
      {/* ./wrapper */}
    </div>
  );
};

export default Brand_crud;
