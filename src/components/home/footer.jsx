import React from "react";

const Footer = () => {
  return (
    <div>
      {/* ========================= FOOTER ========================= */}
      <footer className="section-footer bg-secondary">
        <div className="container">
          <section className="footer-top padding-y-lg text-white">
            <div className="row">
              <aside className="col-md col-6">
                <h6 className="title">Thương hiệu</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">Casio</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Citizent</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Orient</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Seiko</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Cửa hàng</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">Về chúng tôi</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Lịch sử hình thành</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Tìm kiếm cửa hàng</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Quy tắc và điều khoản</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Hỗ trợ</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">Liên hệ chúng tôi</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Hoàn tiền</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Tình trạng đơn hàng</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Thông tin vận chuyển</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Tài khoản</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#"> Đăng nhập người dùng </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Đăng ký người dùng </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Thiết lập tài khoản </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Đơn hàng của tôi </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md">
                <h6 className="title">Xã hội</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-facebook" /> Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-twitter" /> Twitter{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-instagram" /> Instagram{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-youtube" /> Youtube{" "}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>{" "}
            {/* row.// */}
          </section>{" "}
          {/* footer-top.// */}
          <section className="footer-bottom text-center">
            <p className="text-white">
              Chính sách quyền riêng tư - Điều khoản sử dụng - Thông tin người
              dùng Hướng dẫn hỏi đáp pháp lý
            </p>
            <p className="text-muted">
              Chủ sở hữu Website: Ngô Gia Lộc - Số: 41A8034825 - Ngày Cấp:
              27/05/2014
            </p>
            <br />
          </section>
        </div>
        {/* //container */}
      </footer>
      {/* ========================= FOOTER END // ========================= */}
    </div>
  );
};

export default Footer;
