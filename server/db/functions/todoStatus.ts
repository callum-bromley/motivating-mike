import db from './../connection.ts'

// This is where the functions for

// updateStatusById
export async function updateStatusById(Id: number) {
  const todoList = await db('todos')
    .where('todos.id', Id)
    .update({ completed: formatDate(Date.now()) })

  return todoList
}

export default function formatDate(newDate: number) {
  const date = new Date(newDate)
  const format: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  if (isNaN(date.getTime())) {
    return 'Invalid Date'
  }

  return date.toLocaleDateString('en-nz', format)
}

// updateUrgencyById
