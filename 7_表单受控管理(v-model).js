import { useState } from "react"

function App() {
  const [value, setValue] = useState('')
  return (
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export default App;
