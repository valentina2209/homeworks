import { Children } from 'react'

function ReverseComp({ children }) {
  const newChildren = Children.toArray(children)
  console.log(newChildren)

  return <>{newChildren.reverse()}</>
}

export default ReverseComp
