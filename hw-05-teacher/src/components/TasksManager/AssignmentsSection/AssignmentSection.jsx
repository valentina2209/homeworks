import AssignmentCard from './AssignmentCard'

function AssignmentSection({ assignmentsList, onUserTaskDelete }) {
  return (
    <div>
      <h1>Список призначень</h1>
      <div>
        {assignmentsList?.length > 0 ? (
          assignmentsList.map((userAssignments, index) => (
            <AssignmentCard
              key={index}
              {...userAssignments}
              onUserTaskDelete={onUserTaskDelete}
            />
          ))
        ) : (
          <div>Список призначень порожній</div>
        )}
      </div>
    </div>
  )
}

export default AssignmentSection
