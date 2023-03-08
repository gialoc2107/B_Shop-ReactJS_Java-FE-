import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer_admin from "../footer_admin";
import Head from "../head";
import Navbar_admin from "../navbar_admin";
import Sidebar_admin from "../sidebar_admin";
import { Link, NavLink } from "react-router-dom";

const Order_crud = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const getAllOrder = () =>
    axios.create({
      baseURL: "http://localhost:8080/api/",
      timeout: 1000,
      headers: { Authorization: localStorage.getItem("token") },
    });
  const getAccountName = (accountName) => {
    if (accountName === "anonymousUser" || accountName == null) {
      return "Không có";
    } else {
      return accountName;
    }
  };

  useEffect(() => {
    getAllOrder()
      .get("/order")
      .then((response) => {
        setOrders(response.data);
        console.log(orders);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          setError("Bạn không có quyền truy cập đến tài nguyên này!");
        } else {
          setError(err.response.message);
        }
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Head />
      <div className="wrapper">
        <Navbar_admin />

        <Sidebar_admin />

        <div className="content-wrapper">
          <section className="content">
            <div className="py-4">
              <h3 style={{ fontWeight: "bold" }} className="mb-3 text-center">
                Quản Lý Đơn Hàng
              </h3>

              <table className="table border shadow">
                <thead className="thead-primary">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tên nguời đặt</th>
                    <th scope="col">Địa chỉ người đặt</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng tiền</th>

                    <th scope="col">Trạng thái</th>
                    <th scope="col">Ngày tạo đơn</th>
                    <th scope="col">Ngày cập nhật đơn</th>
                    <th>Chỉnh sửa</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 10).map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.orderName}</td>
                      <td>{item.orderAddress}</td>
                      <td>{item.orderNumberPhone}</td>
                      <td>{item.quantity}</td>
                      <td>{item.total.toLocaleString()}₫</td>

                      <td className="text-danger">{item.status}</td>
                      <td>{item.createdAt}</td>
                      <td>{item.updatedAt}</td>
                      <td>
                        <div
                          style={{
                            borderTop: 0,
                            paddingTop: 0,
                            paddingLeft: 0,
                          }}
                          className="text-center align-middle"
                        >
                          <div
                            style={{ fontSize: 18 }}
                            className="btn-group align-top"
                          >
                            <Link
                              className="btn btn-sm btn-outline-secondary badge"
                              to={`/edit_order/${item.id}`}
                            >
                              <i className="fa fa-edit"></i>
                            </Link>
                          </div>
                        </div>
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

export default Order_crud;
