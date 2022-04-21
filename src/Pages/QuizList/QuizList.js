import styles from './QuizList.module.css'
import { Table } from 'react-bootstrap'
import { listQ } from '../Quiz/Provider'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


function QuizList() {

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
        <div className={`${styles.main}`}>

                
            <Header />

            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Danh sách bài thi</h1>

            <div className={`${styles.list}`}>


                <Table striped hover>
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
            <Footer />


        </div>

    )
}

export default QuizList