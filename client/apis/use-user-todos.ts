import request from "superagent";
import { Todo } from "../models/todos";
import { useQuery } from "@tanstack/react-query";

export default function useUserTodos(userId: number) {
  return useQuery({
    queryKey: ['todos', userId],
    queryFn: async () => {
      const res = await request.get(`api/v1/todos/${userId}`)
      if (res.ok) {
        // console.log('use user todos: ', res.body)
        return res.body as Todo
      }
      throw new Error(res.text)
    }
  })
}

