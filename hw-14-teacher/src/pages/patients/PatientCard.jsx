import { useDeletePatientMutation } from '@/api/slices/patientApi'

function PatientCard({ patient }) {
  const [deletePatient, { isLoading }] = useDeletePatientMutation()

  return (
    <tr>
      <td>{patient.fullName}</td>
      <td>{patient.birthDate}</td>
      <td>{patient.phone}</td>
      <td>{patient.email}</td>
      <td>
        <span onClick={() => deletePatient(patient.id)}>🗑️</span>
        {isLoading && <span>...</span>}
      </td>
    </tr>
  )
}

export default PatientCard

//   {
//     "id": "p014",
//     "fullName": "Юрій Мельник",
//     "birthDate": "1969-10-10",
//     "gender": "male",
//     "phone": "+380671111222",
//     "email": "melnyk.yura@gmail.com",
//     "address": "м. Рівне, вул. Київська, 17",
//     "notes": ""
//   },
