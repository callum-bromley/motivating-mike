import db from './../connection.ts'
import { Todo, TodoData } from '../../../client/Models/todos'



// function convertTodosToSnakeCase(data: Todo) {
//   return {
//     id: data.id,
//     task: data.task,
//     completed: data.completed,
//     urgency: data.urgency,
//     created: data.created,
//     due: data.due,
//     user_id: data.userId,
//   }
// }

export const todoKeys = [
  'todos.id as id',
  'todos.task as task',
  'todos.completed as completed',
  'todos.urgency as urgency',
  'todos.created as created',
  'todos.due as due',
  'todos.user_id as userId',
]

// CREATE

// READ

export async function getTodos() {
  try {
    const result = db('todos').select(todoKeys)
    console.log(result)
    return result
  } catch (error) {
    console.error(error)
  }
}
export async function deleteTodo(id: number) {
  const results = await db('todos').del().where('todos.id', id)
  return results
}
export async function updateTodo(updatedTodo: Todo) {
  const todo: Todo = await db('todos')
    .where('todos.id', updatedTodo.id)
    .update('task', updatedTodo.task)
    .update('urgency', updatedTodo.urgency)
    .update('created', updatedTodo.created)
    .update('due', updatedTodo.due)
    .update('completed', updatedTodo.completed)
    .update('userId', updatedTodo.userId)

  return todo
}export async function addTodo(data: TodoData) {
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
  const results = await db('todos').insert(newTodo)
  return results
}