import db from './../connection.ts'
// import { Todo } from '../../../client/models/todos.ts'

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

// UPDATE

// DELETE
