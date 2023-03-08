import React from "react";
import { useState } from "react";
import Body from "./body";
import Footer_admin from "./footer_admin";
import Head from "./head";
import Navbar_admin from "./navbar_admin";
import Sidebar_admin from "./sidebar_admin";
import { useEffect } from "react";
import axios from "axios";

const Administration = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const getAllOrder = () =>
    axios.create({
      baseURL: "http://localhost:8080/api/",
      timeout: 1000,
      headers: { Authorization: localStorage.getItem("token") },
    });

  useEffect(() => {
    getAllOrder()
      .get("/order")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          setError("Bạn không có quyền truy cập đến tài nguyên này!");
        } else {
          setError(err.response.message);
        }
        console.log(orders);
      });
  }, []);
  const totalOrder = orders.length;
  console.log(totalOrder);

  return (
    <div>
      <Head />
      <div className="wrapper">
        <Navbar_admin />

        <Sidebar_admin />

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Bảng điều khiển</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Quản trị</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Bảng điều khiển 1
                    </li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{totalOrder}</h3>
                      <p>Đơn hàng</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="../order_crud" className="small-box-footer">
                      Thêm thông tin <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>
                        53<sup style={{ fontSize: "20px" }}>%</sup>
                      </h3>
                      <p>Tỷ lệ thoát</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Thêm thông tin <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>44</h3>
                      <p>Đăng ký người dùng</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Thêm thông tin <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>65</h3>
                      <p>Số lượng khách truy cập</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Thêm thông tin <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Đồ thị
                      </h3>
                      <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#revenue-chart"
                              data-toggle="tab"
                            >
                              Dạng sóng
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#sales-chart"
                              data-toggle="tab"
                            >
                              Dạng tròn
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                        {/* Morris chart - Sales */}
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{
                            position: "relative",
                            height: "300px",
                          }}
                        >
                          <img
                            style={{
                              width: "680px",
                              height: "300px",
                            }}
                            src="/assets/images/home/ad1.png"
                            alt=""
                          />
                        </div>

                        <div
                          className="chart tab-pane"
                          id="sales-chart"
                          style={{ position: "relative", height: "300px" }}
                        >
                          <canvas
                            id="sales-chart-canvas"
                            height={300}
                            style={{ height: "300px" }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  {/* DIRECT CHAT */}
                  <div className="card direct-chat direct-chat-primary">
                    <div className="card-header">
                      <h3 className="card-title">Trò chuyện trực tiếp</h3>
                      <div className="card-tools">
                        <span
                          title="3 New Messages"
                          className="badge badge-primary"
                        >
                          3
                        </span>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          title="Contacts"
                          data-widget="chat-pane-toggle"
                        >
                          <i className="fas fa-comments" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      {/* Conversations are loaded here */}
                      <div className="direct-chat-messages">
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">
                              Alexander Pierce
                            </span>
                            <span className="direct-chat-timestamp float-right">
                              23 tháng 1 2:00 chiều
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/assets/dist/img/user1-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Mẫu này có thực sự miễn phí không? Thật không thể
                            tin được!
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">
                              Sarah Bullock
                            </span>
                            <span className="direct-chat-timestamp float-left">
                              23 tháng 1 2:05 chiều
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/assets/dist/img/user3-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Tốt hơn bạn nên tin vào điều đó!
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">
                              Alexander Pierce
                            </span>
                            <span className="direct-chat-timestamp float-right">
                              23 tháng 1 5:37 chiều
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/assets/dist/img/user1-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Làm việc với B - Shop trên một ứng dụng mới tuyệt
                            vời! Muốn tham gia?
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">
                              Sarah Bullock
                            </span>
                            <span className="direct-chat-timestamp float-left">
                              23 tháng 1 6:10 chiều
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/assets/dist/img/user3-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">Tôi rất thích.</div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                      </div>
                      {/*/.direct-chat-messages*/}
                      {/* Contacts are loaded here */}
                      <div className="direct-chat-contacts">
                        <ul className="contacts-list">
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/assets/dist/img/user1-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Count Dracula
                                  <small className="contacts-list-date float-right">
                                    2/28/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  How have you been? I was...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/assets/dist/img/user7-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Sarah Doe
                                  <small className="contacts-list-date float-right">
                                    2/23/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  I will be waiting for...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/assets/dist/img/user3-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nadia Jolie
                                  <small className="contacts-list-date float-right">
                                    2/20/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  I'll call you back at...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/assets/dist/img/user5-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nora S. Vans
                                  <small className="contacts-list-date float-right">
                                    2/10/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Where is your new...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/assets/dist/img/user6-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  John K.
                                  <small className="contacts-list-date float-right">
                                    1/27/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Can I take a look at...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/assets/dist/img/user8-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Kenneth M.
                                  <small className="contacts-list-date float-right">
                                    1/4/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Never mind I found...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                        </ul>
                        {/* /.contacts-list */}
                      </div>
                      {/* /.direct-chat-pane */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <form action="#" method="post">
                        <div className="input-group">
                          <input
                            type="text"
                            name="message"
                            placeholder="Nhập thông điệp ..."
                            className="form-control"
                          />
                          <span className="input-group-append">
                            <button type="button" className="btn btn-primary">
                              Gửi
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* /.card-footer*/}
                  </div>
                  {/*/.direct-chat */}
                  {/* TO DO List */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="ion ion-clipboard mr-1" />
                        Những việc cần làm
                      </h3>
                      <div className="card-tools">
                        <ul className="pagination pagination-sm">
                          <li className="page-item">
                            <a href="#" className="page-link">
                              «
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              »
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <ul className="todo-list" data-widget="todo-list">
                        <li>
                          {/* drag handle */}
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          {/* checkbox */}
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo1"
                              id="todoCheck1"
                            />
                            <label htmlFor="todoCheck1" />
                          </div>
                          {/* todo text */}
                          <span className="text">Thiết kế một chủ đề đẹp</span>
                          {/* Emphasis label */}
                          <small className="badge badge-danger">
                            <i className="far fa-clock" /> 2 phút
                          </small>
                          {/* General tools such as edit or delete*/}
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo2"
                              id="todoCheck2"
                              defaultChecked
                            />
                            <label htmlFor="todoCheck2" />
                          </div>
                          <span className="text">Làm cho chủ đề đáp ứng</span>
                          <small className="badge badge-info">
                            <i className="far fa-clock" /> 4 tiếng
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo3"
                              id="todoCheck3"
                            />
                            <label htmlFor="todoCheck3" />
                          </div>
                          <span className="text">
                            Hãy để chủ đề tỏa sáng như một ngôi sao
                          </span>
                          <small className="badge badge-warning">
                            <i className="far fa-clock" /> 1 ngày
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo4"
                              id="todoCheck4"
                            />
                            <label htmlFor="todoCheck4" />
                          </div>
                          <span className="text">
                            Hãy để chủ đề tỏa sáng như một ngôi sao
                          </span>
                          <small className="badge badge-success">
                            <i className="far fa-clock" /> 3 ngày
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo5"
                              id="todoCheck5"
                            />
                            <label htmlFor="todoCheck5" />
                          </div>
                          <span className="text">
                            Kiểm tra tin nhắn và thông báo của bạn
                          </span>
                          <small className="badge badge-primary">
                            <i className="far fa-clock" /> 1 tuần
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo6"
                              id="todoCheck6"
                            />
                            <label htmlFor="todoCheck6" />
                          </div>
                          <span className="text">
                            Hãy để chủ đề tỏa sáng như một ngôi sao
                          </span>
                          <small className="badge badge-secondary">
                            <i className="far fa-clock" /> 1 tháng
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer clearfix">
                      <button
                        type="button"
                        className="btn btn-primary float-right"
                      >
                        <i className="fas fa-plus" /> Thêm mặt hàng
                      </button>
                    </div>
                  </div>
                  {/* /.card */}
                </section>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-5 connectedSortable">
                  {/* Map card */}
                  <div className="card bg-gradient-primary">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-map-marker-alt mr-1" />
                        Vị trí
                      </h3>
                      {/* card tools */}
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm daterange"
                          title="Date range"
                        >
                          <i className="far fa-calendar-alt" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          data-card-widget="collapse"
                          title="Collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                      </div>
                      {/* /.card-tools */}
                    </div>
                    <div className="card-body">
                      <div
                        id="world-map"
                        style={{ height: "250px", width: "100%" }}
                      />
                    </div>
                    {/* /.card-body*/}
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="col-4 text-center">
                          <div id="sparkline-1" />
                          <div className="text-white">Trực tuyến</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div id="sparkline-2" />
                          <div className="text-white">Trong nước</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div id="sparkline-3" />
                          <div className="text-white">Ngoài nước</div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                  </div>
                  {/* /.card */}
                  {/* solid sales graph */}
                  <div className="card bg-gradient-info">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Biểu đồ bán hàng
                      </h3>
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn bg-info btn-sm"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn bg-info btn-sm"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="container">
                        {orders.map((item, id) => (
                          <div className="row" key={id}>
                            <div className="text-order">{item.orderName}</div>
                            <span className="text-right">{item.quantity}</span>
                            <span className="text-right">{item.total}</span>
                            <small className="text-status">{item.status}</small>
                            <span className="text-end">{item.createdAt}</span>
                          </div>
                        ))}
                        <canvas
                          className="chart"
                          id="line-chart"
                          style={{
                            minHeight: "250px",
                            height: "250px",
                            maxHeight: "250px",
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="col text-center">tên</div>
                        {/* ./col */}
                        <div className="col text-center">
                          <span className="text-white">số đơn</span>
                        </div>
                        {/* ./col */}
                        <div className="col text-center">
                          <div className="text-white">tổng tiền</div>
                        </div>
                        {/* ./col */}
                        <div className="col text-center">
                          <div className="text-white">trạng thái</div>
                        </div>
                        {/* ./col */}
                        <div className="col text-center">
                          <div className="text-white">ngày đặt</div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                  {/* Calendar */}
                  <div className="card bg-gradient-success">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="far fa-calendar-alt" />
                        Lịch
                      </h3>
                      {/* tools card */}
                      <div className="card-tools">
                        {/* button with a dropdown */}
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-success btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                            data-offset={-52}
                          >
                            <i className="fas fa-bars" />
                          </button>
                          <div className="dropdown-menu" role="menu">
                            <a href="#" className="dropdown-item">
                              Add new event
                            </a>
                            <a href="#" className="dropdown-item">
                              Clear events
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              View calendar
                            </a>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      {/* /. tools */}
                    </div>
                    {/* /.card-header */}
                    <div className="card-body pt-0">
                      {/*The calendar */}
                      <div id="calendar" style={{ width: "100%" }} />
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </section>
                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}

        <Footer_admin />

        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
      {/* ./wrapper */}
      <Body />
    </div>
  );
};

export default Administration;
