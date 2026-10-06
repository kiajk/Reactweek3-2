import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  document.title = `Count: ${count}`
  }, [count])
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>
        +
      </button>
       <button onClick={() => setCount(count-1)}>
        -
      </button>
    </div>
  )
}

export default App