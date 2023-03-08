import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import {login} from "../../redux/thunks/auth-thunks";
import { useDispatch, useSelector } from 'react-redux'
import { loginFailure } from "../../redux/actions/auth-actions";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let error = useSelector((state) => state.auth.error);

  const onClickSignIn = (event) => {
      event.preventDefault();
      const userData = { email, password }
      dispatch(login(userData, navigate));
      setPassword("");
  };
  useEffect(() => {
      const timeout = setTimeout(() => dispatch(loginFailure(null)), 2000);
      return () => clearTimeout(timeout);
  }, [error]);

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section
        className="section-conten padding-y"
        style={{ minHeight: "84vh" }}
      >
        {/* ============================ COMPONENT LOGIN   ================================= */}
        <div
          className="card mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
          {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            <h4 className="card-title mb-4">Đăng nhập</h4>
            <form onSubmit={onClickSignIn}>
              <a
                href="https://vi-vn.facebook.com/"
                className="btn btn-facebook btn-block mb-2"
              >
                {" "}
                <i className="fab fa-facebook-f" /> &nbsp; Đăng nhập bằng
                Facebook
              </a>
              <a
                href="https://accounts.google.com/"
                className="btn btn-google btn-block mb-4"
              >
                {" "}
                <i className="fab fa-google" /> &nbsp; Đăng nhập bằng Google
              </a>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Địa chỉ email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                <a href="#" className="float-right">
                  Quên mật khẩu ?
                </a>
                <label className="float-left custom-control custom-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                  />{" "}
                  <div className="custom-control-label"> Lưu lại </div>{" "}
                </label>
              </div>{" "}
              {/* form-group form-check .// */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Đăng nhập
                </button>
              </div>{" "}
              {/* form-group// */}
            </form>
          </div>{" "}
          {/* card-body.// */}
        </div>{" "}
        {/* card .// */}
        <p className="text-center mt-4">
          Không có tài khoản ?{" "}
          <Link to="/register">
            Đăng ký
          </Link>
        </p>
        <br />
        <br />
        {/* ============================ COMPONENT LOGIN  END.// ================================= */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Footer />
    </div>
  );
};

export default Login;
