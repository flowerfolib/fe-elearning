import React, { useEffect, useRef, useContext, componentDidMount } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";
import styles from "./Training.module.css";
import trainIm from "../../Assets/Images/courses.png";
import { DataContext } from "../../Context/Context";
import { convertShortName } from "../../Extensions/convertShortName";
import { toSlug } from "../../Extensions/Extensions";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Training() {

  AOS.init()
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
    // document
    //   .querySelector("." + styles.nav__item + "." + styles.active)
    //   .classList.remove(styles.active);
    // e.target.closest("." + styles.nav__item).classList.add(styles.active);

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


      </ul>
      <ul className={styles.train__list}>

        {data
          .filter((item) => depart ? item.department === depart : item.department !== depart)
          .map((val, index) => (
            <li 
              key={index} 
              className={styles.train__item} 
              data-aos-duration="2000"
              data-aos={index%2===0 ? "flip-up" : "flip-right"}
            >
              <Link
                to={{
                  pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                  search: `${data.indexOf(val)}`
                }}
                className={styles.train__link}
              >
                <div className="d-flex" style={{ height: "150px", justifyContent: "center" }}>
                  <img src={val.avatar} alt="" className={styles.train__img} />
                </div>

                <p className={styles.train__title}>{val.name}</p>
              </Link>
            </li>
          ))}

        
        
      </ul>
    </div>
  );
}

export default Training;
