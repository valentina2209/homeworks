import { Link, useNavigate, useParams } from "react-router"
import styles from "./AppointmentForm.module.css"
import { useCreateAppointmentMutation, useGetAppointmentByIdQuery, useUpdateAppointmentMutation } from "@/api/slices/appointmentApi"
import Loader from "@/components/Loader/Loader"
import { useGetPatientsQuery } from "@/api/slices/patientApi"
import { useGetDoctorsQuery } from "@/api/slices/doctorApi"

function AppointmentForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEdit = Boolean(id && id !== "new")

    const { data: patients = [], isLoading: isPatientsLoading } = useGetPatientsQuery()
    const { data: doctors = [], isLoading: isDoctorsLoading } = useGetDoctorsQuery()

    const { data: appointment, isLoading: isAppointmentLoading } = useGetAppointmentByIdQuery(id, {
        skip: !isEdit,
    })

    const [createAppointment] = useCreateAppointmentMutation()
    const [updateAppointment] = useUpdateAppointmentMutation()

    if ((isEdit && isAppointmentLoading) || isPatientsLoading || isDoctorsLoading) {
        return <Loader />
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())

        try {
            if (isEdit) {
                await updateAppointment({ id, data }).unwrap()
            } else {
                await createAppointment(data).unwrap()
            }
            navigate("/appointments")
        } catch (error) {
            console.error("Помилка при збереженні:", error)
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {isEdit ? "Редагування призначення" : "Запис нового призначення"}
            </h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Оберіть пацієнта</label>
                    <select
                        className={styles.input}
                        name="patientId"
                        defaultValue={appointment?.patientId?.id || appointment?.patientId || ""}
                        required
                    >
                        <option value="" disabled>Виберіть пацієнта зі списку</option>
                        {patients.map(patient => (
                            <option key={patient.id} value={patient.id}>
                                {patient.fullName}
                            </option>
                        ))}
                    </select>

                    <label className={styles.label}>Оберіть лікаря</label>
                    <select
                        className={styles.input}
                        name="doctorId"
                        defaultValue={appointment?.doctorId?.id || appointment?.doctorId || ""}
                        required
                    >
                        <option value="" disabled>Виберіть лікаря</option>
                        {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.id}>
                                {doctor.fullName} - {doctor.specialty}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Дата призначення</label>
                        <input
                            className={styles.input}
                            type="date"
                            name="date"
                            defaultValue={appointment?.date ? appointment.date.split('T')[0] : ""}
                        />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Скарги пацієнта</label>
                        <input
                            className={styles.input}
                            name="reason"
                            defaultValue={appointment?.reason || ""}
                            placeholder="Опишіть симптоми"
                        />
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Статус</label>
                    <select className={styles.input} name="status" defaultValue={appointment?.status || "scheduled"}>
                        <option value="scheduled">Заплановано</option>
                        <option value="active">Активне</option>
                        <option value="completed">Завершено</option>
                        <option value="cancelled">Скасовано</option>
                    </select>
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
