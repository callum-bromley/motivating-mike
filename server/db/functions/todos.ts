import db from './../connection.ts'
import { Todo, TodoData } from '../../../client/models/todos.ts'

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
export async function addTodo(data: TodoData) {
  const { task, urgency, created, due, completed, userId } = data
  const newTodo = {
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

// READ

export async function getTodos() {
  try {
    const result = await db('todos').select(todoKeys)
    return result
  } catch (error) {
    console.error(error)
  }
}

// getTodosByUserId
export async function getTodosByUserId(userId: number): Promise<Todo[]> {
  const todoList = await db('todos').where('todos.user_id', userId).select()

  return todoList
}

// UPDATE
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
}

// DELETE

export async function deleteTodo(id: number) {
  const results = await db('todos').del().where('todos.id', id)
  return results
}
