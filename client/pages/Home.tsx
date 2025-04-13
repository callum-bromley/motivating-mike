import { useState } from 'react'
import DopamineHit from '../components/DopamineHit'
import OneTodo from '../components/OneTodo'

const id = 1

export default function Home() {
  const [showDopamineHit, setShowDopamineHit] = useState(false)

  const handleButtonClick = () => {
    setShowDopamineHit((prev) => !prev) // Toggle the state
  }

  return (
    <>
      <h1>Home Page Component placeholder</h1>
      {!showDopamineHit ? (
        <>
          <OneTodo userId={id} />
          <button onClick={handleButtonClick}>Dopamine Hit</button>
        </>
      ) : (
        <>
          <DopamineHit userId={id} />
          <button onClick={handleButtonClick}>Get Real</button>
        </>
      )}
    </>
  )
}
