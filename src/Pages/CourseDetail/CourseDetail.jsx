import React, { useState } from "react";
import styles from "./CourseDetail.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Introduce from "./Introduce/Introduce";
import Comment from "./Comment/Comment";
import Analyst from "./Analyst/Analyst";
import Share from "./Share/Share";

function CourseDetail() {
  const [content, setContent] = useState(1);
  const handleClick = (e) => {
    setContent(+e.target.dataset.content);

    document.querySelector('.' + styles.nav__item + '.' + styles.active).classList.remove(styles.active)
    e.target.parentElement.classList.add(styles.active)
  };
  return (
    <>
      <Header />
      <div className={`container ${styles.mainCourse}`}>
        <div className="row">
          <div className={`${styles.courseContent} col-md-8`}>
            <iframe
              className={`my-2 ${styles.courseVideo}`}
              width="100%"
              height="50%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
            <ul className={styles.nav}>
              <li className={ `${styles.nav__item} ${styles.active}`}>
                <Link
                  to="/khoa-hoc/chi-tiet/lab/gioi-thieu"
                  onClick={handleClick}
                  data-content={1}
                  className={styles.nav__link}
                >
                  Giới thiệu
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link
                  to="/khoa-hoc/chi-tiet/lab/binh luan"
                  onClick={handleClick}
                  data-content={2}
                  className={styles.nav__link}
                >
                  Bình luận
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link
                  to="/khoa-hoc/chi-tiet/lab/thong-ke"
                  onClick={handleClick}
                  data-content={3}
                  className={styles.nav__link}
                >
                  Thống kê
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link
                  to="/khoa-hoc/chi-tiet/lab/chia-se"
                  onClick={handleClick}
                  data-content={4}
                  className={styles.nav__link}
                >
                  Chia sẻ
                </Link>
              </li>
            </ul>
            <div className="container">
              <div className="row py-5">
                <div >
                  {content === 1 ? (
                    <Introduce/>
                  ) : content === 2 ? (
                    <Comment/>
                  ) : content === 3 ? (
                    <Analyst/>
                  ) : (
                    <Share/>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4`}>
            <div className={`${styles.courseList}`}>
              <h2 className={`${styles.listTitle}`}>Nội dung khóa học</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
