function SlotsTestComp({
  headerContent,
  mainContent,
  footerContent,
  children,
}) {
  return (
    <div>
      <h1>Мій компонент</h1>
      <header>{headerContent}</header>
      <hr />
      <main>{mainContent}</main>
      <hr />
      {!!children && children}
      <hr />
      <footer>{footerContent}</footer>
    </div>
  )
}

export default SlotsTestComp
