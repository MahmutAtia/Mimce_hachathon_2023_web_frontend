import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appbar from './componets/Appbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Appbar />
      <h1 class_name = "bg-red-500">Hi</h1>
    </>
  )
}

export default App
