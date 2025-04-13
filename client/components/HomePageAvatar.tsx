import useAvatarData from "../apis/use-avatar-data"

interface Props {
  avatarId: number
}
export default function HomePageAvatar(props: Props) {
  const { data: avatar, isPending, error } = useAvatarData(props.avatarId)

  if (isPending) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  if (!avatar) {
    return
  }

  return (
    <>
      <p>{`Avatar ID: ${props.avatarId}`}</p>
      <img src={avatar.image} alt={`${avatar.name} your avatar, here to encourage you`} />
    </>
  )
}
