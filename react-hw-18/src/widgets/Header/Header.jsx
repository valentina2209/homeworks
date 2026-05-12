import { LanguageSwitcher } from '@/features/language-switcher'
import { MainMenu } from './MainMenu'
import { UserInfo } from './UserInfo'

export default function Header() {
  return (
    <header style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <MainMenu />
      <LanguageSwitcher />
      <UserInfo />
    </header>
  )
}
