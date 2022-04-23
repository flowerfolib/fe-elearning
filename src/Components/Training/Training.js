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
import TabPanel from '@mui/lab/TabPanel';

function Training() {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const [isActive, setIsActive] = useState(0);
  AOS.init();

  const { data, department, depart, setDepart } = useContext(DataContext);

  const lineRef = useRef();
  const firstChild = useRef();

  const handleClick = (e) => {
    // const left = e.target.offsetLeft;
    // const width = e.target.offsetWidth;
    // lineRef.current.style.left = left + "px";
    // lineRef.current.style.width = width + "px";

    // document
    //   .querySelector(`.${styles.nav__item} .${styles.active}`)
    //   .classList.remove(styles.active);
    // e.target.closest("." + styles.nav__item).classList.add(styles.active);

    // setDepart(e.target.closest("li").dataset.department);
  };

  // useEffect(() => {
  //   const handleLoad = () => {
  //     const left = firstChild.current.offsetLeft;
  //     const width = firstChild.current.offsetWidth;
  //     lineRef.current.style.left = left + "px";
  //     lineRef.current.style.width = width + "px";
  //     firstChild.current.classList.add(styles.active);
  //   };
  //   window.addEventListener("load", handleLoad());
  // }, []);

  return (




    <div className={styles.main}>
      <h2 className={styles.title}>Đào tạo nội bộ</h2>
      <ul className={styles.nav}>
        <div ref={lineRef} className={styles.nav__line} style={{left:`${100*isActive}px`,width:`${100*isActive}px`}}/>

        {/* <li ref={firstChild} className={`${styles.nav__item} ${isActive ===0 ? styles.active : null}`}>
          <Link to="" onClick={() => {handleClick();setIsActive(0)}} className={styles.nav__link}>
            Tất cả
          </Link>
        </li> */}


        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example"
            style = {{display: "flex" ,justifyContent:"center"}}
          >
           {department.map((e,index)=>(
             <Tab 
              label={e.name} 
              value={index} 
              key = {index}
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


        {/* {department.map((e, index) => (
          <li
            className={`${styles.nav__item} ${isActive ===index+1 ? styles.active : null}`}
            key={index}
            data-department={e.short}
          >
            <Link to="" onClick={() => {handleClick();setIsActive(index+1)}} className={styles.nav__link}>
              {e.name}
            </Link>
          </li>
        ))} */}
      </ul>
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
          ))}
      </ul>
    </div>
  );
}

export default Training;
