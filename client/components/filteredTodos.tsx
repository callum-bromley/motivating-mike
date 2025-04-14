import { Todo } from '../models/todos'

export default function ReverseFilterTodos(todos: Todo[]) {
  let filteredTodos: Todo[] = []

  for (let urgency = 3; urgency >= 1; urgency--) {
    filteredTodos = todos.filter((todo) => todo.urgency === urgency)
    if (filteredTodos.length > 0) break
  }

  if (filteredTodos.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredTodos.length)
    return filteredTodos[randomIndex]
  }

  return null
}
