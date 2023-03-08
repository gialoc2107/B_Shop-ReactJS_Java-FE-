import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart_content = () => {
  const { isEmpty, items, cartTotal, removeItem, updateItemQuantity } =
    useCart();

  return (
    <div>
      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card">
                {isEmpty ? (
                  <div style={{ color: "red" }} className="cart-empty">
                    Giỏ hàng của bạn đang trống!
                  </div>
                ) : (
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Sản phẩm</th>
                        <th scope="col" width={120}>
                          Số lượng
                        </th>
                        <th scope="col" width={120}>
                          Giá
                        </th>
                        <th scope="col" className="text-right" width={200}>
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <figure className="itemside">
                              <div className="aside">
                                <Link to={`/product/${product.id}`}>
                                  <img src={product.image} className="img-sm" />
                                </Link>
                              </div>
                              <figcaption className="info">
                                <Link
                                  to={`/product/${product.id}`}
                                  className="title mb-2"
                                >
                                  {product.name}
                                </Link>
                                <p className="text-muted small">
                                  Xuất xứ: {product.origin}, <br />
                                  Bảo hành: {product.insurance} <br />
                                  Thời gian giao hàng: {product.delivery_time}
                                </p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            <div className="buttons_added">
                              <input
                                className="minus is-form"
                                type="button"
                                defaultValue="-"
                                onClick={() =>
                                  updateItemQuantity(
                                    product.id,
                                    product.quantity - 1
                                  )
                                }
                              />
                              <span className="input-qty is-form">
                                <p style={{ marginTop: "7px" }}>
                                  {product.quantity}
                                </p>
                              </span>
                              <input
                                className="plus is-form"
                                type="button"
                                defaultValue="+"
                                onClick={() =>
                                  updateItemQuantity(
                                    product.id,
                                    product.quantity + 1
                                  )
                                }
                              />
                            </div>
                          </td>
                          <td>
                            <div className="price-wrap">
                              <var className="price">
                                {product.price.toLocaleString()}₫
                              </var>
                              <small className="text-muted">
                                {" "}
                                {product.price_discount.toLocaleString()}₫ chiếc{" "}
                              </small>
                            </div>{" "}
                            {/* price-wrap .// */}
                          </td>
                          <td className="text-right">
                            <a
                              data-original-title="Save to Wishlist"
                              href="#"
                              className="btn btn-light"
                              data-toggle="tooltip"
                            >
                              <i className="fa fa-heart" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-light"
                              onClick={() => removeItem(product.id)}
                            >
                              Xóa
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <div className="card-body border-top">
                  <a
                    href="/pay_cart"
                    className="btn btn-primary float-md-right"
                  >
                    {" "}
                    Thanh toán <i className="fa fa-chevron-right" />{" "}
                  </a>
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
                    <dd
                      style={{ color: "black", fontWeight: "bold" }}
                      className="text-right"
                    >
                      {" "}
                      {cartTotal.toLocaleString()}₫
                    </dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Chiết khấu:</dt>
                    <dd
                      style={{ color: "black", fontWeight: "bold" }}
                      className="text-right"
                    >
                      {" "}
                      0₫
                    </dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Tổng cộng:</dt>
                    <dd
                      style={{ color: "black", fontWeight: "bold" }}
                      className="text-right  h5"
                    >
                      <strong>{cartTotal.toLocaleString()}₫</strong>
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
    </div>
  );
};

export default Cart_content;
