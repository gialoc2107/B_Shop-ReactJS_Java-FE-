import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import Cart_policy from "./cart_policy";

const Payment_success = () => {
  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card">
                <table
                  style={{ marginBottom: 0 }}
                  className="table table-borderless table-shopping-cart"
                >
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th
                        style={{ fontSize: "25px", color: "#75b975" }}
                        scope="col"
                      >
                        Thanh toán thành công...
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <div className="card-body border-top">
                  <a href="/" className="btn btn-light">
                    {" "}
                    <i className="fa fa-chevron-left" /> Tiếp tục mua sắm{" "}
                  </a>
                </div>
              </div>{" "}
              {/* card.// */}
              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck" /> Giao hàng miễn
                  phí trong vòng 1-2 tuần
                </p>
              </div>
            </main>{" "}
            {/* col.// */}
            <aside className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Nhập mã giảm giá (nếu có) ?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name
                          placeholder="Mã giảm giá"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Áp dụng</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* card .// */}
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Tổng giá:</dt>
                    <dd className="text-right"> ₫</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Chiết khấu:</dt>
                    <dd className="text-right"> ₫</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Tổng cộng:</dt>
                    <dd className="text-right  h5">
                      <strong>₫</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img src="assets/images/misc/payments.png" height={26} />
                  </p>
                </div>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* card .// */}
            </aside>{" "}
            {/* col.// */}
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Cart_policy />

      <Footer />
    </div>
  );
};

export default Payment_success;
