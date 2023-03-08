import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import requestService from "../../util/request-service";

const Register = () => {
  const registerForm = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    rePassword: "",
    userName: "",
  };
  const registerAddressForm = {
    country: "",
    hamlet: "",
    province: "",
    town: "",
    village: "",
  };
  const navigate = useNavigate();
  const [user, setUser] = useState(registerForm);
  const [error, setError] = useState("");
  const [address, setAddress] = useState(registerAddressForm);
  const handleChangeInput = (event) => {
    const newdata = { ...user };
    newdata[event.target.name] = event.target.value;
    setUser(newdata);
  };
  const handleChangeInputAddress = (event) => {
    const newdata = { ...address };
    newdata[event.target.name] = event.target.value;
    setAddress(newdata);
  };

  const onClickRegister = async (event) => {
    event.preventDefault();
    const _register = {
      address: address,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      phoneNumber: user.phoneNumber,
      rePassword: user.rePassword,
      userName: user.userName,
    };

    try {
      const response = await requestService.post(
        "/auth/sign-up",
        _register,
        1500
      );
      setUser(response.data);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.errorDetail);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setError(null), 2000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        {/* ============================ COMPONENT REGISTER   ================================= */}
        <div
          className="card mx-auto"
          style={{ maxWidth: "520px", marginTop: "40px" }}
        >
          <article className="card-body">
            <header className="mb-4">
              {error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : null}
              <h4 className="card-title">Đăng ký</h4>
            </header>
            <form onSubmit={onClickRegister}>
              <div className="form-group">
                <label>Tên người dùng</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên người dùng"
                  name={"userName"}
                  value={user.userName}
                  onChange={handleChangeInput}
                />
              </div>{" "}
              {/* form-group end.// */}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập địa chỉ email"
                  name={"email"}
                  value={user.email}
                  onChange={handleChangeInput}
                />
                <small className="form-text text-muted">
                  Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai
                  khác.
                </small>
              </div>{" "}
              {/*  */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Họ</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập họ"
                    name={"lastName"}
                    value={user.lastName}
                    onChange={handleChangeInput}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Tên</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập tên"
                    name={"firstName"}
                    value={user.firstName}
                    onChange={handleChangeInput}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>
              {/* form-group end.// */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Tạo mật khẩu</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Mật khẩu phải có ít nhất 6 ký tự"
                    name={"password"}
                    value={user.password}
                    onChange={handleChangeInput}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Lặp lại mật khẩu</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Lặp lại mật khẩu"
                    name={"rePassword"}
                    value={user.rePassword}
                    onChange={handleChangeInput}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Số điện thoại phải đúng 10 số"
                  name={"phoneNumber"}
                  value={user.phoneNumber}
                  onChange={handleChangeInput}
                />
              </div>{" "}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Quốc gia</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập quốc gia"
                    name={"country"}
                    value={address.country}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Tỉnh/Thành phố</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập tỉnh/thành phố"
                    name={"province"}
                    value={address.province}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Huyện/Quận</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập huyện/quận"
                    name={"town"}
                    value={address.town}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Xã/Phường</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập xã/phường"
                    name={"village"}
                    value={address.village}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Thôn/Đường</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập thôn/đường"
                    name="hamlet"
                    value={address.hamlet}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Đăng ký
                </button>
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                  />{" "}
                  <div className="custom-control-label">
                    {" "}
                    Tôi đồng ý với <a href="#">các điều khoản và điều kiện</a>
                  </div>{" "}
                </label>
              </div>{" "}
              {/* form-group end.// */}
            </form>
          </article>
          {/* card-body.// */}
        </div>{" "}
        {/* card .// */}
        <p className="text-center mt-4">
          Đã Có tài khoản ? <Link to="/login">Đăng nhập</Link>
        </p>
        <br />
        <br />
        {/* ============================ COMPONENT REGISTER  END.// ================================= */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Footer />
    </div>
  );
};

export default Register;
