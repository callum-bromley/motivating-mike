import TaskHistory from './TaskHistory'
import UserProfile from './UserProfile'

export default function UserHomePage() {
  return (
    <>
      <div>
        <UserProfile />
      </div>
      <div>
        <TaskHistory />
      </div>
    </>
  )
}
