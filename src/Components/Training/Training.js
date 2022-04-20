import React, { useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";
import styles from "./Training.module.css";
import trainIm from "../../Assets/Images/courses.png";
import { DataContext } from "../../Context/Context";
import { convertShortName } from "../../Extensions/convertShortName";
import { toSlug } from "../../Extensions/Extensions";

function Training() {
  let routerLink = convertShortName(
    useLocation().pathname.replace("/khoa-hoc/", "")
  );

  const { data, department, depart, setDepart } = useContext(DataContext);
  const introRef = useRef();
  const handleChange = () => { };
  const lineRef = useRef();
  const firstChild = useRef();

  const handleClick = (e) => {
    const left = e.target.offsetLeft;
    const width = e.target.offsetWidth;
    lineRef.current.style.left = left + "px";
    lineRef.current.style.width = width + "px";
    document
      .querySelector("." + styles.nav__item + "." + styles.active)
      .classList.remove(styles.active);
    e.target.closest("." + styles.nav__item).classList.add(styles.active);

    setDepart(e.target.closest("li").dataset.department)

  };
  useEffect(() => {
    const handleLoad = () => {
      const left = firstChild.current.offsetLeft;
      const width = firstChild.current.offsetWidth;
      lineRef.current.style.left = left + "px";
      lineRef.current.style.width = width + "px";
      firstChild.current.classList.add(styles.active);
    };
    window.addEventListener("load", handleLoad());
  }, []);


  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Đào tạo nội bộ</h2>
      <ul className={styles.nav}>
        <div ref={lineRef} className={styles.nav__line} />

        <li ref={firstChild} className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Tất cả
          </Link>
        </li>

        {department.map((e, index) => (
          <li
            className={styles.nav__item}
            key={index}
            data-department={e.short}
          >
            <Link to="" onClick={handleClick} className={styles.nav__link}>
              {e.name}
            </Link>

          </li>
        ))}


        {/* <li className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Ban cung ứng
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Ban công nghệ
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Ban kiểm soát
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Ban hiền tài
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Ban PTKH
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Ban PTTH và SP
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="" onClick={handleClick} className={styles.nav__link}>
            Ban tài chính kế toán
          </Link>
        </li> */}
      </ul>
      <ul className={styles.train__list}>

        {data
          .filter((item) => item.department === depart)
          .map((val, index) => (
            <li key={index} className={styles.train__item}>
              <Link
                to={{
                  pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                }}
                className={styles.train__link}
              >
                <img src={val.avatar} alt="" className={styles.train__img} />

                <p className={styles.train__title}>{val.name}</p>
              </Link>
            </li>
          ))}

        {/* {routerLink
          ? data
            .filter((item) => item.department === routerLink)
            .map((val, index) => (
              <li key={index} className={styles.course__item}>
                <Link
                  to={{
                    pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                  }}
                  className={styles.course__link}
                >
                  <div className={styles.img__wrap}>
                    <img src={val.avatar} alt="" className={styles.img} />
                  </div>
                  <h3 className={styles.item__title}>{val.name}</h3>
                </Link>
              </li>
            ))


          : data.map((val, index) => (
            <li key={index} className={styles.train__item}>
              <Link
                to={{
                  pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                }}
                className={styles.train__link}
              >
                <img src={val.avatar} alt="" className={styles.train__img} />

                <p className={styles.train__title}>{val.name}</p>
              </Link>
            </li>
          ))}  */}



        {/* <li className={styles.train__item}>
          <Link className={styles.train__link}>
            <img src={trainImg} alt="" className={styles.train__img} />
            <p className={styles.train__title}>Đường về xứ Phật</p>
          </Link>
        </li>
        <li className={styles.train__item}>
          <Link className={styles.train__link}>
            <img src={trainImg} alt="" className={styles.train__img} />
            <p className={styles.train__title}>Đường về xứ Phật</p>
          </Link>
        </li>
        <li className={styles.train__item}>
          <Link className={styles.train__link}>
            <img src={trainImg} alt="" className={styles.train__img} />
            <p className={styles.train__title}>Đường về xứ Phật</p>
          </Link>
        </li>
        <li className={styles.train__item}>
          <Link className={styles.train__link}>
            <img src={trainImg} alt="" className={styles.train__img} />
            <p className={styles.train__title}>Đường về xứ Phật</p>
          </Link>
        </li>
        <li className={styles.train__item}>
          <Link className={styles.train__link}>
            <img src={trainImg} alt="" className={styles.train__img} />
            <p className={styles.train__title}>Đường về xứ Phật</p>
          </Link>
        </li>
        <li className={styles.train__item}>
          <Link className={styles.train__link}>
            <img src={trainImg} alt="" className={styles.train__img} />
            <p className={styles.train__title}>Đường về xứ Phật</p>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Training;
