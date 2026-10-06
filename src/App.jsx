import { useState, useEffect } from "react"

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect (() => {
    function handleResize(){
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[])

  return (
    <div>
      <h1>عرض صفحه</h1>
      <p>{width}</p>
    </div>
  )
}

export default App