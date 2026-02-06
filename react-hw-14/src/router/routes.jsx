import MainLayout from "@/layouts/MainLayout";
import AppointmentForm from "@/pages/appointments/AppointmentForm";
import AppointmentsList from "@/pages/appointments/AppointmentsList";
import DoctorForm from "@/pages/doctors/DoctorForm";
import DoctorsList from "@/pages/doctors/DoctorsList";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import PatientDetails from "@/pages/patients/PatientDetails";
import PatientsForm from "@/pages/patients/PatientsForm";
import PatientsList from "@/pages/patients/PatientsList";


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
                        Component: PatientDetails,
                    },
                    {
                        path: ':id/edit',
                        Component: PatientsForm,
                    },
                ]
            },

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
                    {
                        path: ':id/edit',
                        Component: DoctorForm,
                    },

                ],
            },

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
                    {
                        path: ':id/edit',
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