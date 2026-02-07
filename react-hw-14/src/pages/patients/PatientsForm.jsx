import { useCreatePatientMutation, useGetPatientByIdQuery, useUpdatePatientMutation } from "@/api/slices/patientApi";
import { Link, useNavigate, useParams } from "react-router"
import styles from "./PatientsForm.module.css"
import Loader from "@/components/Loader/Loader"
import { toast } from "react-hot-toast"

function PatientsForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEdit = Boolean(id)

    const { data: patient, isLoading } = useGetPatientByIdQuery(id, {
        skip: !isEdit,
    })

    const [createPatient] = useCreatePatientMutation()
    const [updatePatient] = useUpdatePatientMutation()

    if (isEdit && isLoading) return <Loader />

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())

        try {
            if (isEdit) {
                await updatePatient({ id, data }).unwrap()
                toast.success("Дані пацієнта успішно оновлено!")
            } else {
                await createPatient(data).unwrap()
                toast.success("Нового пацієнта успішно додано!")
            }
            navigate("/patients")
        } catch (error) {
            console.error(error)
            toast.error(`Помилка: ${error.data?.message || 'Не вдалося зберегти дані'}`)
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {isEdit ? "Редагування профілю" : "Реєстрація пацієнта"}
            </h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Повне ім'я</label>
                    <input
                        className={styles.input}
                        name="fullName"
                        defaultValue={patient?.fullName || ""}
                        placeholder="Олена Ковальчук"
                        required
                    />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Дата народження</label>
                    <input
                        className={styles.input}
                        type="date"
                        name="birthDate"
                        defaultValue={patient?.birthDate || ""}
                        placeholder="22.03.1994"
                        required
                    />
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
                    <select
                        className={styles.input}
                        name="gender"
                        defaultValue={patient?.gender || ""}
                        required
                    >
                        <option value="" disabled>Оберіть стать</option>
                        <option value="male">Чоловіча</option>
                        <option value="female">Жіноча</option>
                        <option value="other">Інша</option>
                    </select>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Адреса</label>
                    <input className={styles.input} name="address" defaultValue={patient?.address || ""} placeholder="вул. Лесі Українки" />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Додаткові нотатки</label>
                    <textarea
                        className={styles.input}
                        name="notes"
                        defaultValue={patient?.notes || ""}
                        placeholder="Діагноз або примітки"
                        rows="3"
                    />
                </div>

                <button className={styles.submitBtn} type="submit">
                    {isEdit ? "Зберегти зміни" : "Зареєструвати пацієнта"}
                </button>

                <Link className={styles.goBack} to="/patients">Повернутися назад</Link>
            </form>
        </div>
    )
}

export default PatientsForm;