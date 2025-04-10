import db from '../connection.ts'
import { Heckle } from '../../../client/models/heckles.ts'

// function convertHeckleToSnakeCase(data: Heckle) {
//   return {
//     id: data.id,
//     heckle: data.heckle,
//     severity: data.severity,
//     avatar_id: data.avatarId
//   }
// }

export const heckleKeys = [
  'heckles.id as id',
  'heckles.heckle as heckle',
  'heckles.severity as severity',
  'heckles.avatar_id as avatarId',
]

export async function getHeckles(): Promise<Heckle[]> {
  return db('heckles').select(heckleKeys)
}

// getHecklesBySeverity
export async function getHecklesBySeverity(severity: number): Promise<Heckle[]> {
  return db('heckles').where('heckles.severity', severity).select(heckleKeys)
}




// getHecklesByAvatarId
// getHecklesByID
