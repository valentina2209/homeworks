import { Children } from 'react'

function OnlyOneChildComp({ children }) {
  try {
    const comp = Children.only(children)
    return comp
  } catch (error) {
    console.log(error)
    return <div>Компонент має бути тільки один</div>
  }
}

export default OnlyOneChildComp
