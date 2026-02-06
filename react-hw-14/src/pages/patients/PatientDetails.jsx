import { useParams, useNavigate } from "react-router";
import { useGetPatientByIdQuery } from "@/api/slices/patientApi";
import Loader from "@/components/Loader/Loader";
import styles from "./PatientDetails.module.css";

function PatientDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: patient, isLoading } = useGetPatientByIdQuery(id);

    if (isLoading) return <Loader />;
    if (!patient) return <div>Пацієнта не знайдено</div>;

    return (
        <div className={styles.container}>
            <button onClick={() => navigate(-1)} className={styles.backBtn}>← Назад</button>

            <div className={styles.header}>
                <div className={styles.avatar}>{patient.fullName[0]}</div>
                <div>
                    <h1 className={styles.title}>{patient.fullName}</h1>
                    <span className={styles.badge}>{patient.gender}</span>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.infoCard}>
                    <h3>Контактна інформація</h3>
                    <p><strong>Телефон:</strong> {patient.phone}</p>
                    <p><strong>Email:</strong> {patient.email}</p>
                    <p><strong>Дата народження:</strong> {patient.birthDate}</p>
                </div>

                <div className={styles.infoCard}>
                    <h3>Медичні нотатки</h3>
                    <p>{patient.notes || "Нотатки відсутні"}</p>
                </div>
            </div>
        </div>
    );
}

export default PatientDetails;