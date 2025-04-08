export interface HeckleData {
  todos_id: number
  avatar_id: number
  heckle: string
  severity: number
}

export interface Heckle extends HeckleData {
  id: number
}
