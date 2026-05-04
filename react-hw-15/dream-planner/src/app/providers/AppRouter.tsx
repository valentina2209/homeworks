import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../pages/home/HomePage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<div className="text-center mt-10">Сторінку не знайдено 404</div>} />
        </Routes>
    )
}