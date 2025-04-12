export interface UserData {
  auth_id: string
  name: string
  avatarId: number
}

export interface User extends UserData {
  id: number
}
