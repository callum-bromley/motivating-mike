import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { User } from "../models/users";
import request from "superagent";


export default function useUserDataAuth() {
  const { user, getAccessTokenSilently } = useAuth0()

  const query = useQuery({
    enabled: !!user,
    queryKey: ['active-user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      const res = await request
        .get('/api/v1/users')
        .set('Authorization', `Bearer ${token}`)
      return res.body
    }
  })
  console.log('use user data auth: query', query)
  return { ...query }
}
