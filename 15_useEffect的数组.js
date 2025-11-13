import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // 1.没有依赖项 初始 + 组件更新 会执行副作用函数
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // })

  // 2.传入空数组依赖 只有初始时 会执行副作用函数
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // }, [])

  // 3.传入特定依赖 初始 + 依赖项变化 会执行副作用函数
  useEffect(() => {
    console.log('副作用函数执行了')
  }, [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App