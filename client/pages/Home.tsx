import useUserData from '../apis/use-user-data'
import DisplayMotivation from '../components/DisplayMotivation'
import OneTodo from '../components/OneTodo'

const id = 1

export default function Home() {
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
      <DisplayMotivation
        userId={user.id}
        name={user.name}
        avatarId={user.avatarId}
      />
      <OneTodo userId={user.id} />
    </>
  )
}
