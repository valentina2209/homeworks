import { useDeletePatientMutation } from "@/api/slices/patientApi";
import styles from "./PatientCard.module.css"
import { Link } from "react-router";
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";

function PatientCard({ patient }) {
    const [deletePatient, { isLoading }] = useDeletePatientMutation()

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
                    to={`/patients/${patient.id}`}
                    className={styles.editBtn}
                    title="Редагувати"
                >
                    <EditIcon />
                </Link>

                <button
                    type="button"
                    className={styles.deleteBtn}
                    onClick={() => deletePatient(patient.id)}
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