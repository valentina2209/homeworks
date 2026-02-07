import { useCreateDoctorMutation, useGetDoctorByIdQuery, useUpdateDoctorMutation } from "@/api/slices/doctorApi"
import { Link, useNavigate, useParams } from "react-router"
import styles from "./DoctorForm.module.css"
import Loader from "@/components/Loader/Loader"
import { toast } from "react-hot-toast"

function DoctorForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEdit = Boolean(id)

    const { data: doctor, isLoading } = useGetDoctorByIdQuery(id, {
        skip: !isEdit,
    })

    const [createDoctor] = useCreateDoctorMutation()
    const [updateDoctor] = useUpdateDoctorMutation()

    if (isEdit && isLoading) return <Loader />

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())

        try {
            if (isEdit) {
                await updateDoctor({ id, data }).unwrap()
                toast.success("Дані лікаря успішно оновлено!")
            } else {
                await createDoctor(data).unwrap()
                toast.success("Нового лікаря успішно додано!")
            }
            navigate("/doctors")
        } catch (error) {
            console.error(error)
            toast.error(`Помилка: ${error.data?.message || "Не вдалося зберегти дані"}`)
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {isEdit ? "Редагування профілю" : "Реєстрація лікаря"}
            </h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Повне ім'я</label>
                    <input className={styles.input} name="fullName" defaultValue={doctor?.fullName || ""} placeholder="Олена Ковальчук" required />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Спеціалізація</label>
                    <input className={styles.input} name="specialty" defaultValue={doctor?.specialty || ""} placeholder="Терапевт" required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Email</label>
                        <input className={styles.input} type="email" name="email" defaultValue={doctor?.email || ""} placeholder="mail@example.com" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Телефон</label>
                        <input className={styles.input} type="tel" name="phone" defaultValue={doctor?.phone || ""} placeholder="+380..." />
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Номер кабінету</label>
                    <input className={styles.input} name="room" defaultValue={doctor?.room || ""} placeholder="101" />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Додаткові нотатки</label>
                    <input className={styles.input} name="notes" defaultValue={doctor?.notes || ""} placeholder="Графік роботи або примітки" />
                </div>

                <button className={styles.submitBtn} type="submit">
                    {isEdit ? "Зберегти зміни" : "Додати спеціаліста"}
                </button>


                <Link className={styles.goBack} to="/doctors">Повернутися назад</Link>

            </form>
        </div>
    )
}

export default DoctorForm
