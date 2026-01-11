import { useNavigate, useParams } from 'react-router'
import useForm from '../../hooks/useForm'
import { useEffect } from 'react'
import axios from 'axios'
import apiRoutes from '../../api/apiRoutes'
import styles from "./TeachersEdit.module.css"

export default function TeachersEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { values, handleChange, setValues } = useForm({
    name: '',
    subject: '',
    photo: ''
  })

  useEffect(() => {
    const fetchTeacher = async () => {
      if (!id) return
      try {
        const res = await axios.get(apiRoutes.getTeacherById(id))
        const teacher = res.data
        setValues({
          name: teacher?.name || '',
          subject: teacher?.subject || '',
          photo: teacher?.photo || '',
        })
      } catch (error) {
        console.error("Помилка оновлення вчителя:", error)
      }
    }

    fetchTeacher()
  }, [id, setValues])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (id) {
        await axios.put(apiRoutes.updateTeacher(id), values)
      } else {
        await axios.post(apiRoutes.addTeacher, values)
      }
      navigate("/teachers")
    } catch (error) {
      console.log("Помилка при додаванні:", error)
    }
  }

  const isEditMode = !!id

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          {isEditMode ? "Редагувати вчителя" : "Додати вчителя"}
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label className={styles.label}>Ім'я:</label>
            <input
              name="name"
              placeholder="Введіть ім'я вчителя"
              value={values?.name ?? ''}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label className={styles.label}>Предмет:</label>
            <input
              name="subject"
              placeholder="Введіть предмет викладання"
              value={values?.subject ?? ''}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label className={styles.label}>Фото URL </label>
            <input
              name="photo"
              placeholder="Введіть URL фотографії"
              value={values?.photo ?? ''}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitBtn}>
              {isEditMode ? "Оновити вчителя" : "Додати вчителя"}
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={() => navigate('/teachers')}
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}
