import styles from './QuizList.module.css'
import { Table } from 'react-bootstrap'
import { listQ } from '../Quiz/Provider'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

import logo from '../../Assets/Images/logo.png'
import { flexbox } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';


function QuizList() {
    AOS.init()
    const DoItNow = function () {
        return (
            <Link
                to={{
                    pathname: `/bai-thi`,
                }}
            >
                <button className={`${styles.btn}`}>
                    Làm bài
                </button>
            </Link>
        )
    }
    const Done = function () {
        return (
            <button disabled className={`${styles.btn} ${styles.disable}`}>
                Đã làm
            </button>
        )
    }
    return (
        <div className={`${styles.container}`}>
            <Header />
        
        <div className={`${styles.main}`}>

                

            <h1 
                style={{ textAlign: "center", marginBottom: "20px" } }
                data-aos="fade-down" 
                data-aos-duration="2000"
            >DANH SÁCH BÀI THI</h1>

            <div 
                className={`${styles.list}`}
                data-aos="fade-down" 
                data-aos-duration="1000"
            >


                <Table striped hover className={styles.table}>
                    <thead>
                        <tr>    
                            <th>#</th>
                            <th>Tên bài thi</th>
                            <th>Thời gian</th>
                            <th>Số câu hỏi</th>
                            <th>Tình trạng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listQ.map((e, index) => (
                            <tr key={index}  >
                                <td>{index + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.time}</td>
                                <td>{e.questionsLength}</td>
                                <td className={`d-flex justify-content-center`}>{e.isComplete ? <DoItNow /> : <Done />}</td>

                            </tr>
                        ))}

                    </tbody>
                </Table>

            </div>


        </div>
        <Footer />

        </div>

    )
}

export default QuizList