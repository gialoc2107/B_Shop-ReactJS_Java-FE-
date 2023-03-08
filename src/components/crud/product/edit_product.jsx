import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Head from "../head";
import Navbar_admin from "../navbar_admin";
import Sidebar_admin from "../sidebar_admin";
import Footer_admin from "../footer_admin";

const Edit_Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  console.log(id);

  const getProducts = () =>
    axios.get(`http://localhost:8080/api/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  useEffect(() => {
    getProducts();
  }, []);

  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [short_description, setShort_description] = useState("");
  const [trademark, setTrademark] = useState("");
  const [cate, setCate] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [insurance, setInsurance] = useState("");

  function updateProduct(id) {
    axios.put(`http://localhost:8080/api/products/${id}`, {
      name,
      image,
      short_description,
      trademark,
      cate,
      origin,
      price,
      discount,
      insurance,
    });
    alert("Chỉnh sửa sản phẩm thành công");
  }

  const [brand, setBrand] = useState([]);

  const getBrand = () =>
    axios.get("http://localhost:8080/api/brand").then((res) => {
      console.log(res.data);
      setBrand(res.data);
    });
  useEffect(() => {
    getBrand();
  }, []);

  const [category, setCategory] = useState([]);
  const getCategory = () =>
    axios.get("http://localhost:8080/api/category").then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  useEffect(() => {
    getCategory();
  }, []);

  const handleCKEditorState = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    setShort_description(data);
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
                Chỉnh Sửa Sản Phẩm
              </h3>
            </div>
          </section>

          <div class="modal-body">
            <div class="py-1">
              <form class="form" novalidate="">
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Tên sản phẩm</label>
                          <input
                            class="form-control"
                            type="text"
                            name="name"
                            defaultValue={product.name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Hình sản phẩm</label> <br />
                          <br />
                          <input
                            type="file"
                            multiple
                            name="image"
                            defaultValue={product.image}
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
                          <label>Mô tả</label>
                          <CKEditor
                            editor={ClassicEditor}
                            data={product.short_description}
                            onChange={handleCKEditorState}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Thương hiệu</label>
                          <select
                            class="form-control"
                            type="text"
                            name="trademark"
                            defaultValue={product.trademark}
                            onChange={(e) => setTrademark(e.target.value)}
                          >
                            {brand.map((brand) => (
                              <option>{brand.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Danh mục</label>
                          <select
                            class="form-control"
                            type="text"
                            name="cate"
                            defaultValue={product.cate}
                            onChange={(e) => setCate(e.target.value)}
                          >
                            {category.map((category) => (
                              <option>{category.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Xuất xứ</label>
                          <input
                            class="form-control"
                            type="text"
                            name="origin"
                            defaultValue={product.origin}
                            onChange={(e) => setOrigin(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Giá gốc</label>
                          <input
                            class="form-control"
                            type="text"
                            name="price"
                            defaultValue={product.price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Giảm giá</label>
                          <select
                            className="custom-select form-control"
                            name="discount"
                            onChange={(e) =>
                              setDiscount(parseInt(e.target.value))
                            }
                          >
                            <option>0%</option>
                            <option>25%</option>
                            <option>50%</option>
                            <option>75%</option>
                            <option>100%</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Bảo hành</label>
                          <select
                            className="custom-select form-control"
                            name="insurance"
                            onChange={(e) => setInsurance(e.target.value)}
                          >
                            <option>1 năm</option>
                            <option>2 năm</option>
                            <option>3 năm</option>
                            <option>4 năm</option>
                            <option>5 năm</option>
                          </select>
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
                    to={"/product_crud"}
                  >
                    Trở về
                  </Link>
                  <div class="col d-flex justify-content-end">
                    <Link
                      class="btn btn-primary"
                      type="submit"
                      onClick={() => updateProduct(id)}
                      to={"/product_crud"}
                    >
                      Lưu thay đổi
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
      {/* ./wrapper */}
    </div>
  );
};

export default Edit_Product;
