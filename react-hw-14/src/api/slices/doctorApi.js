import { api } from "..";

//## Лікарі (`/doctors`)
//| Метод | Роут | Опис |
//| ------| -----| -----|
//| GET | `/doctors` | Отримати список лікарів |
//| GET | `/doctors/:id` | Деталі лікаря |
//| POST | `/doctors` | Додати нового лікаря |
//| PUT | `/doctors/:id` | Оновити лікаря(повністю) |
//| PATCH | `/doctors/:id` | Часткове оновлення лікаря |
//| DELETE | `/doctors/:id` | Видалити лікаря |

export const doctorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDoctors: builder.query({
            query: () => '/admin/doctors',
            providesTags: ['Doctors'],
        }),
        getDoctorById: builder.query({
            query: (id) => `/admin/doctors/${id}`,
            providesTags: (result, error, id) => [{ type: 'Doctor', id }],
        }),
        createDoctor: builder.mutation({
            query: (data) => ({
                url: '/admin/doctors',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Doctors'],
        }),
        updateDoctor: builder.mutation({
            query: ({ id, data }) => ({
                url: `/admin/doctors/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Doctor', id },
                'Doctors',
                'Appointments',
            ],
        }),
        updateDoctorFull: builder.mutation({
            query: ({ id, data }) => ({
                url: `/admin/doctors/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Doctor', id },
                'Doctors',
                'Appointments',
            ],
        }),
        deleteDoctor: builder.mutation({
            query: (id) => ({
                url: `/admin/doctors/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Doctor', id },
                'Doctors',
                'Appointments',
            ],
        })
    })
})

export const {
    useGetDoctorsQuery,
    useGetDoctorByIdQuery,
    useCreateDoctorMutation,
    useUpdateDoctorMutation,
    useUpdateDoctorFullMutation,
    useDeleteDoctorMutation,
} = doctorApi