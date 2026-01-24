import { useCreatePatientsMutation } from '@/api/slices/patientApi'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const emptyPatientData = {
  fullName: '',
  birthDate: '',
  gender: '',
  phone: '',
  email: '',
  address: '',
  notes: '',
}

function PatientsForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [dataForm, setDataForm] = useState({ ...emptyPatientData })
  const [createPatients] = useCreatePatientsMutation()

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPatients(dataForm)
    setDataForm({ ...emptyPatientData })
    navigate('/patients')
  }

  const buttonLabel = id ? 'Зберегти' : 'Додати'

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full name :
            <input
              type="text"
              name="fullName"
              value={dataForm.fullName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            birthDate :
            <input
              type="text"
              name="birthDate"
              value={dataForm.birthDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            gender :
            <input
              type="text"
              name="gender"
              value={dataForm.gender}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            phone :
            <input
              type="text"
              name="phone"
              value={dataForm.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            email :
            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            address :
            <input
              type="text"
              name="address"
              value={dataForm.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            notes :
            <input
              type="text"
              name="notes"
              value={dataForm.notes}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">{buttonLabel}</button>
      </form>
    </div>
  )
}

export default PatientsForm

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
