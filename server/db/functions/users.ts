import { User, UserData } from '../../../client/models/users.ts'
import db from './../connection.ts'

export const userKeys = [
  'users.id as id',
  'users.auth_id as authId',
  'users.name as name',
  'users.avatar_id as avatarId',
]

// CREATE

export async function addNewUser(data: UserData) {
  const results = await db('users').insert({
    auth_id: data.authId,
    name: data.name,
    avatar_id: data.avatarId,
  })

  return results
}

// READ

export async function getUserById(id: number) {
  try {
    const user = await db('users').where('id', id).select(userKeys)
    return user[0]
  } catch (error) {
    console.error(error)
  }
}

export async function getUserByAuthId(authId: string): Promise<User> {
  const user = await db('users').where('users.auth_id', authId).select(userKeys).first()
  console.log(authId)
  return user as User
}
// UPDATE

// updateUser

export async function updateUserAvatar(userId: number, avatarId: number) {
  return db('users').where({ id: userId }).update({ avatar_id: avatarId })
}
// DELETE

// deleteUser
