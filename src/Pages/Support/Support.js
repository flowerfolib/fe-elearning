import Footer from "../../Components/Footer/Footer.js";
import Header from "../../Components/Header/Header.js";
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import styles from "./Support.module.css";

function Support() {
  const api = [
    {
      id: 1,
      title: "Thông tin về công ty",
      content: [
        "Sau bao lâu tôi có thể ứng tuyển lại nếu kết quả phỏng vấn hiện tại của tôi là Không Đạt ?",
        "Tôi đã phỏng vấn Đạt trước đây, nhưng vì việc cá nhân nên chưa tham dự nhận việc, Tôi có thể ứng tuyển lại được không ?"
      ]
    },

    {
      id: 2,
      title: "Thông tin về công ty",
      content: [
        "Vì sao hồ sơ của tôi có tình trạng Lưu Hồ Sơ ?",
        "Tôi đã phỏng vấn Đạt trước đây, nhưng vì việc cá nhân nên chưa tham dự nhận việc, Tôi có thể ứng tuyển lại được không ?"
      ]
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.main}>
        {api.map((vals, index) => <Accordion defaultExpanded key={index} className={styles.item}>
          <AccordionSummary expandIcon={<i className="fa-solid fa-angle-down" />} className={styles.item__title}>
            {vals.title}
          </AccordionSummary>
          {vals.content.map((val, index) => <AccordionDetails key={index} className={styles.item__child}>
            {val}
          </AccordionDetails>)}
        </Accordion>)}
      </div>
      <Footer />
    </div >
  );
}

export default Support;
