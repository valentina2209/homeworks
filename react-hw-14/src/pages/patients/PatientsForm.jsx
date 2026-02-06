import { useCreatePatientMutation, useGetPatientByIdQuery, useUpdatePatientMutation } from "@/api/slices/patientApi";
import { Link, useNavigate, useParams } from "react-router";
import styles from "./PatientsForm.module.css"

function PatientsForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEdit = Boolean(id)

    const { data: patient, isLoading } = useGetPatientByIdQuery(id, {
        skip: !isEdit,
    })

    const [createPatient] = useCreatePatientMutation()
    const [updatePatient] = useUpdatePatientMutation()

    if (isEdit && isLoading) return <div>Loading....</div>

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            fullName: event.target.fullName.value,
            birthDate: event.target.birthDate.value,
            gender: event.target.gender.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            address: event.target.address.value,
            notes: event.target.notes.value
        }

        if (isEdit) {
            await updatePatient({ id, data })
        } else {
            await createPatient(data)
        }

        navigate("/patients")
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {isEdit ? "Редагування профілю" : "Реєстрація пацієнта"}
            </h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Повне ім'я</label>
                    <input className={styles.input} name="fullName" defaultValue={patient?.fullName || ""} placeholder="Олена Ковальчук" required />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Дата народження</label>
                    <input className={styles.input} name="birthDate" defaultValue={patient?.birthDate || ""} placeholder="22.03.1994" required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Електронна пошта</label>
                        <input className={styles.input} type="email" name="email" defaultValue={patient?.email || ""} placeholder="mail@example.com" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Телефон</label>
                        <input className={styles.input} type="tel" name="phone" defaultValue={patient?.phone || ""} placeholder="+380..." />
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Стать</label>
                    <input className={styles.input} name="gender" defaultValue={patient?.gender || ""} placeholder="чол" />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Адреса</label>
                    <input className={styles.input} name="address" defaultValue={patient?.address || ""} placeholder="вул. Лесі Українки" />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Додаткові нотатки</label>
                    <input className={styles.input} name="notes" defaultValue={patient?.notes || ""} placeholder="Діагноз або примітки" />
                </div>

                <button className={styles.submitBtn} type="submit">
                    {isEdit ? "Зберегти зміни" : "Додати спеціаліста"}
                </button>

                <Link className={styles.goBack} to="/patients">Повернутися назад</Link>
            </form>
        </div>
    )
}

export default PatientsForm;