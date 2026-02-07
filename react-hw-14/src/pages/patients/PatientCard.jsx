import { useDeletePatientMutation } from "@/api/slices/patientApi";
import styles from "./PatientCard.module.css"
import { Link } from "react-router";
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";
import Swal from "sweetalert2";


function PatientCard({ patient }) {
    const [deletePatient, { isLoading }] = useDeletePatientMutation()

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
                await deletePatient(id).unwrap()
                Swal.fire('Видалено!', 'Запис було успішно видалено.', 'success')
            } catch (error) {
                console.error(error)
                Swal.fire('Помилка!', 'Не вдалося видалити запис.', 'error')
            }
        }
    }
    return (
        <div className={styles.row}>
            <div className={styles.patientProfile}>
                <div className={styles.avatar}>
                    {patient.fullName[0]}
                </div>

                <div className={styles.nameInfo}>
                    <span className={styles.name}>{patient.fullName}</span>
                    <span className={styles.gender}>{patient.gender}</span>

                </div>
            </div>

            <div className={styles.contactData}>{patient.birthDate}</div>
            <div className={styles.contactData}>{patient.phone}</div>
            <div className={styles.contactData}>{patient.email}</div>
            <div className={styles.contactData}>{patient.notes}</div>

            <div className={styles.actionsContainer}>
                <Link
                    to={`/patients/${patient.id}`}
                    className={styles.viewBtn}
                    title="Детальний перегляд"
                >
                    ...
                </Link>

                <Link
                    to={`/patients/${patient.id}/edit`}
                    className={styles.editBtn}
                    title="Редагувати"
                >
                    <EditIcon />
                </Link>

                <button
                    type="button"
                    className={styles.deleteBtn}
                    onClick={handleDelete}
                    title="Видалити"
                    disabled={isLoading}
                >
                    <DeleteIcon />
                </button>
            </div>
        </div>


    )
}

export default PatientCard;