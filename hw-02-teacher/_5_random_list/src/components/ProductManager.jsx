import { useState } from 'react'

function ProductManager() {
  const [productList, setProductList] = useState(() => [])
  const [productTitle, setProductTitle] = useState('')
  function addProduct() {
    setProductList((prevList) => [
      ...prevList,
      {
        id: new Date().getTime(),
        title: productTitle,
      },
    ])
  }
  return (
    <>
      <div>
        <label>
          Назва товару
          <input
            type="text"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <button onClick={addProduct}>Add</button>
        </label>
      </div>
      <hr />
      <ul>
        {productList.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  )
}

export default ProductManager
