export interface UserData {
  name: string
  avatarId: number
}

export interface User extends UserData {
  id: number
}
