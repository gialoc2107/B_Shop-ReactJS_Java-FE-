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
              <h4 className="card-title">????ng k??</h4>
            </header>
            <form onSubmit={onClickRegister}>
              <div className="form-group">
                <label>T??n ng?????i d??ng</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nh???p t??n ng?????i d??ng"
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
                  placeholder="Nh???p ?????a ch??? email"
                  name={"email"}
                  value={user.email}
                  onChange={handleChangeInput}
                />
                <small className="form-text text-muted">
                  Ch??ng t??i s??? kh??ng bao gi??? chia s??? email c???a b???n v???i b???t k??? ai
                  kh??c.
                </small>
              </div>{" "}
              {/*  */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>H???</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nh???p h???"
                    name={"lastName"}
                    value={user.lastName}
                    onChange={handleChangeInput}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>T??n</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nh???p t??n"
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
                  <label>T???o m???t kh???u</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="M???t kh???u ph???i c?? ??t nh???t 6 k?? t???"
                    name={"password"}
                    value={user.password}
                    onChange={handleChangeInput}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>L???p l???i m???t kh???u</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="L???p l???i m???t kh???u"
                    name={"rePassword"}
                    value={user.rePassword}
                    onChange={handleChangeInput}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>
              <div className="form-group">
                <label>S??? ??i???n tho???i</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="S??? ??i???n tho???i ph???i ????ng 10 s???"
                  name={"phoneNumber"}
                  value={user.phoneNumber}
                  onChange={handleChangeInput}
                />
              </div>{" "}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Qu???c gia</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nh???p qu???c gia"
                    name={"country"}
                    value={address.country}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>T???nh/Th??nh ph???</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nh???p t???nh/th??nh ph???"
                    name={"province"}
                    value={address.province}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Huy???n/Qu???n</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nh???p huy???n/qu???n"
                    name={"town"}
                    value={address.town}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>X??/Ph?????ng</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nh???p x??/ph?????ng"
                    name={"village"}
                    value={address.village}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Th??n/???????ng</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nh???p th??n/???????ng"
                    name="hamlet"
                    value={address.hamlet}
                    onChange={handleChangeInputAddress}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  ????ng k??
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
                    T??i ?????ng ?? v???i <a href="#">c??c ??i???u kho???n v?? ??i???u ki???n</a>
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
          ???? C?? t??i kho???n ? <Link to="/login">????ng nh???p</Link>
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
