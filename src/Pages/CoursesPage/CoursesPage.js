import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import CourseList from './CourseList/CourseList'
import styles from './CoursesPage.module.css'
// import Navbar from './Navbar/Navbar'

function CoursesPage() {
    return <>
        <div className={styles.main}>
            <Header />
            <Search />
            <div className={styles.content}>
                {/* <Navbar /> */}
                <CourseList />
            </div>
            <Footer />
        </div>
    </>
}

export default CoursesPage