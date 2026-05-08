import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { useRefreshMutation } from '@/features/auth'

export function AppInit() {
    const [refresh] = useRefreshMutation()
    // const dispatch = useDispatch()

    useEffect(() => {
        const init = async () => {
            const hasToken = localStorage.getItem('accessToken')

            if (!hasToken) return;

            try {
                await refresh().unwrap()
                console.log('Сесія успішно оновлена ✅')
            } catch {
                localStorage.removeItem('accessToken');
                console.warn('Авторизація відсутня або токен застарів ℹ️')
            }

        }
        init()
    }, [refresh])

    return null
}


