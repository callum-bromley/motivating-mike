import TaskHistory from '../components/TaskHistory'
import UserProfile from '../components/UserProfile'

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
