import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import "./Signin.css";
import styles from "./signin.module.css";
import logo from "../../Assets/Images/logo.png";
import { Helmet } from "react-helmet";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";

export default function Signin(props) {
  const [db] = useState("hr_diligo");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const bodyFormData = new FormData();
  bodyFormData.append("db", "diligo_hrms");
  bodyFormData.append("login", login);
  bodyFormData.append("password", password);

  const handleLogin = () => {
    setError(null);
    setLoading(true);

    axios
      .post("http://hrm.diligo.vn/api/auth/token", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        setUserSession(
          response.data.access_token,
          response.data.user,
          response.data.name,
          response.data.go_to_backend
        );
        props.history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response.status === 401 ||
          error.response.status === 400 ||
          error.response.status === 403
        ) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong! Try again later");
        }
      });
    // props.history.push('/')
  };

  return (
    <section className="four-zero-four-section version-1">
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      {/*======= Stars =======*/}
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="container-fluid" style={{ marginTop: "-13rem" }}>
        <div className="row">
          <div className="col-lg-12 d-flex flex-column">
            <Link to="/" className={styles.logoa}>
              <img className={styles.logo} src={logo} alt="Logo" />
            </Link>
            <h3 className={styles.title + " d-flex mb-5"}>Đăng nhập</h3>
            <div className="d-flex mb-5">
              <form method="post" className="d-flex flex-column justify-center align-center">
                <input type="hidden" value="hr_diligo" />
                <input
                  type="text"
                  className={`form__field mb-2 ${styles.input}`}
                  placeholder="Tên đăng nhập"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
                <input
                  type="password"
                  className={`form__field mb-2 ${styles.input}`}
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className={styles.error}>{error}</p>}
                <div className="btn-submit d-flex justify-content-around">
                  <input
                    type="button"
                    className={styles.btn + " " + styles.login}
                    value={loading ? "Đang đăng nhập" : "Đăng nhập"}
                    disabled={loading}
                    onClick={handleLogin}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="small-planet-1" />
      <div className="small-planet-2" />
      <div className="small-planet-3" />
    </section>
  );
}
