import React from "react";
import Footer from "./footer";
import Header from "./header";

const Introduce = () => {
  return (
    <div>
      <Header />

      <section className="section-content bg-white padding-y">
        <div className="container">
          {/* ============================ ITEM DETAIL ======================== */}
          <div className="row">
            <main className="col-md-6">
              <article className="product-info-aside">
                <h2>Bạn có biết ?</h2>
                <p>
                  Được thành vào những ngày cuối cùng của năm 1999, B - Shop đã
                  tồn tại <br /> và phát triển đến ngày nay và đang dần vươn lên
                  trở thành 1 trong những <br /> chuỗi bán lẻ đồng hồ hàng đầu ở
                  Việt Nam.
                </p>
                <p>
                  Cùng với tiêu chí luôn đề cao những giá trị cao nhất cho khách
                  hàng, <br />B - Shop không chỉ mang đến những phiên bản đồng
                  hồ chính hãng <br />
                  với chất lượng tốt nhất, mà còn mang lại sự an tâm, tin cậy
                  dành cho <br />
                  Quý khách hàng.
                </p>
                <p>
                  Ông Ngô Gia Lộc – CEO của B - Shop tâm sự: “Chúng tôi không
                  kinh doanh <br /> đồng hồ đơn thuần mà chúng tôi chia sẻ niềm
                  đam mê và sáng tạo”. <br /> B - Shop sẽ là cầu nối của cộng
                  đồng yêu thích đồng hồ – nơi mà có thể <br /> mọi thành viên
                  có thể kết nối, gắn kết cùng 1 tình yêu – đó là đồng hồ.
                </p>
              </article>
            </main>{" "}
            <aside className="col-md-6">
              <img
                style={{ width: "550px", height: "400px" }}
                src="/assets/images/home/intro.png"
              />
            </aside>
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
          {/* ================ ITEM DETAIL END .// ================= */}
        </div>{" "}
        {/* container .//  */}
      </section>

      <Footer />
    </div>
  );
};

export default Introduce;
