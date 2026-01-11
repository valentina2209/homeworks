import { Link } from "react-router"
import frontRoutes from "../routes/frontRoutes"
import css from "./HomePage.module.css"

function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h1 className={css.title}>
          Ласкаво просимо до Додатку "Bчителі"!
        </h1>
        <p className={css.description}>
          Цей додаток допоможе вам керувати інформацією про вчителів,
          викликати їх на збори та дізнатися більш детально про додаток та його розробника
        </p>
        <div className={css.links}>
          <Link to={frontRoutes.navigate.teachers.root} className={css.link}>
            Переглянути вчителів
          </Link>
          <Link to={frontRoutes.navigate.meeting} className={css.link}>
            Переглянути список для зборів
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
