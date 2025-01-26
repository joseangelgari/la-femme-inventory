import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react mx-auto" alt="React logo" />
      </a>
      <h1 className="text-3xl font-bold text-rose-300">¡Bienvenido a La Femme!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="text-center p-10">

      </div>
    </>
  )
}

export default App
