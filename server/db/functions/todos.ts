import { Todo } from "../../../client/Models/todos";
import db from '../connection.ts'

//This where the functions for
// getTodos
export async function getTodos(): Promise<Todo[]> {
  const todoList = await db('todos')
    .select()

  console.log(todoList)

  return todoList
}

// getTodosBy____

// getTodosByUserId
export async function getTodosByUserId(userId: number): Promise<Todo[]> {
  const todoList = await db('todos')
    .where('todos.user_id', userId)
    .select()

  console.log(todoList)

  return todoList
}

// editTodo
// deleteTodo
// AddTodo
