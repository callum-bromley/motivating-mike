import { Todo } from "../models/todos"

export default function filterTodos(todos: Todo[]) {

  let filteredTodos = todos.filter((todo) => todo.urgency === 3)
  let randomTodo = null

  if (filteredTodos.length === 0) {
    filteredTodos = todos.filter((todo) => todo.urgency === 2)
  }
  if (filteredTodos.length === 0) {
    filteredTodos = todos.filter((todo) => todo.urgency === 1)
  }
  if (filteredTodos.length > 0) {
    filteredTodos = todos.filter((todo) => todo.completed === null)
  }
  if (filteredTodos.length > 0) {
    const randomChoice = Math.floor(Math.random() * filteredTodos.length)
    randomTodo = filteredTodos[randomChoice]
  }

  return randomTodo

}
