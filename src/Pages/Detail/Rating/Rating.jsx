import React from "react";
import styles from "./Rating.module.css";
import mot from "../../../Assets/Images/rating/1.jpg";
import hai from "../../../Assets/Images/rating/2.jpg";
import ba from "../../../Assets/Images/rating/3.jpg";

function Rating() {
  return (
    <>
      <div className={`row ${styles.contents}`}>
        <div className="col-2">
          <img src={mot} alt="" className={styles.img} />
        </div>

        <div className="col-10">
          <span className={styles.title}>
            <h5 id="title" style={{ display: "inline-block" }}>
              <strong>Anthony</strong>
            </h5>
          </span>
          <span className={styles.star}>★★★★</span>
          <h6>
            <strong>
              <em>Beautiful theme-Awesome plugin</em>
            </strong>
          </h6>
          <p>
            5 start for this theme too. Education WP theme brings the best LMS
            experience ever with super friendly UX and complete elearning
            features. Really satisfied.
          </p>
        </div>
      </div>

      <div className={`row ${styles.contents}`}>
        <div className="col-2">
          <img src={hai} alt="" className={styles.img} />
        </div>

        <div className="col-10">
          <span className={styles.title}>
            <h5 id="title" style={{ display: "inline-block" }}>
              <strong>Hinata Hyuga</strong>
            </h5>
          </span>
          <span className={styles.star}>★★★★</span>
          <h6>
            <strong>
              <em>Incredible</em>
            </strong>
          </h6>
          <p>
            LearnPress WordPress LMS Plugin designed with flexible & scalable
            elearning system in mind. This WordPress elearning Plugin comes up
            with 10+ addons (and counting) to extend the ability of this
            WordPress Learning Management System. This is incredible.
          </p>
        </div>
      </div>

      <div className={`row ${styles.contents}`}>
        <div className="col-2">
          <img src={ba} alt="" className={styles.img} />
        </div>

        <div className="col-10">
          <span className={styles.title}>
            <h5 id="title" style={{ display: "inline-block" }}>
              <strong>Keny White</strong>
            </h5>
          </span>
          <span className={styles.star}>★★★★</span>
          <h6>
            <strong>
              <em>The best LMS WordPress plugin</em>
            </strong>
          </h6>
          <p>
            I really love the course editor in LearnPress. It is never easier
            when creating courses, lessons, quizzes, with this one. It's the
            most useful LMS WordPress plugin i have ever used. Thank a lot!
            Testing quiz is funny, i like the sorting choise question type most.
          </p>
        </div>
      </div>
    </>
  );
}

export default Rating;
