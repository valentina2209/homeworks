function StartContent({ age, imgSrc }) {
  let content
  if (age < 16) content = <h1>Доступ заборонено!</h1>
  else content = <img style={{ width: '100px' }} src={imgSrc} alt="product" />

  return content
}

export default StartContent
