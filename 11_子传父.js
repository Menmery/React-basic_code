import { useState } from "react"

function Son({ onGetMsg }) {
  const sonMsg = 'this is son msg'
  return (
    <div>
      <button onClick={() => onGetMsg(sonMsg)}>send</button>
    </div>
  )
}


function App() {
  const [msg, setMsg] = useState('')
  // 提供子组件方法 修改响应式数据
  const getMsg = (msg) => {
    setMsg(msg)
  }
  return (
    <div>
      App: {msg}
      <Son onGetMsg={getMsg} />
    </div>
  )
}

export default App