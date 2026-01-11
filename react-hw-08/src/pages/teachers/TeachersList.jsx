import { useEffect, useState } from 'react'
import useTeachersApi from '../../hooks/useTeachersApi'
import Loader from "../../components/Loader"
import { useNavigate } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import axios from 'axios'
import apiRoutes from '../../api/apiRoutes'
import styles from './TeachersList.module.css'
import TeacherCard from '../../components/teachers/TeacherCard'


function TeachersList() {
  const [selectedTeachersIdList, setSelectedTeachersIdList] = useState([])
  const navigate = useNavigate()

  const {
    data: teachersList,
    error,
    isLoading,
    fetchTeachers,
  } = useTeachersApi()

  useEffect(() => {
    fetchTeachers()
  }, [fetchTeachers])

  const onSelect = (teacherId) => {
    if (selectedTeachersIdList.includes(teacherId))
      setSelectedTeachersIdList((prevList) =>
        prevList.filter((el) => el !== teacherId)
      )
    else setSelectedTeachersIdList((prevList) => [...prevList, teacherId])
  }

  const handleEdit = (teacherId) => {
    navigate(frontRoutes.navigate.teachers.edit.replace(':id', teacherId))
  }

  const handleDelete = async (teacherId) => {
    try {
      await axios.delete(apiRoutes.deleteTeacher(teacherId))
      fetchTeachers()
    } catch (error) {
      console.log("Помилка при видаленні:", error)
    }
  }

  const gotoMeetings = () => {
    const teachersListForMeetings = teachersList.filter((teacher) =>
      selectedTeachersIdList.includes(teacher.id)
    )
    navigate(frontRoutes.navigate.meeting, {
      state: {
        teachersListForMeetings,
      },
    })
  }

  if (isLoading) return <Loader />
  if (error) return <div className={styles.errorMessage}>Error</div>

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.mainTitle}>Список вчителів</h1>

      <div className={styles.toBar}>
        <button
          className={styles.addBtn}
          onClick={() => navigate(frontRoutes.navigate.teachers.add)}
        >
          Додати нового вчителя
        </button>

        {!!selectedTeachersIdList.length && (
          <button className={styles.meetingBtn} onClick={gotoMeetings}>
            {`Викликати ${selectedTeachersIdList.length} вчителів на збори`}
          </button>
        )}
      </div>

      <div className={styles.list}>
        {teachersList.length === 0 ? (
          <div className={styles.emptyMessage}>Список порожній</div>
        ) : (
          teachersList.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              onSelect={onSelect}
              isSelected={selectedTeachersIdList.includes(teacher.id)}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TeachersList
