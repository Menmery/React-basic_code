// 父传子

function Son(props) {
  // props: {name: 'jack'}
  return <div>son name: {props.name}</div>
}

function App() {
  const name = 'jack'
  return (
    <div>
      <Son name={name} />
    </div>
  )
}

export default App;
