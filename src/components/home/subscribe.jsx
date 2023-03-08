import React from "react";

const Subscribe = () => {
  return (
    <div>
      {/* ========================= SECTION SUBSCRIBE  ========================= */}
      <section className="section-subscribe padding-y-lg">
        <div className="container">
          <p className="pb-2 text-center text-white">
            Cung cấp các xu hướng sản phẩm mới nhất và tin tức ngành trực tiếp
            đến hộp thư đến của bạn
          </p>
          <div className="row justify-content-md-center">
            <div className="col-lg-5 col-md-6">
              <form className="form-row">
                <div className="col-md-8 col-7">
                  <input
                    className="form-control border-0"
                    placeholder="Email của bạn"
                    type="email"
                  />
                </div>{" "}
                {/* col.// */}
                <div className="col-md-4 col-5">
                  <button type="submit" className="btn btn-block btn-warning">
                    {" "}
                    <i className="fa fa-envelope" /> Đặt mua{" "}
                  </button>
                </div>{" "}
                {/* col.// */}
              </form>
              <small className="form-text text-white-50">
                Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên
                thứ ba.{" "}
              </small>
            </div>{" "}
            {/* col-md-6.// */}
          </div>
        </div>
      </section>
      {/* ========================= SECTION SUBSCRIBE END// ========================= */}
    </div>
  );
};

export default Subscribe;
