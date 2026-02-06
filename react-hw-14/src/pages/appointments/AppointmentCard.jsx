import { useDeleteAppointmentMutation, useUpdateAppointmentMutation } from "@/api/slices/appointmentApi";
import styles from "./AppointmentCard.module.css";
import { Link } from "react-router";
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";

function AppointmentCard({ appointment, patientName, doctorName }) {
    const [deleteAppointment, { isLoading: isDeleting }] = useDeleteAppointmentMutation();
    const [updateAppointment] = useUpdateAppointmentMutation()

    const handleStatusChange = (e) => {
        const newStatus = e.target.value
        updateAppointment({
            id: appointment.id,
            data: { ...appointment, status: newStatus }
        })
    }

    return (
        <div className={styles.row}>
            <div className={styles.profileInfo}>
                <div className={`${styles.avatar} ${styles.patientAvatar}`}>
                    {patientName ? patientName[0] : '?'}
                </div>
                <div className={styles.nameWrapper}>
                    <span className={styles.name}>{patientName || 'Не вказано'}</span>
                </div>
            </div>

            <div className={styles.profileInfo}>
                <div className={`${styles.avatar} ${styles.doctorAvatar}`}>
                    {doctorName ? doctorName[0] : '?'}
                </div>
                <div className={styles.nameWrapper}>
                    <span className={styles.name}>{doctorName || 'Не вказано'}</span>
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.date}>
                    📅 {new Date(appointment.date).toLocaleDateString()}
                </div>

            </div>
            <div className={styles.reason} title={appointment.reason}>
                {appointment.reason}
            </div>

            <div className={styles.statusContainer}>
                <select
                    className={styles.statusSelect}
                    value={appointment.status}
                    onChange={handleStatusChange}
                    data-status={appointment.status}
                >
                    <option value="completed">Завершено</option>
                    <option value="scheduled">Заплановано</option>
                    <option value="active">Aктивний</option>
                </select>
            </div>

            <div className={styles.actionsContainer}>

                <Link
                    to={`/appointments/${appointment.id}`}
                    className={styles.editBtn}
                    title="Редагувати"
                >
                    <EditIcon />
                </Link>

                <button
                    type="button"
                    className={styles.deleteBtn}
                    onClick={() => deleteAppointment(appointment.id)}
                    title="Видалити"
                    disabled={isDeleting}
                >
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
}

export default AppointmentCard;