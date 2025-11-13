import { createContext, useContext } from 'react'

//  1.创建上下文对象
const MsgContext = createContext()

function A() {
  return (
    <div>
      this is A
      <B></B>
    </div>
  )
}

function B() {
  // 3.底层组件接收
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B , {msg}
    </div>
  )
}

function App() {
  const msg = 'this is app msg'
  return (
    <div>
      {/* 2.在顶层组件使用Provider提供数据 */}
      <MsgContext.Provider value={msg}>
        this is App
        <A></A>
      </MsgContext.Provider>
    </div>
  )
}

export default App