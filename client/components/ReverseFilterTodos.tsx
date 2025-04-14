import { Todo } from '../models/todos'

export default function ReversFilterTodos(todos: Todo[]) {
  let filteredTodos = todos.filter((todo) => todo.completed)

  if (filteredTodos.length === 0) {
    for (let urgency = 1; urgency <= 3; urgency++) {
      filteredTodos = todos.filter((todo) => todo.urgency === urgency)
      if (filteredTodos.length > 0) break
    }
  }

  if (filteredTodos.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredTodos.length)
    return filteredTodos[randomIndex]
  }

  return null
}
