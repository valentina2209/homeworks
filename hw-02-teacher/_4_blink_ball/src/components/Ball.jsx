import { memo } from 'react'

function Ball() {
  console.log('Ball')

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        borderRadius: '50%',
      }}
    ></div>
  )
}

export default memo(Ball)
