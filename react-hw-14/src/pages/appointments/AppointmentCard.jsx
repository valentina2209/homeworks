import { useDeleteAppointmentMutation, useUpdateAppointmentMutation } from "@/api/slices/appointmentApi";
import styles from "./AppointmentCard.module.css";
import { Link } from "react-router";
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";
import Swal from "sweetalert2";

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

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Ви впевнені?',
            text: "Цю дію неможливо буде скасувати!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d9488',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Так, видалити!',
            cancelButtonText: 'Скасувати'
        })

        if (result.isConfirmed) {
            try {
                await deleteAppointment(id).unwrap()
                Swal.fire('Видалено!', 'Запис було успішно видалено.', 'success')
            } catch (error) {
                console.error(error)
                Swal.fire('Помилка!', 'Не вдалося видалити запис.', 'error')
            }
        }
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
                    onClick={() => handleDelete(appointment.id)}
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