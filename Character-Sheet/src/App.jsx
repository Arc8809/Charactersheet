import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const Strength = 0
  const Dexterity = 0
  const Constitution = 0
  const Intelligence = 0
  const Wisdom = 0
  const Charisma = 0
  const MaxHp = 0
  const TempHp = 0
  const Ac = 0
  const Speed = 0
  const Initiative = 0
  const HitDice = '1d4'


  return (
    <>
      <h1>Character Sheet</h1>
      <div className="card">
       <div className="stats">
        <h2>Strength: {Strength}</h2>
        <h2>Dexterity: {Dexterity}</h2>
        <h2>Constitution: {Constitution}</h2> 
        <h2>Intelligence: {Intelligence}</h2>
        <h2>Wisdom: {Wisdom}</h2>
        <h2>Charisma: {Charisma}</h2>
       </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
    </>
  )
}

export default App
