import React, { useEffect, useRef, useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Training.module.css";
import { DataContext } from "../../Context/Context";
import { toSlug } from "../../Extensions/Extensions";
import AOS from "aos";
import "aos/dist/aos.css";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

function Training() {


  const [value, setValue] = useState("0");


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  AOS.init();

  const { data, department, depart, setDepart } = useContext(DataContext);

  const lineRef = useRef();

  const handleClick = (e) => {
    setDepart(e.short);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Đào tạo nội bộ</h2>

      <div ref={lineRef} className={styles.nav__line} />

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered

            >
              {department.map((e, index) => (
                <Tab
                  onClick={() => handleClick(e)}
                  label={e.name}
                  value={index.toString()}
                  key={index}
                  className={styles.tabmenu}
                />
              ))}

            </TabList>
          </Box >

          <ul className={styles.train__list}>
            {data
              .filter((item) =>
                depart ? item.department === depart : item.department !== depart
              )
              .map((val, index) => (
                <li
                  key={index}
                  className={styles.train__item}
                  data-aos-duration={2000 + 1000 * (index + 1)}

                  data-aos="flip-up"
                >
                  <Link
                    to={{
                      pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                      search: `${data.indexOf(val)}`,
                    }}
                    className={styles.train__link}
                  >
                    <div
                      className="d-flex"
                      style={{ height: "150px", justifyContent: "center" }}

                    >
                      <img src={val.avatar} alt="" className={styles.train__img} />
                    </div>

                    <p className={styles.train__title}>{val.name}</p>
                  </Link>
                </li>
              ))

            }
          </ul>



        </TabContext>
      </Box>


    </div>
  );
}

export default Training;
