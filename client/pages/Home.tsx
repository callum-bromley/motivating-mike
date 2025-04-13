import { useState } from 'react'
import DopamineHit from '../components/DopamineHit'
import OneTodo from '../components/OneTodo'
import useUserData from '../apis/use-user-data'
import HomePageAvatar from '../components/HomePageAvatar'

const id = 1

export default function Home() {
  const [showDopamineHit, setShowDopamineHit] = useState(false)

  const handleButtonClick = () => {
    setShowDopamineHit((prev) => !prev)
  }

  const { data: user, isPending, error } = useUserData(id)

  if (isPending) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error: {error.message}</h2>
  }
  if (!user) {
    return <h2>No user data found</h2>
  }

  return (
    <>
      <h1>Home Page Component placeholder</h1>
      {!showDopamineHit ? (
        <>
          <HomePageAvatar avatarId={user.avatarId} />
          <OneTodo userId={user.id} name={user.name} avatarId={user.avatarId} />
          <button onClick={handleButtonClick}>Dopamine Hit</button>
        </>
      ) : (
        <>
          <HomePageAvatar avatarId={user.avatarId} />
          <DopamineHit userId={id} />
          <button onClick={handleButtonClick}>Get Real</button>
        </>
      )}
    </>
  )
}
