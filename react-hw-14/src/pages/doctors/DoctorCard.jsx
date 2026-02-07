import { Link } from "react-router";
import { useDeleteDoctorMutation } from "@/api/slices/doctorApi";
import styles from "./DoctorCard.module.css"
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";
import Swal from "sweetalert2";

function DoctorCard({ doctor }) {
    const [deleteDoctor, { isLoading }] = useDeleteDoctorMutation()

    const handleDelete = async (id) => {
        console.log("Видаляємо лікаря з ID:", id)
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
                await deleteDoctor(id).unwrap()
                Swal.fire('Видалено!', 'Запис було успішно видалено.', 'success')
            } catch (error) {
                console.error(error)
                Swal.fire('Помилка!', 'Не вдалося видалити запис.', 'error')
            }
        }
    }

    return (
        <div className={styles.row}>
            <div className={styles.doctorProfile}>
                <div className={styles.avatar}>
                    {doctor.fullName[0]}
                </div>

                <div className={styles.nameInfo}>
                    <span className={styles.name}>{doctor.fullName}</span>
                    <span className={styles.spec}>{doctor.specialty}</span>
                </div>
            </div>

            <div className={styles.contactData}>{doctor.email}</div>
            <div className={styles.contactData}>{doctor.phone}</div>
            <div className={styles.roomBadge}>№ {doctor.room}</div>
            <div className={styles.contactData}>
                {doctor.notes || "—"}
            </div>


            <div className={styles.actionsContainer}>

                <Link
                    to={`/doctors/${doctor.id}`}
                    className={styles.editBtn}
                    title="Редагувати"
                >
                    <EditIcon />
                </Link>

                <button
                    type="button"
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(doctor.id)}
                    title="Видалити"
                    disabled={isLoading}
                >
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )

}

export default DoctorCard;







