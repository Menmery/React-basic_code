import { useRef } from "react"

function App() {
  // 渲染完毕后 dom生成后才可用
  const inputRef = useRef(null)
  const showDom = () => {
    console.log(inputRef)
  }
  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={showDom}>获取dom</button>
    </div>
  )
}

export default App;
