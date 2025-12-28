import { Children } from 'react'

function ChildrenMapComp({ children }) {
  return (
    <>
      {Children.map(children, (child) => (
        <>
          <div>{child}</div>
          <hr />
        </>
      ))}
    </>
  )
}

export default ChildrenMapComp
