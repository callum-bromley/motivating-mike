import request from 'superagent'
// import { TodoData, Todo } from "../Models/todos";

export async function deleteTodo(id: number) {
  const response = await request.delete(`/api/v1/todos/${id}`)
  return response
}
