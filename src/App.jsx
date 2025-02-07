import { useState } from 'react'
import './App.scss'
// Imported Components
import Desktop from './components/desktop/Desktop'
import Mobile from './components/mobile/Mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Test</h1>
     <button onClick={() => setCount(count + 1)}>Test</button>
     <span>Count: {count} </span>
     <h2>Imported components</h2>
     <Desktop />
     <Mobile />
    </>
  )
}

export default App
