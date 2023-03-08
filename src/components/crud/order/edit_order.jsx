import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Head from "../head";
import Navbar_admin from "../navbar_admin";
import Sidebar_admin from "../sidebar_admin";
import Footer_admin from "../footer_admin";
import requestService from "../../../util/request-service";

const Edit_Order = () => {
  const { id } = useParams();

  const [orderDetail, setOrderDetail] = useState({});
  const [error, setError] = useState("");

  const getOrderDetail = () =>
    axios.create({
      baseURL: "http://localhost:8080/api/",
      timeout: 1000,
      headers: { Authorization: localStorage.getItem("token") },
    });

  useEffect(() => {
    getOrderDetail()
      .get("/order/detail/" + id)
      .then((response) => {
        setOrderDetail(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          setError("Bạn không có quyền truy cập đến tài nguyên này!");
        } else {
          setError(err.response.message);
        }
        console.log(error);
      });
  }, [id]);
  const { order, orderItems } = orderDetail;

  const [statusRequest, setStatusRequest] = useState({
    status: "processing",
    note: "",
  });
  const handleChangeInputOrderStatus = (event) => {
    const newdata = { ...statusRequest };
    newdata[event.target.name] = event.target.value;
    setStatusRequest(newdata);
  };
  const updateOrderSubmit = async (event) => {
    event.preventDefault();
    const _request = {
      status: statusRequest.status,
      note: statusRequest.note,
    };
    try {
      const response = await requestService.put("/order/" + id, _request, 1500);
      console.log(response.data);
    } catch (err) {
      setError(err.response.data.errorDetail);
      console.log(error);
    }
    alert("Chỉnh sửa đơn hàng thành công");
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
              <h3 style={{ fontWeight: "bold" }} className="mb-3 text-center">
                Chỉnh Sửa Đơn Hàng
              </h3>
            </div>
          </section>

          <div className="modal-body">
            <div className="py-1">
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <h4 className="text-info">Thông tin đặt hàng</h4>
                    <hr />
                    <div className="form-group">
                      <label>Tên người đặt hàng</label>
                      <br />
                      <input
                        style={{ width: "300px" }}
                        className="fst-italic"
                        defaultValue={order?.orderName}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label>Địa chỉ nhận hàng</label>
                      <br />
                      <input
                        style={{ width: "300px" }}
                        className="fst-italic"
                        defaultValue={order?.orderAddress}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label>Số điện thoại người nhận</label>
                      <br />
                      <input
                        style={{ width: "300px" }}
                        className="fst-italic"
                        defaultValue={order?.orderNumberPhone}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label>Phương thức thanh toán</label>
                      <br />
                      <input
                        style={{ width: "300px" }}
                        className="fst-italic"
                        defaultValue={order?.payment}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label>Thời gian vận chuyển</label>
                      <br />
                      <input
                        style={{ width: "300px" }}
                        className="fst-italic"
                        defaultValue={order?.deliveryTime}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label>Ghi chú</label>
                      <br />
                      <input
                        style={{ width: "300px" }}
                        className="fst-italic"
                        defaultValue={order?.note}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label>Trạng thái đơn hàng</label>
                      <br />
                      <input
                        style={{ width: "300px" }}
                        className="fst-italic"
                        defaultValue={order?.status}
                        disabled
                      />
                    </div>
                  </div>
                  {/* col */}

                  <div className="col">
                    <h4 className="text-info">Chi tiết đơn hàng</h4>
                    <hr />
                    {orderItems?.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="col form-group">
                          <label>Tên sản phẩm</label>
                          <br />
                          <input
                            className="col fst-italic"
                            defaultValue={item.productName}
                            disabled
                          />
                        </div>
                        <div className="col form-group">
                          <label>Số lượng sản phẩm</label>
                          <br />
                          <input
                            className="col fst-italic"
                            defaultValue={item.totalQuantity}
                            disabled
                          />
                        </div>
                        <div className="col form-group">
                          <label>Giảm giá</label>
                          <br />
                          <input
                            className="col fst-italic"
                            defaultValue={item.discount + "%"}
                            disabled
                          />
                        </div>
                        <div className="col form-group">
                          <label>Tổng tiền</label>
                          <br />
                          <input
                            className="col fst-italic"
                            defaultValue={item.totalPrice.toLocaleString()}
                            disabled
                          />
                        </div>
                        <hr className="btn-info" />
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="col-4">
                    <h4 className="text-info">Cập nhật</h4>
                    <hr />
                    <form onSubmit={updateOrderSubmit}>
                      <div className="form-group">
                        <label>Chú thích</label>
                        <textarea
                          className="form-control"
                          rows={2}
                          value={statusRequest.note}
                          name="note"
                          onChange={handleChangeInputOrderStatus}
                        />
                      </div>

                      <div className="form-group">
                        <label>Trạng thái</label>
                        <select
                          className="form-control"
                          value={statusRequest.status}
                          name={"status"}
                          onChange={handleChangeInputOrderStatus}
                        >
                          <option defaultChecked value={"processing"}>
                            Xử lý
                          </option>
                          <option value={"completed"}>Hoàn thành</option>
                          <option value={"cancelled"}>Hủy bỏ</option>
                        </select>
                      </div>
                      <div className="row">
                        <Link
                          className="btn btn-primary"
                          style={{ marginLeft: "8px" }}
                          type="submit"
                          to={"/order_crud"}
                        >
                          Trở về
                        </Link>
                        <div className="col d-flex justify-content-end">
                          <button className="btn btn-primary">
                            Lưu thay đổi
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* col */}
                </div>
                {/* row */}
              </div>
              {/* container-fluid */}
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

export default Edit_Order;
