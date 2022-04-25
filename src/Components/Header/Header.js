import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.css";
import logo from "../../Assets/Images/logo.png";
import { useLocation } from "react-router-dom";
import {
  getToken,
  getName,
  removeUserSession,
} from "../../Utils/Common";
// import { useLocation } from "react-router-dom";

function Header() {
  const token = getToken();
  const names = getName();
  const handleLogout = () => {
    <Link to="/dang-nhap" />;
    removeUserSession();
  };
  const headerRef = useRef();
  const navRef = useRef();
  const [show, setShow] = useState(false);
  const showStyle = {
    fontSize: "10vw",
    color: "var(--text)",
  };

  const handleShow = e => {
    if (window.innerWidth <= 1024) {
      setShow(!show);
    }

  }
  const path = useLocation().pathname.split('/')[1]
  useEffect(() => {
    const currItem = document.querySelector(`.${styles.item__link}[data-path="${path}"]`)
    if (currItem) {

      currItem.classList.add(styles.active)
    }
  }, [path])

  useEffect(() => {
    if (show) {
      const lastItem = navRef.current.lastChild;
      const height = lastItem.offsetTop + lastItem.offsetHeight;
      navRef.current.style.height = height + "px";
    } else {
      navRef.current.style.height = 0;
    }
  }, [show]);
  return (
    <header ref={headerRef} className={styles.main}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Elearning" />
      </Link>
      <ul ref={navRef} className={styles.nav}>
        <li className={styles.item}>
          <Link
            onClick={handleShow}
            to="/"
            className={styles.item__link}
            data-path=""
          >
            Trang chủ
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            onClick={handleShow}
            to="/khoa-hoc"
            className={styles.item__link}
            data-path="khoa-hoc"
          >
            Khóa học
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            onClick={handleShow}
            to="/ky-thi"
            className={styles.item__link}
            data-path="ky-thi"
          >
            Kỳ thi
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            onClick={handleShow}
            to="/ho-tro"
            className={styles.item__link}
            data-path="ho-tro"
          >
            Hỗ trợ
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            onClick={handleShow}
            to="/login"
            className={styles.login}
            id={styles.login__mobile}
          >
            Đăng nhập
          </Link>
        </li>
      </ul>
      {token ?

        <div className={styles.user}>
          <i
            className={"fa-solid fa-user " + styles.user__icon}
          />
          <div className={styles.user__info}>
            <h5 className={styles.user__name}>
              {names}
            </h5>
            <Link
              to={{ pathname: `http://hrm.diligo.vn/web?db=diligo_hrms` }}
              target="_blank"
              className={styles.user__link}
            >
              Ứng dụng
            </Link>
            <Link
              to="/"
              onClick={handleLogout}
              className={styles.user__link}
            >
              <b>Đăng xuất</b>
            </Link>
          </div>
        </div>
        : (
          <Link to="/dang-nhap" className={styles.login}>
            Đăng nhập
          </Link>
        )}
      <MenuIcon
        onClick={handleShow}
        className={styles.btn__show}
        sx={showStyle}
      />
    </header>
  );
}

export default Header;
