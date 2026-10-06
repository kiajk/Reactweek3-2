import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  const id = setInterval(() => {
    setCount(pervCount => pervCount + 1)
  },1000)

  return () => {
    clearInterval(id)
  }
}, [])

  return (
    <div>
      <h1>Timer</h1>
      <p>{count}</p>
    </div>
  )
}

export default App