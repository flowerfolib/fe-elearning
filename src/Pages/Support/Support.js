import styles from "./Support.module.css";
import { FilterVintage } from "@mui/icons-material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../Components/Footer/Footer.js";
import Header from "../../Components/Header/Header.js";

function Support() {
  const api = [
    {
      id: 1,
      title: "Thông tin về công ty",
      content1:
        "Sau bao lâu tôi có thể ứng tuyển lại nếu kết quả phỏng vấn hiện tại của tôi là Không Đạt ?",
      content2:
        "Tôi đã phỏng vấn Đạt trước đây, nhưng vì việc cá nhân nên chưa tham dự nhận việc, Tôi có thể ứng tuyển lại được không ?",
    },

    {
      id: 2,
      title: "Thông tin về công ty",
      content1: "Vì sao hồ sơ của tôi có tình trạng Lưu Hồ Sơ ?",
      content2:
        "Tôi đã phỏng vấn Đạt trước đây, nhưng vì việc cá nhân nên chưa tham dự nhận việc, Tôi có thể ứng tuyển lại được không ?",
    },
  ];

  return (
    <div>
      <Header />
      <div className={`${styles.support} mt-8`}>
        <h2 className={styles.announce}>
          HÃY XEM CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN
        </h2>
        {api.map((e) => (
          <div style={{ width: "50%" }}>
            <Accordion key={e.id} className={styles.wrapper}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${styles.orangeColor} ${styles.title}`}
                  />
                }
              >
                <Typography>Thông tin về công ty</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className={` ${styles.content}`}>
                  <FilterVintage
                    className={styles.orangeColor}
                  />
                  <p>{e.content1}</p>
                  <ExpandMoreIcon className={styles.orangeColor} />
                </Typography>

                <Typography className={` ${styles.content}`}>
                  <FilterVintage
                    className={styles.orangeColor}
                  />
                  <p>{e.content2}</p>
                  <ExpandMoreIcon className={styles.orangeColor} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Support;
