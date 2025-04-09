import db from './../connection.ts'
// import { Avatar } from '../../../client/models/avatars.ts'

// function convertAvatarsToSnakeCase(data: avatar) {
//   return {
//     id: data.id,
//     name: data.name,
//     description: data.description,
//      image: data.description
//   }
// }

export const avatarKeys = [
  'avatars.id as id',
  'avatars.name as name',
  'avatars.description as description',
  'avatars.image as image',
]

// CREATE

// addavatar

// READ

export async function getAvatarById(id: number) {
  try {
    const avatar = await db('avatars').where('id', id).select(avatarKeys)
    return avatar[0]
  } catch (error) {
    console.error(error)
  }
}

// UPDATE

// updateavatar

// DELETE

// deleteavatar
