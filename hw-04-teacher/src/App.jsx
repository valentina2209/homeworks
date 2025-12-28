import { useState } from 'react'
import './App.css'
import CollapsiblePanel from './components/CollapsiblePanel'
import SlotsTestComp from './components/SlotsTestComp'
// import ProductsList from './components/ProductsList/ProductsList'
// import UserProfile from './components/UserProfile'
import Modal from './components/Moldal/Modal'

// import TodoManager from './Todo/TodoManager'
import DataLoader from './components/DataLoader'
import ChildrenMapComp from './ChildrenMapComp'
import OnlyOneChildComp from './OnlyOneChildComp'
import ReverseComp from './ReverseCompReverse'
import TodoList from './components/TodoList/TodoList'
// import ReverseComp from './ReverseComp'
// import { products } from './data/productsList'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  // const user = { name: 'Ivan', age: 21, isActive: true }
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Відкрити модальне вікно</button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Заголовок модального вікна</h2>
          <p>Це якийсь текст.</p>
        </Modal>

        {/* --------------------------- */}
        {/* <SlotsTestComp
          headerContent={<h2>Історія</h2>}
          mainContent={<h3>Дуже весела історія</h3>}
          footerContent={<h2>Автор Іван </h2>}
        />
        <SlotsTestComp
          headerContent={<h2>Ідея</h2>}
          mainContent={
            <img src="https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg " />
          }
          footerContent={<h2>Завод </h2>}
        >
          <h3>Дуже смачні!!!</h3>
        </SlotsTestComp>
        <SlotsTestComp
          headerContent={<h2>Мої мрії</h2>}
          mainContent={
            <ul>
              <li>Вивчити React</li>
              <li>Знайти роботу</li>
              <li>Працювати над цікавими проєктами</li>
            </ul>
          }
          footerContent={<h2>Автор Іван </h2>}
        /> */}
        {/* ----------------------- */}
        {/* <CollapsiblePanel title="Що таке React?">
          <p>React – це JavaScript-бібліотека .</p>
          <p>Вона розроблена Facebook.</p>
        </CollapsiblePanel>
        <CollapsiblePanel title="Як працює props.children?">
          <ul>
            <li>Це робить компоненти більш гнучкими.</li>
            <li>Дозволяє створювати компоненти-обгортки.</li>
          </ul>
        </CollapsiblePanel>
        <CollapsiblePanel title="Контактна інформація">
          <div>
            <h4>Наші контакти:</h4> <p>Email: info@example.com</p>
            <p>Телефон: +380 00 000 0000</p>
            <p>Адреса: Вулиця Кодування, 1, м. Київ</p>
          </div>
        </CollapsiblePanel> */}
        {/* ---------------- */}
        {/* <ProductsList products={products} /> */}
        {/* <UserProfile name={user.name} age={user.age} isActive={user.isActive} /> */}
        {/* <UserProfile {...user} /> */}

        {/* ========================= */}
        {/*
        <DataLoader url="https://jsonplaceholder.typicode.com/todos/1">
          {(data) => (
            <>
              <div>{data.id}</div>
              <div>{data.title}</div>
            </>
          )}
        </DataLoader>

        <DataLoader url="https://jsonplaceholder.typicode.com/todos/1">
          {(data) => (
            <>
              <h1>Відповідь від серевера</h1>
              <div>{data.title}</div>
              <hr />
            </>
          )}
        </DataLoader>
        <DataLoader url="https://jsonplaceholder.typicode.com/todos/1" /> */}

        {/* ---------------------------- */}
        {/* <ChildrenMapComp>
          <div>1111</div>
          <div>22222</div>
          <div>3333</div>
          <div>4444</div>
        </ChildrenMapComp> */}
        {/* ---------------------------- */}
        {/* <OnlyOneChildComp>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
        </OnlyOneChildComp> */}
        {/* ---------------------------- */}
        {/* <ReverseComp>
          <div>1111</div>
          <div>22222</div>
          <div>3333</div>
          <div>4444</div>
        </ReverseComp> */}
        {/* ---------------------------- */}

        {/* ==================== */}
        {/* <DataCard
          logo={'https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg '}
          badgeText="акція"
          title="Samsumg"
        >
          <div>Text</div>
        </DataCard>
        <DataCard
          logo={'https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg '}
          badgeText="акція"
          title="Samsumg"
          footer={<div>Price: 2000грн.</div>}
        >
          <img
            style={{
              width: '90px',
            }}
            src="https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg"
          />
        </DataCard> */}

        {/* <TodoList /> */}
      </div>
    </>
  )
}

export default App
