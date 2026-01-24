import { api } from '..'

export const appointmentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // призначення

    getAppointments: builder.query({
      query: () => '/appointments',
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
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Appointment', id },
        'Appointments',
      ],
    }),
    // | Метод  | Роут                             | Опис                   |
    // | ------ | -------------------------------- | ---------------------- |
    // | GET    | `/appointments`                  | Отримати всі записи    |
    // | GET    | `/appointments/:id`              | Один запис             |
    // | POST   | `/appointments`                  | Створити новий запис   |
    // | PUT    | `/appointments/:id`              | Оновити запис          |
    // | DELETE | `/appointments/:id`              | Видалити запис         |
    // | GET    | `/appointments?date=2025-08-01`  | Фільтр за датою        |
    // | GET    | `/appointments?patientName=іван` | Фільтр за ПІБ пацієнта |
  }),
})

export const {
  useGetAppointmentsQuery,
  useGetAppointmentByIdQuery,
  useCreateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApi
