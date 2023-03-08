import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import requestService from "../../util/request-service";
import Footer from "../home/footer";
import Header from "../home/header";

const Pay_cart = () => {
  const { items, emptyCart } = useCart();
  const navigate = useNavigate();
  const orderRequestForm = {
    orderName: "",
    orderAddress: "",
    orderNumberPhone: "",
    note: "",
    deliveryTime: "IN_12H",
    payment: "CASH",
  };
  const [error, setError] = useState("");
  const [order, setOrder] = useState(orderRequestForm);

  const handleChangeInputOrder = (event) => {
    const newdata = { ...order };
    newdata[event.target.name] = event.target.value;
    setOrder(newdata);
  };

  const orderSubmit = async (e) => {
    e.preventDefault();
    const _order = {
      orderName: order.orderName,
      orderAddress: order.orderAddress,
      orderNumberPhone: order.orderNumberPhone,
      note: order.note,
      deliveryTime: order.deliveryTime,
      payment: order.payment,
      items: items.map((item) => {
        return { productId: item.id, quantity: item.quantity };
      }),
    };

    try {
      const response = await requestService.post("/order", _order, 1500);
      setOrder(response.data);
      emptyCart();
      navigate("/");
    } catch (err) {
      setError(err.response.data.errorDetail);
      console.log(error);
    }
    alert("Thanh toán thành công");
  };

  useEffect(() => {
    const timeout = setTimeout(() => setError(null), 2000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="card mb-4">
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : null}
            <div className="card-body">
              <h4 className="card-title mb-3">Thông tin đặt hàng</h4>
              <form onSubmit={orderSubmit}>
                <h6 className="card-title col-sm-6">Phương thức thanh toán</h6>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <label className="js-check box">
                      <input
                        type="radio"
                        name="payment"
                        value={"CASH"}
                        checked={order.payment === "CASH"}
                        onChange={handleChangeInputOrder}
                      />
                      <h6 className="title">Thanh toán bằng tiền mặt</h6>
                      <p className="text-muted">
                        Khi shipper giao hàng đến nơi, đưa tiền mặt cho shipper
                        để thanh toán
                      </p>
                    </label>{" "}
                    {/* js-check.// */}
                  </div>
                  <div className="form-group col-sm-6">
                    <label className="js-check box active">
                      <input
                        type="radio"
                        name="payment"
                        value={"ONLINE"}
                        checked={order.payment === "ONLINE"}
                        onChange={handleChangeInputOrder}
                      />
                      <h6 className="title">Thanh toán qua mạng</h6>
                      <p className="text-muted">
                        Thanh toán trực tuyến qua các app như MoMo,
                        VietInBank,...
                      </p>
                    </label>{" "}
                    {/* js-check.// */}
                  </div>
                </div>{" "}
                {/* form row.// */}
                <div className="form-row">
                  <div className="col form-group">
                    <label>Họ Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập họ và tên của người nhận hàng"
                      name="orderName"
                      value={order.orderName}
                      onChange={handleChangeInputOrder}
                    />
                  </div>{" "}
                  {/* form-group end.// */}
                  <div className="col form-group">
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập số điện thoại của người nhận"
                      name="orderNumberPhone"
                      value={order.orderNumberPhone}
                      onChange={handleChangeInputOrder}
                    />
                  </div>{" "}
                  {/* form-group end.// */}
                </div>{" "}
                {/* form-row end.// */}
                <div className="form-row">
                  <div className="col form-group">
                    <label>Địa chỉ nhận hàng</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập địa chỉ hiện tại của người nhận"
                      name="orderAddress"
                      value={order.orderAddress}
                      onChange={handleChangeInputOrder}
                    />
                  </div>{" "}
                  <div className="form-group col-md-6">
                    <label>Thời gian nhận hàng</label>
                    <select
                      className="form-control"
                      value={order.deliveryTime}
                      name={"deliveryTime"}
                      onChange={handleChangeInputOrder}
                    >
                      <option defaultChecked value={"IN_12H"}>
                        Trong vòng 12 giờ
                      </option>
                      <option value={"IN_1DAY"}>Trong vòng 1 ngày</option>
                      <option value={"IN_2DAY"}>Trong vòng 2 ngày</option>
                      <option value={"IN_3DAY"}>Trong vòng 3 ngày</option>
                      <option value={"IN_4DAY"}>Trong vòng 4 ngày</option>
                      <option value={"IN_5DAY"}>Trong vòng 5 ngày</option>
                    </select>
                  </div>
                  {/* form-group end.// */}
                </div>{" "}
                <div className="form-group">
                  <label>Chú thích</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    name="note"
                    value={order.note}
                    onChange={handleChangeInputOrder}
                  />
                </div>{" "}
                {/* form-group// */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Hoàn tất
                  </button>
                </div>
              </form>
            </div>{" "}
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Footer />
    </div>
  );
};

export default Pay_cart;
