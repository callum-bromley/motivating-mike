export interface TodoData {
  task: string
  status: boolean
  urgency: number
  created: string
  due: string
  userId: number
}

export interface Todo extends TodoData {
  id: number
}
