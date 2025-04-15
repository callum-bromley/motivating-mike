import useAvatarData from '../apis/use-avatar-data'

interface Props {
  avatarId: number | null | undefined
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
      <img
        src={avatar.image}
        alt={avatar.name}
        style={{ width: '250px', height: '250px' }}
      />
    </>
  )
}
