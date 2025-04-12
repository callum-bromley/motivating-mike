import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import request from "superagent";


export default function useUserDataAuth() {
  const { user, getAccessTokenSilently } = useAuth0()
  // console.log(user)

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
  // console.log('use user data auth: query', query)
  return { ...query }
  // return { ...query, add: useAddUser() }
}
// const addUser = async ({
//   newUser,
//   token,
// }) => {
//   return await request
//     .post('api/v1/users')
//     .set('authorization', `Bearer ${token}`)
//     .send(newUser)
//     .then((res) => res.body.newUser)
// }
//
// function useAddUser() {
//   return useUserMutation(addUser)
// }
//
// function useUserMutation(mutationFunction) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey })
//     }
//   })
//   return mutation
// }
