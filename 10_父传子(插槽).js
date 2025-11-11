// 父传子

function Son(props) {
  return <div>son name: {props.children}</div>
}

function App() {
  return (
    <div>
      <Son >
        <span>son content</span>
      </Son>
    </div>
  )
}

export default App;
