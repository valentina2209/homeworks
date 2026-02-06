import { api } from "..";

//## Записи (`/appointments`)
//| Метод | Роут | Опис |
//| ------ | ----| -----|
//| GET | `/appointments` | Отримати всі записи |
//| GET | `/appointments/:id` | Один запис |
//| POST | `/appointments` | Створити новий запис |
//| PUT | `/appointments/:id` | Оновити запис |
//| PATCH | `/appointments/:id` | Часткове оновлення запису |
//| DELETE | `/appointments/:id` | Видалити запис |
//| GET | `/appointments?date=2025-08-01` | Фільтр за датою |
//| GET | `/appointments?patientName=іван` | Фільтр за ПІБ пацієнта |


export const appointmentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAppointments: builder.query({
            query: (params) => ({
                url: '/appointments',
                params,
            }),
            providesTags: ['Appointments'],
        }),
        getAppointmentById: builder.query({
            query: (id) => `/appointments/${id}`,
            providesTags: (result, error, id) => [{ type: 'Appointment', id }],
        }),
        createAppointment: builder.mutation({
            query: (data) => ({
                url: '/appointments',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Appointments'],
        }),
        updateAppointment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/appointments/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Appointment', id },
                'Patients',
                'Appointments',
                'Doctors'
            ],
        }),
        updateAppointmentFull: builder.mutation({
            query: ({ id, data }) => ({
                url: `/appointments/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Appointment', id },
                'Patients',
                'Appointments',
                'Doctors'
            ],
        }),
        deleteAppointment: builder.mutation({
            query: (id) => ({
                url: `/appointments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Appointment', id },
                'Patients',
                'Appointments',
                'Doctors'
            ],
        })
    })
})

export const {
    useGetAppointmentsQuery,
    useGetAppointmentByIdQuery,
    useCreateAppointmentMutation,
    useUpdateAppointmentMutation,
    useUpdateAppointmentFullMutation,
    useDeleteAppointmentMutation,
} = appointmentApi
