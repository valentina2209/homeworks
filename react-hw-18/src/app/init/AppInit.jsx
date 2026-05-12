import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/shared/config/firebase-config'
import { logout } from '@/features/auth'

import { useRefreshMutation } from '@/features/auth/api/authApi'
// import { useTranslation } from 'react-i18next'
import i18n from '@/shared/i18n/i18n'

export function AppInit() {
  const dispatch = useDispatch()
  // const { i18n } = useTranslation
  const [refresh] = useRefreshMutation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await refresh().unwrap()
        } catch {
          dispatch(logout())
        }
      } else {
        dispatch(logout())
      }
    })
    return () => unsubscribe()
  }, [dispatch, refresh])

  useEffect(() => {
    const handleStorageChange = (event) => {
      console.log('Подія storage спрацювала!', event.key, event.newValue);
      if (event.key === 'i18nextLng') {
        const newLng = event.newValue
        if (newLng && i18n.language !== newLng) {
          i18n.changeLanguage(newLng)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return null
}
