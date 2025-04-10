export interface AvatarData {
  name: string
  description: string
  image: string
}

export interface Avatar extends AvatarData {
  id: number
}
