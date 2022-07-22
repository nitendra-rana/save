import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(14)

  return (
    <div className="App"> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </div>
  )
}

export default App
