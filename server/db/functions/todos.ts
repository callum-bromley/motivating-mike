import { TodoData } from "../../../client/Models/todos"
import connection from "../connection"
// import connection from './connection'

//This where the functions for

// getTodos
// getTodosBy____
// editTodo
// deleteTodo
// AddTodo


// add todo
export async function addTodo(data: TodoData) {
  const { task, urgency, created, due, completed, userId} = data
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



// delete todo