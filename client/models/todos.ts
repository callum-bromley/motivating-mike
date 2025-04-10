export interface TodoData {
  task: string
  urgency: number
  created: string
  due: string
  completed: string
  userId: number
}

export interface Todo extends TodoData {
  id: number
}
