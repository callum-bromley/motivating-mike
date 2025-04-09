import request from "superagent";
import { Todo } from "../Models/todos";
import { useQuery } from "@tanstack/react-query";

export default function useUserTodos(userId: number) {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await request.get(`api/v1/todos/${userId}`)
      if (res.ok) {
        return res.body as Todo[]
      }
      throw new Error(res.text)
    }
  })
}

