import { useGetDoctorsQuery } from "@/api/slices/doctorApi"
import { Link } from "react-router"
import DoctorCard from "./DoctorCard"
import styles from "./DoctorList.module.css"
import AddButton from "@/components/icons/AddButton"
import Loader from "@/components/Loader/Loader"
import ErrorState from "@/components/ErrorState/ErrorState"

function DoctorsList() {
    const { data: doctors, error, isLoading } = useGetDoctorsQuery()
    if (isLoading) return <Loader />
    if (error) return <ErrorState />

    return (
        <div className={styles.listContainer}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Список лікарів</h1>
                <Link to="/doctors/new" className={styles.addButton}
                >
                    <AddButton />
                    Додати лікаря
                </Link>
            </div>

            <div className={styles.gridHeader}>
                <span className={styles.columnTitle}>Лікар</span>
                <span className={styles.columnTitle}>Електронна пошта</span>
                <span className={styles.columnTitle}>Телефон</span>
                <span className={styles.columnTitle}>Кабінет</span>
                <span className={styles.columnTitle}>Графік</span>

            </div>
            <div className={styles.rowsContainer}>
                {doctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>
    )
}

export default DoctorsList

