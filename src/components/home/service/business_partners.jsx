import React from "react";
import Footer from "../footer";
import Header from "../header";

const Business_partners = () => {
  return (
    <div>
      <Header />

      <section className="section-content bg-white padding-y">
        <div className="container">
          <div className="section-heading heading-line">
            <h4
              style={{
                backgroundColor: "#fff",
                paddingLeft: "30px",
                paddingRight: "30px",
                marginLeft: "400px",
              }}
              className="title-section text-uppercase"
            >
              LIÊN HỆ KHÁCH HÀNG DOANH NGHIỆP & ĐỐI TÁC
            </h4>
          </div>
          {/* ============================ ITEM DETAIL ======================== */}
          <div className="row">
            <main className="col-md-6">
              <article className="product-info-aside">
                <p>
                  Bạn là một doanh nghiệp, bạn muốn tìm kiếm mua đồng hồ số
                  lượng lớn làm quà tặng cho nhân viên? Hay doanh nghiệp của bạn
                  muốn in logo/khắc laser logo công ty trên đồng hồ để làm quà
                  tặng cho nhân viên hoặc đối tác?
                </p>
                <p>
                  Chúc mừng bạn đã tìm đúng trang liên hệ dành riêng cho khách
                  hàng doanh nghiệp của B - Shop rồi đấy!
                </p>
                <p>
                  Tại đây chúng tôi sẽ hỗ trợ & giải đáp các thắc mắc về việc
                  đặt mua hàng số lượng lớn, các dịch vụ in/khắc logo làm quà
                  tặng, khách hàng mua sỉ, quà tặng đồng hồ,… một cách nhanh
                  nhất dành cho Quý khách hàng.
                </p>
                <p>
                  Liên hệ trực tiếp qua các kênh sau để nhận báo giá nhanh nhất:
                  <br />– Hotline đặt hàng: 1900 6777
                  <br /> – Email liên hệ: lienhe@bshop.com
                </p>
              </article>
            </main>{" "}
            <aside className="col-md-6">
              <img
                style={{ width: "550px", height: "400px", marginLeft: "130px" }}
                src="/assets/images/home/baner3.png"
              />
            </aside>
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
          {/* ================ ITEM DETAIL END .// ================= */}
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="section-heading heading-line">
              <h4
                style={{
                  backgroundColor: "#fff",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  marginLeft: "550px",
                }}
                className="title-section text-uppercase"
              >
                KHÁCH HÀNG TIÊU BIỂU
              </h4>
            </div>
            <img
              style={{ width: "100%" }}
              src="/assets/images/home/baner.png"
            />
          </div>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="section-heading heading-line">
              <h4
                style={{
                  backgroundColor: "#fff",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  marginLeft: "450px",
                }}
                className="title-section text-uppercase"
              >
                TẠI SAO NÊN MUA HÀNG TẠI B - SHOP
              </h4>
            </div>
            <img
              style={{ width: "100%" }}
              src="/assets/images/home/baner1.png"
            />
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>

      <Footer />
    </div>
  );
};

export default Business_partners;
