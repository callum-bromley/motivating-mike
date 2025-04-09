import request from 'superagent'
// import { Todo } from '../Models/todos';

export async function updateTodo(id: number) {
  const response = await request.patch(`/api/v1/todos/${id}`)
  return response
}
