export interface HeckleData {
  todosId: number
  avatarId: number
  heckle: string
  severity: number
}

export interface Heckle extends HeckleData {
  id: number
}
