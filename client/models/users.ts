export interface UserData {
  authId: string
  name: string
  avatarId: number
}

export interface User extends UserData {
  id: number
}
