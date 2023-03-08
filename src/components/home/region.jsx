import React from "react";

const Region = () => {
  return (
    <div>
      {/* =============== SECTION REGION =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">CHỌN KHU VỰC</h4>
        </header>
        <ul className="row mt-4">
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/CN.png"
              />{" "}
              <span>Trung Quốc</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/DE.png"
              />{" "}
              <span>Đức</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/AU.png"
              />{" "}
              <span>Úc</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/RU.png"
              />{" "}
              <span>Nga</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/IN.png"
              />{" "}
              <span>Ấn Độ</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/GB.png"
              />{" "}
              <span>Anh</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/TR.png"
              />{" "}
              <span>Thổ Nhĩ Kỳ</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <img
                className="icon-flag-sm"
                src="assets/images/icons/flags/UZ.png"
              />{" "}
              <span>Udơbêkixtan</span>{" "}
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              {" "}
              <i className="mr-3 fa fa-ellipsis-h" /> <span>Các nước khác</span>{" "}
            </a>
          </li>
        </ul>
      </section>
      {/* =============== SECTION REGION .//END =============== */}
    </div>
  );
};

export default Region;
