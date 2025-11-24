import { create } from "zustand"

const useStore = create((set) => {
  return {
    // 状态数据
    count: 0,
    // 状态更新函数
    increase: () => {
      // 使用set来修改数据

      // 如果直接修改状态
      // set({ count:100 })
      set((state) => ({
        count: state.count + 1
      }))
    }
  }
})

function App() {
  const { count, increase } = useStore()
  return (
    <>
      <button onClick={increase}>{count}</button>
    </>
  )
}

export default App