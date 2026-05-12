import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2">
            {['uk', 'en'].map((lang) => (
                <button
                    key={lang}
                    onClick={() => toggleLanguage(lang)}
                    className={`text-xs font-bold uppercase p-1 rounded transition-colors ${i18n.language === lang
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                >
                    {lang}
                </button>
            ))}
        </div>
    );
};