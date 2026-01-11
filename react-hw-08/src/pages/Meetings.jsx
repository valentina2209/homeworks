import { useLocation, useNavigate } from 'react-router'
import TeacherCard from '../components/teachers/TeacherCard'
import styles from "./Meetings.module.css"
import frontRoutes from '../routes/frontRoutes'

function Meetings() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const teachersListForMeetings = state?.teachersListForMeetings

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Учасники зборів</h1>

      {teachersListForMeetings?.length ? (
        <>
          <div className={styles.infoBox}>
            Список вчителів ({teachersListForMeetings.length}) для виклику на збори:
          </div>

          <div className={styles.list}>
            {teachersListForMeetings.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.infoBox}>Список вчителів не задано</div>
      )}

      <button
        className={styles.backBtn}
        onClick={() => navigate(frontRoutes.navigate.teachers.root)}
      >
        Повернутися до списку вчителів
      </button>
    </div>
  )
}

export default Meetings
