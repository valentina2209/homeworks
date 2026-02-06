import { Link } from "react-router";
import { useDeleteDoctorMutation } from "@/api/slices/doctorApi";
import styles from "./DoctorCard.module.css"
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";

function DoctorCard({ doctor }) {
    const [deleteDoctor, { isLoading }] = useDeleteDoctorMutation()

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
                    onClick={() => deleteDoctor(doctor.id)}
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







