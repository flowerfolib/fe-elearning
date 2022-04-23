import React, { useEffect, useRef, useContext } from "react";
import styles from "./Courses.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { DataContext } from "../../Context/Context";
import { convertShortName } from "../../Extensions/convertShortName";
import { toSlug } from "../../Extensions/Extensions";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Courses() {
   AOS.init()  
  let routerLink = convertShortName(
    useLocation().pathname.replace("/khoa-hoc", "")
  );
  const introRef = useRef();
  const { data } = useContext(DataContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        introRef.current.classList.add(styles.laptopL);
      } else {
        introRef.current.classList.remove(styles.laptopL);
      }
    };
    window.addEventListener("load", () => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
 
      <section className={styles.main}     >
        <div ref={introRef} className={styles.intro}data-aos="fade-right" data-aos-duration="1000"  >
          <h2 className={styles.intro__title}>
            Hội nhập văn hóa Diligo Holdings
          </h2>
          <p className={styles.intro__content}  data-aos="fade-right" data-aos-duration="2000">
            Công tác đào tạo nhân viên, đào tạo chi nhánh, nhà máy, nhà phân
            phối, thi và kiểm tra, thống kê việc học tập lên môi trường đào tạo
            trực tuyến 100%
          </p>
        </div>
        <ul className={styles.course__list}>
          {routerLink
            ? data
              .filter((item) => item.department === routerLink)
              .map((val, index) => {
                if (val.department === "orientation_integration") {
                  return (
                    <li key={index} className={styles.course__item} >
                      <Link
                        to={{
                          pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                          search: `${data.indexOf(val)}`
                        }}
                        className={styles.course__link}
                      >
                        <div className={`${styles.img__wrap}`} style={{}}>
                          <img src={val.avatar} alt="" className={styles.img} />
                        </div>
                        <h3 className={styles.item__title}>{val.name}</h3>
                      </Link>
                    </li>
                  )
                }
              })
            : data.map((val, index) => {

              if (val.department === "orientation_integration") {
                return (
                   <li key={index} className={styles.course__item} data-aos="zoom-in" data-aos-duration="1000" >
                    <Link
                      to={{
                        pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                        search: `${data.indexOf(val)}`
                      }}
                      className={styles.course__link}
                    >
                      <div className={styles.img__wrap}>
                        <img src={val.avatar} alt="" className={styles.img} />
                      </div>
                      <h3 className={styles.item__title}>{val.name}</h3>
                    </Link>
                  </li>
                )
              }
            })
            }
        </ul>
      </section>
      
    </>
  );
  
}

export default Courses;
