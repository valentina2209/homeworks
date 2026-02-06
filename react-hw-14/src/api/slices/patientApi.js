import { api } from "..";

//## Пацієнти(`/patients`)
//| Метод | Роут | Опис |
//| ------| --------------------- | --------------------------- |
//| GET | `/patients` | Отримати всіх пацієнтів |
//| GET | `/patients/:id` | Деталі пацієнта |
//| POST | `/patients` | Додати нового пацієнта |
//| PUT | `/patients/:id` | Оновити пацієнта |
//| PATCH | `/patients/:id` | Часткове оновлення пацієнта |
//| DELETE | `/patients/:id` | Видалити пацієнта |
//| GET | `/patients?name=іван` | Фільтр за ПІБ |


export const patientApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: (params) => ({
                url: '/patients',
                params,
            }),
            providesTags: ['Patients'],
        }),
        getPatientById: builder.query({
            query: (id) => `/patients/${id}`,
            providesTags: (result, error, id) => [{ type: 'Patient', id }],
        }),
        createPatient: builder.mutation({
            query: (data) => ({
                url: '/patients',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Patients'],
        }),
        updatePatientFull: builder.mutation({
            query: ({ id, data }) => ({
                url: `/patients/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Patient', id },
                'Patients',
                'Appointments',
            ],
        }),
        updatePatient: builder.mutation({
            query: ({ id, data }) => ({
                url: `/patients/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Patient', id },
                'Patients',
                'Appointments',
            ],
        }),
        deletePatient: builder.mutation({
            query: (id) => ({
                url: `/patients/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Patient', id },
                'Patients',
                'Appointments',
            ],
        })
    })
})

export const {
    useGetPatientsQuery,
    useGetPatientByIdQuery,
    useCreatePatientMutation,
    useUpdatePatientMutation,
    useUpdatePatientFullMutation,
    useDeletePatientMutation,
} = patientApi