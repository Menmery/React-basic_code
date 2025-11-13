import { useEffect, useState } from 'react'

const URL = 'http://geek.itheima.net/v1_0/channels'

function App() {
  const [list, setList] = useState([])
  // 组件渲染完毕后 useEffect 才会执行
  useEffect(() => {
    // 获取频道列表
    async function getList() {
      // fetch 是浏览器原生提供的接口，可以用来发起网络请求
      const res = await fetch(URL)
      const jsonRes = await res.json()
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      <ul>
        {
          list.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App