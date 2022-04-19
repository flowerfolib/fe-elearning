import React from "react";
import styles from "./Result/Result.module.css";

function Result() {
  return (
    <div>
      <h1 className="header">KẾT QUẢ THI</h1>
      <div className="table">
        <table className={styles.styled-table}>
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Bài thi</th>
              <th>Số câu hỏi</th>
              <th>Số câu đúng</th>
              <th>Điểm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ho Ngoc Thang</td>
              <td>Quiz1</td>
              <td>10</td>
              <td>6/10</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Ho Ngoc Thang</td>
              <td>Quiz2</td>
              <td>10</td>
              <td>6/10</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Ho Ngoc Thang</td>
              <td>Quiz3</td>
              <td>10</td>
              <td>6/10</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Ho Ngoc Thang</td>
              <td>Quiz4</td>
              <td>10</td>
              <td>6/10</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Ho Ngoc Thang</td>
              <td>Quiz5</td>
              <td>10</td>
              <td>6/10</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Ho Ngoc Thang</td>
              <td>Quiz6</td>
              <td>10</td>
              <td>6/10</td>
              <td>6</td>
            </tr>
            <tr className="active-row">
              <td>Ho Ngoc Thang</td>
              <td>Quiz</td>
              <td>60</td>
              <td>36</td>
              <td>Đạt</td>
            </tr>
          </tbody>
        </table>
        <a href="./index.html">
          <button className="btn-home">Quay về trang chủ</button>
        </a>
      </div>
    </div>
  );
}

export default Result;
