import React, { useEffect, useState } from "react";
import Header from "../home/header";
import Subcribe from "../home/subscribe";
import Footer from "../home/footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

const Product_detail = () => {
  const { id } = useParams();

  const [imgdetail, setimgDetail] = useState(null);

  const [product, setProduct] = useState({});

  const [amount, setAmount] = useState(1);

  const getProducts = () =>
    axios.get(`http://localhost:8080/api/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  useEffect(() => {
    getProducts();
  }, []);

  const handleQuantity = (event) => {
    setAmount(event.target.value);
  };

  const buttonPlus = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };
  const buttonMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const { addItem } = useCart();

  const onSuccess = (product) => {
    alert("Thêm vào giỏ hàng thành công!");
    addItem(product, amount);
  };

  return (
    <div>
      <Header />

      <section className="py-3 bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Trang chủ</Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Sản phẩm</a>
            </li>
          </ol>
        </div>
      </section>
      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content bg-white padding-y">
        <div className="container">
          {/* ============================ ITEM DETAIL ======================== */}
          <div className="row">
            <aside className="col-md-6">
              <div className="card">
                <article className="gallery-wrap">
                  <div className="img-big-wrap">
                    <div>
                      {" "}
                      <a href="#">
                        <img
                          src={imgdetail === null ? product?.image : imgdetail}
                        />
                      </a>
                    </div>
                  </div>{" "}
                  {/* slider-product.// */}
                  <div className="thumbs-wrap">
                    <div
                      onClick={() => setimgDetail(product?.img1)}
                      className="item-thumb"
                    >
                      {" "}
                      <img src={product?.img1} />
                    </div>
                    <div
                      onClick={() => setimgDetail(product?.img2)}
                      className="item-thumb"
                    >
                      {" "}
                      <img src={product?.img2} alt="hinh" />
                    </div>
                    <div
                      onClick={() => setimgDetail(product?.img3)}
                      className="item-thumb"
                    >
                      {" "}
                      <img src={product?.img3} />
                    </div>
                    <div
                      onClick={() => setimgDetail(product?.img4)}
                      className="item-thumb"
                    >
                      {" "}
                      <img src={product?.img4} />
                    </div>
                  </div>{" "}
                  {/* slider-nav.// */}
                </article>{" "}
                {/* gallery-wrap .end// */}
              </div>{" "}
              {/* card.// */}
            </aside>
            <main className="col-md-6">
              <article className="product-info-aside">
                <h2 className="title mt-3">{product.name}</h2>
                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li style={{ width: "80%" }} className="stars-active">
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <small className="label-rating text-muted">
                    {product.reviews}
                  </small>
                  <small className="label-rating text-success">
                    {" "}
                    <i className="fa fa-clipboard-check" />{" "}
                    {product.article_number} đơn đặt hàng
                  </small>
                </div>{" "}
                {/* rating-wrap.// */}
                <div className="mb-3">
                  <var className="price h4">
                    {product.price?.toLocaleString()}₫
                  </var>{" "}
                  <span className="text-muted">
                    {product.price_discount?.toLocaleString()}₫ incl. VAT
                  </span>
                </div>{" "}
                {/* price-detail-wrap .// */}
                <p>{product.short_description}</p>
                <dl className="row">
                  <dt className="col-sm-3">Nhà sản xuất</dt>
                  <dd className="col-sm-9">
                    <a href="#">{product.manufacturer}</a>
                  </dd>
                  <dt className="col-sm-3">Số bài viết</dt>
                  <dd className="col-sm-9">{product.article_number}</dd>
                  <dt className="col-sm-3">Bảo hành</dt>
                  <dd className="col-sm-9">{product.insurance}</dd>
                  <dt className="col-sm-3">Thời gian giao hàng</dt>
                  <dd className="col-sm-9">{product.delivery_time}</dd>
                  <dt className="col-sm-3">Tình trạng</dt>
                  <dd className="col-sm-9">{product.availabilty}</dd>
                </dl>
                <div className="form-row  mt-4">
                  <div className="form-group col-md flex-grow-0">
                    <div className="buttons_added">
                      <div className="input-group-prepend">
                        <button className="btn btn-light" onClick={buttonMinus}>
                          -
                        </button>
                      </div>
                      <input
                        className="form-control"
                        type="button"
                        value={amount}
                        onChange={handleQuantity}
                      />
                      <div className="input-group-prepend">
                        <button className="btn btn-light" onClick={buttonPlus}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  {/* col.// */}
                  <div className="form-group col-md">
                    <span
                      onClick={() => onSuccess(product)}
                      className="btn btn-primary"
                    >
                      <i
                        style={{ marginRight: "5px" }}
                        className="fas fa-shopping-cart"
                      />{" "}
                      Thêm vào giỏ hàng
                    </span>

                    <a
                      style={{ marginLeft: "10px" }}
                      href="#"
                      className="btn btn-light"
                    >
                      <i className="fas fa-envelope" />{" "}
                      <span className="text">Liên hệ với nhà cung cấp</span>
                    </a>
                  </div>{" "}
                  {/* col.// */}
                </div>{" "}
                {/* row.// */}
              </article>
            </main>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
          {/* ================ ITEM DETAIL END .// ================= */}
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      {/* ========================= SECTION  ========================= */}
      <section className="section-name padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h5 className="title-description">Mô tả</h5>
              <p>{product.full_description}</p>
              <h5 className="title-description">Thông số kỹ thuật</h5>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th colSpan={2}>Thông tin cơ bản</th>
                  </tr>
                  <tr>
                    <td>Thương hiệu</td>
                    <td>{product.trademark}</td>
                  </tr>
                  <tr>
                    <td>Số hiệu sản phẩm</td>
                    <td>{product.product_number}</td>
                  </tr>
                  <tr>
                    <td>Xuất xứ</td>
                    <td>{product.origin}</td>
                  </tr>
                  <tr>
                    <td>Máy</td>
                    <td>{product.machine}</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Kích Thước</th>
                  </tr>
                  <tr>
                    <td>Bề dày mặt số</td>
                    <td>{product.dial_thickness}</td>
                  </tr>
                  <tr>
                    <td>Đường kính mặt số</td>
                    <td>{product.dial_diameter}</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Chất liệu</th>
                  </tr>
                  <tr>
                    <td>Kính</td>
                    <td>{product.glasses}</td>
                  </tr>
                  <tr>
                    <td>Dây đeo</td>
                    <td>{product.strap}</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Tính năng</th>
                  </tr>
                  <tr>
                    <td>Chống nước</td>
                    <td>{product.waterproof} ATM</td>
                  </tr>
                  <tr>
                    <td>Đặc biệt</td>
                    <td>{product.especially}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* col.// */}
            <aside className="col-md-4">
              <div className="box">
                <h5 className="title-description">Thông tin</h5>
                <p>
                  Người ta vẫn thường nói “thời gian là vĩnh cữu”, mọi thứ trên
                  thế giới này có thể bị lụi tàn hoặc thụt lùi, nhưng thời gian
                  sẽ không bao giờ phai mờ. Chính vì thế, hãy trân trọng thời
                  gian của mình đang có với một chiếc đồng hồ chính hãng (vật
                  dùng để kiểm soát thời gian).
                </p>
                <h5 className="title-description">Tin tức</h5> <br />
                <article className="media mb-3">
                  <a href="#">
                    <img className="img-sm mr-3" src={product.image} />
                  </a>
                  <div className="media-body">
                    <h6 className="mt-0">
                      <a href="#">{product.name}</a>
                    </h6>
                    <p className="mb-2">{product.short_description}</p>
                  </div>
                </article>
              </div>{" "}
              {/* box.// */}
            </aside>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Subcribe />

      <Footer />
    </div>
  );
};

export default Product_detail;
