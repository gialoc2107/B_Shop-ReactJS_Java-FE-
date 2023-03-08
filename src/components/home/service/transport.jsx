import React from "react";
import Footer from "../footer";
import Header from "../header";
import "../css/style.css";

const Transport = () => {
  return (
    <div>
      <Header />

      <section className="section-content bg-white padding-y">
        <div className="container">
          <img style={{ width: "100%" }} src="/assets/images/home/baner2.png" />
          <div className="trans_body">
            <p className="body_content">
              Nhằm nâng cao chất lượng dịch vụ. Công khai, rõ ràng tạo sự thuận
              lợi cho khách hàng trong quá trình mua các sản phẩm tại B - Shop.
              Chúng tôi xin đưa ra chính sách giao hàng và vận chuyển như sau:
            </p>
            <div
              style={{ marginTop: "40px" }}
              className="section-heading heading-line"
            >
              <h4 className="title-section text-uppercase trans">
                PHƯƠNG THỨC VẬN CHUYỂN VÀ GIAO HÀNG
              </h4>
            </div>
            {/* ------------------------------------------------------------------ */}
            <div>
              <h6 style={{ marginBottom: "15px" }}>
                1. Đối tượng và phạm vi vận chuyển
              </h6>
              <p>
                Chính sách giao nhận được áp dụng cho tất cả các khách hàng đặt
                hàng qua tất cả các kênh Online và Offline tại B - Shop
              </p>
              <p>
                B - Shop sẽ thực hiện tất cả các yêu cầu vận chuyển cho khách
                hàng trên phạm vi toàn quốc.
              </p>
              {/* ------------------------------------------------------------ */}
              <h6 style={{ marginBottom: "15px" }}>2. Phí giao hàng</h6>
              <p>
                Tất cả sản phẩm (là đồng hồ) đều được hưởng dịch vụ{" "}
                <strong>MIỄN PHÍ</strong> vận chuyển tiêu chuẩn, cho dù bạn ở
                đâu trên đất nước Việt Nam này.
              </p>
              <p>
                Đối với các sản phẩm còn lại không phải đồng hồ (dây da, trang
                sức, kính cường lực,…) được tính phí vận chuyển{" "}
                <strong> ĐỒNG GIÁ TOÀN QUỐC 30k.</strong>
              </p>
              {/* ------------------------------------------------------------ */}
              <h6 style={{ marginBottom: "15px" }}>3. Thời gian giao hàng</h6>
              <p>
                {" "}
                <strong>Đơn hàng nội thành TP.HCM:</strong>
              </p>
              <p>
                Nếu bạn là khách hàng mua sắm online thuộc TP. Hồ Chí Minh, Biên
                Hòa, Bình Dương, Vũng Tàu, Cần Thơ, được trải nghiệm thêm dịch
                vụ giao hàng siêu tốc trong 2 giờ (với mức phí được trao đổi
                trực tiếp với bộ phận CSKH). Bạn không phải chờ đợi quá lâu cho
                những sản phẩm sẽ thuộc về mình.
              </p>
              <p>
                {" "}
                <strong>Đơn hàng ở các tỉnh thành khác:</strong>
              </p>
              <p>
                Thời gian là 2-3 ngày đối với khu vực trung tâm tỉnh thành phố,
                3-7 ngày đối với khu vực ngoại thành, huyện, xã, thị trấn…(Không
                tính thứ bảy, chủ nhật hay các ngày lễ tết).
              </p>
              <p>
                Thời gian xử lý đơn hàng sẽ được tính từ khi nhận được thanh
                toán hoàn tất của quý khách.
              </p>
              <p>
                Có thể thay đổi thời gian giao hàng nếu khách hàng yêu cầu và B
                - Shop chủ động đổi trong trường hợp chịu ảnh hưởng của thiên
                tai hoặc các sự kiện đặc biệt khác.
              </p>
              <p>
                Để kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách,
                xin vui lòng inbox Fanpage (https://www.facebook.com/BShop) hoặc
                gọi số Hotline (1900 6777), cung cấp tên, số điện thoại để được
                kiểm tra.
              </p>
              <p>
                Khi hàng được giao đến quý khách, vui lòng ký xác nhận với nhân
                viên giao hàng và kiểm tra lại số lượng cũng như loại hàng hóa
                được giao có chính xác không. Xin quý khách vui lòng giữ lại
                biên lại vận chuyển và hóa đơn mua hàng để đối chiếu kiểm tra.
              </p>
              <p>Xin chân thành cảm ơn!</p>
            </div>
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>

      <Footer />
    </div>
  );
};

export default Transport;
