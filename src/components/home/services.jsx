import React from "react";

const Services = () => {
  return (
    <div>
      {/* =============== SECTION SERVICES =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">DỊCH VỤ THƯƠNG MẠI</h4>
        </header>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <a href="../business_partners">
                <img src="assets/images/posts/1.jpg" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6 className="title">
                  <a href="../business_partners">Đối tác kinh doanh</a>{" "}
                </h6>
                <p className="small text-uppercase text-muted">
                  ĐỐI TÁC TIỀM NĂNG
                </p>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <a href="../pay">
                <img src="assets/images/posts/2.jpg" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6 className="title">
                  <a href="../pay">Thanh toán & Trả góp</a>
                </h6>
                <p className="small text-uppercase text-muted">
                  GIẢI PHÁP TÀI CHÍNH
                </p>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <a href="../rules">
                <img src="assets/images/posts/3.jpg" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6 className="title">
                  <a href="../rules">Điều khoản sử dụng</a>
                </h6>
                <p className="small text-uppercase text-muted">
                  ĐẢM BẢO THƯƠNG MẠI
                </p>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <a href="../transport">
                <img src="assets/images/posts/4.jpg" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6 className="title">
                  <a href="../transport">Vận chuyển & Giao Nhận</a>
                </h6>
                <p className="small text-uppercase text-muted">
                  DỊCH VỤ HẬU CẦN
                </p>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
      </section>
      {/* =============== SECTION SERVICES .//END =============== */}
    </div>
  );
};

export default Services;
