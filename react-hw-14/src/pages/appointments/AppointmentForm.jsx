import { Link, useNavigate, useParams } from "react-router"
import styles from "./AppointmentForm.module.css"
import { useCreateAppointmentMutation, useGetAppointmentByIdQuery, useUpdateAppointmentMutation } from "@/api/slices/appointmentApi"
import Loader from "@/components/Loader/Loader"

function AppointmentForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEdit = Boolean(id && id !== "new")

    const { data: appointment, isLoading } = useGetAppointmentByIdQuery(id, {
        skip: !isEdit,
    })

    const [createAppointment] = useCreateAppointmentMutation()
    const [updateAppointment] = useUpdateAppointmentMutation()

    if (isEdit && isLoading) return <Loader />

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            patientId: event.target.patientId.value,
            doctorId: event.target.doctorId.value,
            date: event.target.date.value,
            reason: event.target.reason.value,
            status: event.target.status.value,
        }

        if (isEdit) {
            await updateAppointment({ id, data })
        } else {
            await createAppointment(data)
        }

        navigate("/appointments")
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {isEdit ? "Редагування призначення" : "Запис нового призначення"}
            </h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Ім'я пацієнта</label>
                    <input className={styles.input} name="patientId" defaultValue={appointment?.patientId || ""} placeholder="Олена Ковальчук" required />
                    <label className={styles.label}>Ім'я лікаря</label>
                    <input className={styles.input} name="doctorId" defaultValue={appointment?.doctorId || ""} placeholder="Терапевт" required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Дата призначення</label>
                        <input className={styles.input} type="date" name="date" defaultValue={appointment?.date || ""} placeholder="15.10.2025" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Скарги пацієнта</label>
                        <input className={styles.input} name="reason" defaultValue={appointment?.reason || ""} placeholder="Висип на шкірі" />
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Статус</label>
                    <input className={styles.input} name="status" defaultValue={appointment?.status || ""} placeholder="active" />
                </div>

                <button className={styles.submitBtn} type="submit">
                    {isEdit ? "Зберегти зміни" : "Додати призначення"}
                </button>

                <Link className={styles.goBack} to="/appointments">Повернутися назад</Link>
            </form>
        </div>
    )

}

export default AppointmentForm
