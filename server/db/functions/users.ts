import db from './../connection.ts'
// import { User } from '../../../client/models/users.ts'

// function convertUsersToSnakeCase(data: user) {
//   return {
//     id: data.id,
//     name: data.name,
//     avatar_id: data.avatarId,
//   }
// }

export const userKeys = [
  'users.id as id',
  'users.name as name',
  'users.avatar_id as avatarId',
]

// CREATE

// addUser

// READ

export async function getUserById(id: number) {
  try {
    const user = await db('users').where('id', id).select(userKeys)
    return user[0]
  } catch (error) {
    console.error(error)
  }
}

// UPDATE

// updateUser

// DELETE

// deleteUser
