import { useEffect, useState } from 'react'

function TestComp() {
  const [counter, setCounter] = useState(0)
  const [dogImg, setDogImg] = useState(null)
  const [errMessage, setErrMessage] = useState(null)
  const [updateKey, setUpdateKey] = useState(0)

  useEffect(() => {
    async function fetchData() {
      setErrMessage(null)
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      console.log(data)

      if (data?.status === 'success') setDogImg(data.message)
      else {
        setDogImg(null)
        setErrMessage('Помилка завантаження!')
      }
    }
    fetchData()
  }, [updateKey])

  function handleClick() {
    setCounter((prevCount) => prevCount + 1)
  }
  function updateKeyValue() {
    setUpdateKey((prevUpdateKey) => prevUpdateKey + 1)
  }

  return (
    <div>
      <div>
        {!!dogImg && <img src={dogImg} alt="Dog" style={{ width: '200px' }} />}
      </div>
      {errMessage && <div>{errMessage}</div>}
      <div>{counter}</div>
      <button onClick={handleClick}>Add</button>
      <hr />
      <button onClick={updateKeyValue}>Update image</button>
    </div>
  )
}

export default TestComp
