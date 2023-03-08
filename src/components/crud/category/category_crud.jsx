import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer_admin from "../footer_admin";
import Head from "../head";
import Navbar_admin from "../navbar_admin";
import Sidebar_admin from "../sidebar_admin";

const Category_crud = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get("http://localhost:8080/api/category");
    setCategory(result.data.reverse());
  };

  const deleteCategory = (categoryId) => {
    axios
      .delete("http://localhost:8080/api/category/" + categoryId)
      .then((result) => {
        loadCategory();
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
                Quản Lý Danh Mục
              </h3>
              <NavLink className="btn btn-outline-success" exact to="/add_cate">
                Thêm mới
              </NavLink>
              <table class="table border shadow">
                <thead class="thead-primary">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tên Danh Mục</th>
                    <th scope="col">Hình Danh Mục</th>
                    <th scope="col">Đường dẫn</th>
                    <th scope="col">Ngày Tạo</th>
                    <th scope="col">Ngày Cập Nhật</th>
                    <th>Tính Năng</th>
                  </tr>
                </thead>
                <tbody>
                  {category.slice(0, 10).map((cate, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{cate.name}</td>
                      <td>
                        <img src={cate.image} width="125" height="100" />
                      </td>
                      <td>{cate.slug}</td>
                      <td>{cate.created_on_utc}</td>
                      <td>{cate.update_on_utc}</td>
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
                              to={`/edit_cate/${cate.id}`}
                            >
                              <i class="fa fa-edit"></i>
                            </Link>
                            <button
                              class="btn btn-sm btn-outline-secondary badge"
                              type="button"
                              onClick={() => deleteCategory(cate.id)}
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

export default Category_crud;
