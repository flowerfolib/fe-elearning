import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import { DataProvider } from './Context/Context'
import CourseDetail from './CourseDetail/CourseDetail'
import styles from './CoursesPage.module.css'
import Navbar from './Navbar/Navbar'

function CoursesPage() {
    return <>
        <DataProvider>
            <div className={styles.main}>
                <Header backgroundColor={'var(--primary-light)'} />
                <Search />
                <div className={styles.content}>
                    <Navbar />
                    <CourseDetail />
                </div>
            </div>
        </DataProvider>
    </>
}

export default CoursesPage