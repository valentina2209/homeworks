import './App.css'

import TaskManager from './components/TasksManager/TaskManager'

//import { tasksList, workersList } from './data/6_tasks_devider'

import GoogleFavoritesList from './components/GoogleFavorites'
import { favoriteSources } from './data/1_data_google_favorite'

function App() {
  return (
    <>
      <div>
        <h1>Template</h1>

        {/* =========== */}
        <GoogleFavoritesList favoriteItemsList={favoriteSources} />
        {/* ========== */}
        {/*  <TaskManager tasksList={tasksList} usersList={workersList} /> */}
        {/* <AssignmentSection
          assignmentsList={[
            {
              userId: 1,
              userName: 'Андрій',
              tasksList: [
                {
                  id: 1,
                  title: 'Заповнити базу даних',
                },
                {
                  id: 2,
                  title: 'Перевірити пошту',
                },
              ],
            },
            {
              userId: 1,
              userName: 'Андрій',
              tasksList: [
                {
                  id: 1,
                  title: 'Заповнити базу даних',
                },
                {
                  id: 2,
                  title: 'Перевірити пошту',
                },
              ],
            },
          ]}
          onUserTaskDelete={() => {}}
        /> */}

        {/* ============= */}
      </div>
    </>
  )
}

export default App
