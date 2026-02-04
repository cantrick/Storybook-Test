import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '../lib/components/Button/Button'
import { Label } from '../lib/components/Label/Label'
import Switch from '../lib/components/Switch/Switch'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Label htmlFor="counter">Counter Label:</Label>
        <Button label="count is " onClick={() => setCount((count) => count + 1)} />
      </div>
      <div>
        <Switch isOn onToggle={() => setCount((count) => count + 5)} />
      </div>
    </>
  )
}

export default App
