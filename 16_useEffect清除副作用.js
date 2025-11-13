import { useEffect, useState } from 'react'

function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中')
    }, 1000)

    // 清楚副作用
    // 在组件卸载时自动执行 调用函数
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div>this is son</div>
  )
}

function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      this is app
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载son</button>
    </div>
  )
}

export default App