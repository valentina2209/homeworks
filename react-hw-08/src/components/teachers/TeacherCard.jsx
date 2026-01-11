import styles from './TeacherCard.module.css'

function TeacherCard({ teacher, onSelect, isSelected, onEdit, onDelete }) {
  return (
    <div className={`${styles.container} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.mainInfo}>
        <div className={styles.avatarWrapper}>
          <img src={teacher.photo} alt="teacher" className={styles.avatar} />
        </div>
        <div className={styles.infoText}>
          <div className={styles.name}>{teacher.name}</div>
          <div className={styles.subject}>
            <span>Предмет:</span> {teacher.subject}
          </div>
        </div>

        {onSelect && (
          <button
            onClick={() => onSelect(teacher.id)}
            className={`${styles.selectBtn} ${isSelected ? styles.btnSelected : ""}`}
          >
            {isSelected ? 'Вибранo' : 'Вибрати на збори'}
          </button>
        )}
      </div>

      <div className={styles.actions}>
        {onEdit && (
          <button onClick={() => onEdit(teacher.id)} className={styles.buttonBlue}>
            Редагувати
          </button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(teacher.id)} className={styles.buttonRed}>
            Видалити
          </button>
        )}
      </div>
    </div>
  )
}

export default TeacherCard
