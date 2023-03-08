import React from "react";

const Request = () => {
  return (
    <div>
      {/* =============== SECTION REQUEST =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">YÊU CẦU BÁO GIÁ</h4>
        </header>
        <div className="row">
          <div className="col-md-8">
            <div
              className="card-banner banner-quote overlay-gradient"
              style={{
                backgroundImage: 'url("assets/images/banners/banner9.jpg")',
              }}
            >
              <div className="card-img-overlay white">
                <h3 className="card-title">
                  Một cách dễ dàng để gửi yêu cầu đến nhà cung cấp
                </h3>
                <p className="card-text" style={{ maxWidth: "400px" }}>
                  Liên hệ trực tiếp qua các kênh để nhận báo giá nhanh nhất:
                  <br />
                  – Hotline đặt hàng: 1900 6777 <br />– Email liên hệ:
                  lienhe@bshop.com
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>{" "}
          {/* col // */}
          <div className="col-md-4">
            <div className="card card-body">
              <h4 className="title py-3">Một yêu cầu, nhiều trích dẫn</h4>
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Bạn đang tìm kiếm cái gì ?"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Số lượng"
                      type="text"
                    />
                    <select className="custom-select form-control">
                      <option>Chiếc</option>
                      <option>Cặp</option>
                    </select>
                  </div>
                </div>
                <div className="form-group text-muted">
                  <p>Chọn loại mẫu:</p>
                  <label className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="option1"
                    />
                    <span className="form-check-label">Yêu cầu giá</span>
                  </label>
                  <label className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="option2"
                    />
                    <span className="form-check-label">
                      Yêu cầu mô tả
                    </span>
                  </label>
                </div>
                <div className="form-group">
                  <button className="btn btn-warning">Yêu cầu báo giá</button>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* col // */}
        </div>{" "}
        {/* row // */}
      </section>
      {/* =============== SECTION REQUEST .//END =============== */}
    </div>
  );
};

export default Request;
