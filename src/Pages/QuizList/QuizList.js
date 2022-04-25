import styles from './QuizList.module.css'
import { Table } from 'react-bootstrap'
import { listQ } from '../Quiz/Provider'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
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
                style={{ textAlign: "center", marginBottom: "50px" } }
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
                            <th className={`${styles.center}`}>Thời gian</th>
                            <th className={`${styles.center}`}>Số câu hỏi</th>
                            <th className={`${styles.center}`}>Tình trạng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listQ.map((e, index) => (
                            <tr key={index}  >
                                <td>{index + 1}</td>
                                <td >{e.name}</td>
                                <td className={`${styles.center}`}>{e.time}</td>
                                <td className={`${styles.center}`}>{e.questionsLength}</td>
                                <td className={`${styles.center}`}>
                                    {e.isComplete ? <DoItNow /> : <Done />}
                                </td>

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