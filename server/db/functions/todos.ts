import { Todo, TodoData } from '../../../client/Models/todos'
import connection from '../connection'
// import connection from './connection'

//This where the functions for

// getTodos
// getTodosBy____
// editTodo
// deleteTodo
// AddTodo

// add todo
export async function addTodo(data: TodoData) {
  const { task, urgency, created, due, completed, userId } = data
  const newTodo = {
    // id,
    task,
    urgency,
    created,
    due,
    completed,
    user_id: userId,
  }
  const results = await connection('todos').insert(newTodo)
  return results
}

// edit todo

export async function updateTodo(updatedTodo: Todo) {
  const todo: Todo = await connection('todos')
    .where('todos.id', updatedTodo.id)
    .update('task', updatedTodo.task)
    .update('urgency', updatedTodo.urgency)
    .update('created', updatedTodo.created)
    .update('due', updatedTodo.due)
    .update('completed', updatedTodo.completed)
    .update('userId', updatedTodo.userId)

  return todo
}

// delete todo

export async function deleteTodo(id: number) {
  const results = await connection ('todos').del().where('todos.id', id)
  return results
}