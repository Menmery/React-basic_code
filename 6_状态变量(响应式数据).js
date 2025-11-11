import { useState } from "react"

function App() {
  // 1.调用useState添加一个状态变量
  // count 就是状态变量
  // setCount 就是更新状态变量的函数
  const [count, setCount] = useState(0)

  // 2.事件回调
  const changeCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button onClick={changeCount}>{count}</button>
    </div>
  );
}

export default App;
