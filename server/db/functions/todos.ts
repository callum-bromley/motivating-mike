import db from './../connection.ts'
import { Todo } from '../../../client/models/todos.ts'


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
    const result = await db('todos').select(todoKeys)
    // console.log(result)
    return result
  } catch (error) {
    console.error(error)
  }
}

// getTodosByUserId
export async function getTodosByUserId(userId: number): Promise<Todo[]> {
  console.log(userId)
  const todoList = await db('todos')
    .where('todos.user_id', userId)
    .select()

  console.log('getTodosByYserId: ', todoList)

  return todoList
}

// UPDATE

// DELETE
//
