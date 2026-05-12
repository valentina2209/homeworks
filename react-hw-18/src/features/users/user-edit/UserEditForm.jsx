import { useState } from 'react'
import { UserForm } from '@/entities/user'
import { useUpdateUserRoleMutation, useAddUserMutation } from '@/entities/user/api/userApi'

export function UserEditForm({ user = {}, onSuccess }) {
  const [formData, setFormData] = useState({
    email: user?.email || '',
    displayName: user?.displayName || '',
    role: user?.role || 'user'
  })

  const [updateUserRole, { isLoading: isUpdating, error: updateError }] = useUpdateUserRoleMutation()
  const [addUser, { isLoading: isAdding, error: addError }] = useAddUserMutation()

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (user.id) {
      await updateUserRole({ uid: user.id, role: formData.role })
    } else {
      await addUser(formData)
    }
    onSuccess?.()
  }

  return (
    <UserForm
      formData={formData}
      onChange={handleFieldChange}
      onSubmit={handleSubmit}
      isLoading={isUpdating || isAdding}
      error={updateError || addError}
      isEdit={!!user.id}
      buttonText={user.id ? "Зберегти" : "Додати"}
    />
  )
}