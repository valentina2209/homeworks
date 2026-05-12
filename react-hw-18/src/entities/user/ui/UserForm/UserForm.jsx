import { useTranslation } from 'react-i18next';
import { roles } from '@/shared/config/roles';

export function UserForm({
    formData,
    onChange,
    onSubmit,
    isLoading,
    error,
    isEdit = false,
    buttonText
}) {
    const { t } = useTranslation();

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <input
                value={formData.email}
                onChange={(e) => onChange('email', e.target.value)}
                placeholder={t('user.form.email')}
                disabled={isEdit}
                required
                className="p-2 border rounded"
            />
            <input
                value={formData.displayName}
                onChange={(e) => onChange('displayName', e.target.value)}
                placeholder={t('user.form.name')}
                disabled={isEdit}
                required
                className="p-2 border rounded"
            />
            <select
                value={formData.role}
                onChange={(e) => onChange('role', e.target.value)}
                className="p-2 border rounded"
            >
                {Object.entries(roles).map(([key, value]) => (
                    <option key={key} value={value}>
                        {value}
                    </option>
                ))}
            </select>

            <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
            >
                {isLoading ? t('common.loading') : (buttonText || t('common.save'))}
            </button>

            {error && (
                <div className="text-red-500 text-sm">
                    {error?.data?.message || t('common.error')}
                </div>
            )}
        </form>
    );
}