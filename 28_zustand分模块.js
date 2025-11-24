import { useEffect } from 'react'
import { create } from 'zustand'
const URL = 'http://geek.itheima.net/v1_0/channels'

// 创建counter相关切片
const createCounterStore = (set) => {
  return {
    count: 0,
    setCount: () => {
      set(state => ({ count: state.count + 1 }))
    }
  }
}

// 创建channel相关切片
const createChannelStore = (set) => {
  return {
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL)
      const jsonData = await res.json()
      set({ channelList: jsonData.data.channels })
    }
  }
}

// 组合切片
// ...a => 接收所有剩余的参数 (set, get, storeApi)
const useStore = create((...a) => ({
  ...createCounterStore(...a),
  ...createChannelStore(...a)
}))

function App() {
  const { count, setCount, channelList, fetchGetList } = useStore()
  useEffect(() => {
    fetchGetList()
  }, [fetchGetList])
  return (
    <>
      <button onClick={setCount}>{count}</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App