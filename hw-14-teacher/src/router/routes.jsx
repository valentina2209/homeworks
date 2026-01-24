import AppointmentForm from '@/pages/appointments/AppointmentForm'
import AppointmentsList from '@/pages/appointments/AppointmentsList'
import DoctorForm from '@/pages/doctors/DoctorForm'
import DoctorsList from '@/pages/doctors/DoctorsList'
import Home from '@/pages/Home'
import MainLayout from '@/layouts/MainLayout'
import PageNotFound from '@/pages/PageNotFound'
import PatientsForm from '@/pages/patients/PatientsForm'
import PatientsList from '@/pages/patients/PatientsList'

export const routes = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        meta: { title: 'Головна' },
      },
      // ------  Пацієнти
      {
        path: 'patients',
        meta: { title: 'Пацієнти' },
        children: [
          {
            index: true,
            Component: PatientsList,
          },
          {
            path: 'new',
            Component: PatientsForm,
          },
          {
            path: ':id',
            Component: PatientsForm,
          },
        ],
      },
      // ------  Лікарі
      {
        path: 'doctors',
        meta: { title: 'Лікарі' },
        children: [
          {
            index: true,
            Component: DoctorsList,
          },
          {
            path: 'new',
            Component: DoctorForm,
          },
          {
            path: ':id',
            Component: DoctorForm,
          },
        ],
      },
      // ------  Призначення
      {
        path: 'appointments',
        meta: { title: 'Призначення' },
        children: [
          {
            index: true,
            Component: AppointmentsList,
          },
          {
            path: 'new',
            Component: AppointmentForm,
          },
          {
            path: ':id',
            Component: AppointmentForm,
          },
        ],
      },
      {
        path: '*',
        Component: PageNotFound,
      },
    ],
  },
]
