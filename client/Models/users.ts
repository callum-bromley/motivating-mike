export interface UserData {
  name: string
  avatar_id: number
}

export interface User extends UserData {
  id: number
}
