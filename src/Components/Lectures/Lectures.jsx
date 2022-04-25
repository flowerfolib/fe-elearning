import React from "react";
import styles from "./Lectures.module.css";
import lecture1 from "../../Assets/Images/Lecturers/nguyenhuuchi.png";
import lecture2 from "../../Assets/Images/Lecturers/hoangvanhoa.png";
import lecture3 from "../../Assets/Images/Lecturers/hotrongcuong.png";
import lecture4 from "../../Assets/Images/Lecturers/nguyenthiminhgiang.png";

function Lectures() {
  return (
    <>
      <div className="container">
        <h2 className={styles.lecturesSection}>
          Đồng hành cùng đội ngũ giảng viên Diligo{" "}
        </h2>
        <p className={styles.subSection}>
          Những chiến binh đầy nhiệt huyết, kinh nghiệm thực chiến, tử tế từ
          tâm, chuyên môn vững vàng sẽ đồng hành cùng bạn trong các khóa học
        </p>
        <div className="row">
          <div className="col-3">
            <div className={styles.lectureInfo}>
              <div className={styles.lectureImg}>
                <img src={lecture1} alt="" />
              </div>
              <div className={styles.lectureDesc}>
                <div className={styles.lectureName}>
                  <h4>Nguyễn Hữu Chí</h4>
                </div>
                <div className={styles.lecturePosition}>
                  Trưởng Ekip phát triển ứng dụng
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={styles.lectureInfo}>
              <div className={styles.lectureImg}>
                <img src={lecture2} alt="" />
              </div>
              <div className={styles.lectureDesc}>
                <div className={styles.lectureName}>
                  <h4>Nguyễn Hữu Chí</h4>
                </div>
                <div className={styles.lecturePosition}>
                  Trưởng Ekip phát triển ứng dụng
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={styles.lectureInfo}>
              <div className={styles.lectureImg}>
                <img src={lecture3} alt="" />
              </div>
              <div className={styles.lectureDesc}>
                <div className={styles.lectureName}>
                  <h4>Nguyễn Hữu Chí</h4>
                </div>
                <div className={styles.lecturePosition}>
                  Trưởng Ekip phát triển ứng dụng
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={styles.lectureInfo}>
              <div className={styles.lectureImg}>
                <img src={lecture4} alt="" />
              </div>
              <div className={styles.lectureDesc}>
                <div className={styles.lectureName}>
                  <h4>Nguyễn Hữu Chí</h4>
                </div>
                <div className={styles.lecturePosition}>
                  Trưởng Ekip phát triển ứng dụng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lectures;
