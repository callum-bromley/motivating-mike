import useUserData from "../apis/use-user-data"

interface Props {
  userId: number
  name: number
  avatarId: number
}

export default function DisplayMotivation(props: Props) {
  const { data: user, isPending, error } = useUserData(props.userId)

  if (isPending) {
    return (<h2>Loading...</h2>)
  }
  if (error) {
    return (<h2>Error: {error.message}</h2>)
  }
  if (!user) {
    return (<h2>No user data found</h2>)
  }
  //Get current users avatar_id
  //use avatar_id to get a list of heckles where severity = displayed todo's urgency
  //Display random Motivation
  return (
    <>
      <h1>{`User: ${user.id}`}</h1>
      <p>{user.name}</p>
      <p>{user.avatarId}</p>
    </>
  )
} todos / 2
