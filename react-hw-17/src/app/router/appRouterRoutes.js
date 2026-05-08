import { frontRoutes } from '@/shared/config/routes/frontRoutes'

// Збираємо всі сторінки у папці pages

const pages = import.meta.glob('../../pages/**/*.jsx')

const pagesList = Object.keys(frontRoutes.pages)

export const appRouterRoutes = pagesList.map((page) => {
    // Якщо page вже містить .jsx, не додаємо ще раз
    const path = Object.keys(pages).find((key) =>
        key.endsWith(`/${page}.jsx`) || key.endsWith(`/${page}/ui/${page}.jsx`)
    )

    return {
        ...frontRoutes.pages[page],
        lazy: async () => {
            const importer = pages[path]

            if (!importer) {
                throw new Error(`Page module not found: ${page}. Перевірте, чи файл ${page}.jsx існує в src/pages/`)

            }

            const mod = await importer()
            return { Component: mod.default }
        },
    }
})