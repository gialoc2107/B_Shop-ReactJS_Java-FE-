import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer_admin from "../footer_admin";
import Head from "../head";
import Navbar_admin from "../navbar_admin";
import Sidebar_admin from "../sidebar_admin";

const Add_cate = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [slug, setSlug] = useState("");
  const [created_on_utc, setCreated_on_utc] = useState("");
  const [update_on_utc, setUpdate_on_utc] = useState("");

  const postData = () => {
    axios.post(`http://localhost:8080/api/category`, {
      name,
      image,
      slug,
      created_on_utc,
      update_on_utc,
    });
    alert("Thêm danh mục thành công");
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
                Thêm Danh Mục Mới
              </h3>
            </div>
          </section>

          <div class="modal-body">
            <div class="py-1">
              <form>
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Tên danh mục</label>
                          <input
                            class="form-control"
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Hình danh mục</label> <br />
                          <input
                            type="file"
                            name="image"
                            multiple
                            onChange={(e) =>
                              setImage(
                                e.target.value.replace(
                                  "C:\\fakepath\\",
                                  "/assets/images/home/"
                                )
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Đường dẫn</label>
                          <input
                            class="form-control"
                            type="text"
                            name="slug"
                            onChange={(e) => setSlug(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Ngày tạo</label>
                          <input
                            class="form-control"
                            type="text"
                            name="created_on_utc"
                            onChange={(e) => setCreated_on_utc(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Ngày cập nhật</label>
                          <input
                            class="form-control"
                            type="text"
                            name="update_on_utc"
                            onChange={(e) => setUpdate_on_utc(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <Link
                    class="btn btn-primary"
                    style={{ marginLeft: "8px" }}
                    type="submit"
                    to={"/category_crud"}
                  >
                    Trở về
                  </Link>
                  <div class="col d-flex justify-content-end">
                    <Link
                      class="btn btn-primary"
                      type="submit"
                      onClick={() => postData()}
                      to={"/category_crud"}
                    >
                      Thêm danh mục
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer_admin />

        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    </div>
  );
};

export default Add_cate;
