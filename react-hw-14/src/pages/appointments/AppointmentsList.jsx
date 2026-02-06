import { useGetAppointmentsQuery } from "@/api/slices/appointmentApi"
import { useGetPatientsQuery } from "@/api/slices/patientApi"
import { useGetDoctorsQuery } from "@/api/slices/doctorApi"
import AppointmentCard from "./AppointmentCard"
import styles from "./AppointmentsList.module.css"
import AddButton from "@/components/icons/AddButton"
import { Link } from "react-router"
import Loader from "@/components/Loader/Loader"

function AppointmentsList() {
    const {
        data: appointments,
        isLoading: appointmentsLoading,
        error: appointmentsError,
    } = useGetAppointmentsQuery()

    const {
        data: patients,
        isLoading: patientsLoading,
        error: patientsError,
    } = useGetPatientsQuery()

    const {
        data: doctors,
        isLoading: doctorsLoading,
        error: doctorsError,
    } = useGetDoctorsQuery()

    if (appointmentsLoading || patientsLoading || doctorsLoading) {
        return <Loader />
    }

    if (appointmentsError || patientsError || doctorsError) {
        return <div>Error loading data</div>
    }

    const patientsMap = {}
    patients.forEach((patient) => {
        patientsMap[patient.id] = patient.fullName
    })

    const doctorsMap = {}
    doctors.forEach((doctor) => {
        doctorsMap[doctor.id] = doctor.fullName
    })

    return (
        <div className={styles.listContainer}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Список призначень</h1>
                <Link to="/appointments/new" className={styles.addButton}
                >
                    <AddButton />
                    Додати призначення
                </Link>
            </div>

            <div className={styles.gridHeader}>
                <span className={styles.columnTitle}>Пацієнт</span>
                <span className={styles.columnTitle}>Лікар</span>
                <span className={styles.columnTitle}>Дата</span>
                <span className={styles.columnTitle}>Скарги</span>
                <span className={styles.columnTitle}>Статус</span>
            </div>

            <div className={styles.rowsContainer}>
                {appointments.map((appointment) => {
                    return (
                        <AppointmentCard
                            key={appointment.id}
                            appointment={appointment}
                            patientName={patientsMap[appointment.patientId]}
                            doctorName={doctorsMap[appointment.doctorId]}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default AppointmentsList