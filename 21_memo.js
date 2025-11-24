import { memo, useState } from 'react'

// 默认机制：顶层组件发生重新渲染，这个组件树的子级组件都会被重新渲染

// memo
// 作用：允许组件在props没有改变的情况下跳过重新渲染
const MemoSon = memo(function Son() {
  console.log('子组件被重新渲染了')
  return <div>this is span</div>
})

function App() {
  const [, forceUpdate] = useState()
  console.log('父组件重新渲染了')
  return (
    <>
      <MemoSon />
      <button onClick={() => forceUpdate(Math.random())}>update</button>
    </>
  )
}

export default App