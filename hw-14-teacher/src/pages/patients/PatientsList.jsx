import { useGetPatientsQuery } from '@/api/slices/patientApi'
import PatientCard from './PatientCard'
import { Link } from 'react-router'

function PatientsList() {
  const { data: patients, error, isLoading } = useGetPatientsQuery()
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>Error...</div>
  return (
    <div>
      <h1>Список пацієнтів</h1>
      <hr />
      <Link to="/patients/new">+ Додати пацієнта</Link>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Ім"я</th>
            <th>Дата народження</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {patients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PatientsList
