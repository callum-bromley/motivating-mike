import { Todo } from "../../../client/Models/todos";
import db from '../connection.ts'

//This where the functions for

// getTodos
// getTodosBy____

// READ --> getTodosByUserId
export async function getTodosByUserId(userId: number): Promise<Todo[]> {
  const todoList = await db('todos')
    .where('todos.user_id', userId)
    .select()

  return todoList
}

// editTodo
// deleteTodo
// AddTodo
