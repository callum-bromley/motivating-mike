import request from "superagent";
import { TodoData, Todo } from "../Models/todos";

export async function addTodo(newTodo: TodoData) {
  const response = await request.post('/api/v1/todos').send(newTodo)
  console.log(response.body)
  return response.body as Todo
}

