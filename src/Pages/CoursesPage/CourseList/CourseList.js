import React, { memo, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useLocation } from "react-router-dom";
import { DataContext } from '../../../Context/Context'
import styles from './CourseList.module.css'
import course from '../../../Assets/Images/course__detail.jpg'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { convertShortName } from '../../../Extensions/convertShortName';
import { toSlug } from '../../../Extensions/Extensions';

function CourseList() {
  const { data } = useContext(DataContext)
  let routerLink = convertShortName(useLocation().pathname.replace("/khoa-hoc/", ''))
  return (
    <div className={styles.main}>
      <ul className={styles.list}>
        {/* <li className={styles.item}>
          <img src={course} alt="" className={styles.item__img} />
          <h3 className={styles.item__title}>
            Đường về xứ phật
          </h3>
          <div className={styles.info}>
            <p className={styles.info__content}>
              <PersonIcon className={styles.info__icon} /> Vũ Đức Sỹ
            </p>
            <p className={styles.info__content}>
              <AccessTimeIcon className={styles.info__icon} /> 24 giờ 36 phút
            </p>
            <p className={styles.info__content}>
              <PersonOutlineIcon className={styles.info__icon} /> 220 Học viên
            </p>
          </div>
          <Link className={styles.item__join}>
            Tham gia
          </Link>
        </li> */}
        {
          data.filter((item) => routerLink ? item.department === routerLink : item).map(
            (val, index) =>
              <li key={index} className={styles.item}>
                <div className={styles.item__inner}>
                  <span className={styles.tag__new}>
                    New
                  </span>
                  <div style={{ height: '180px', display: 'flex', alignItems: 'center', paddingTop: '60px' }}>
                    <img src={val.avatar} alt="" />
                  </div>
                  <h3 className={styles.item__title}>
                    {val.name}
                  </h3>
                  <div className={styles.info}>
                    <p className={styles.info__content}>
                      <PersonIcon className={styles.info__icon} /> {val.lecturers.length > 0 ? val.lecturers[0]?.name : 'Chưa có giảng viên'}
                    </p>
                    <p className={styles.info__content}>
                      <AccessTimeIcon className={styles.info__icon} /> {Math.floor(val.total_time)} giờ {Math.floor((val.total_time % 1) * 60)} phút
                    </p>
                    <p className={styles.info__content}>
                      <PersonOutlineIcon className={styles.info__icon} /> {val.members_count} Học viên
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: `/khoa-hoc/chi-tiet/${toSlug(val.name)}`,
                      search: `${data.indexOf(val)}`
                    }}
                    className={styles.item__join}>
                    Tham gia
                  </Link>
                </div>
              </li>
          )
        }
      </ul>
    </div>
  )
}

export default memo(CourseList)