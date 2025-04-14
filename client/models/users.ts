export interface UserData {
  authId: string
  name: string
  avatarId: number | null | undefined
}

export interface User extends UserData {
  id: number
}
