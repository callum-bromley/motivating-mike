import useTodos from "../apis/use-todos"

export default function OneTodo() {
  const todos = {
    id: '1',
    task: 'wash cat',
    urgency: 3,
    created: '2025',
    due: '2026',
    completed: '',
    userId: '1',
  }

  // const { data: todos, isPending, error } = useTodos()
  console.log(todos)

  if (isPending) {
    return (<h2>Loading...</h2>)
  }
  if (error) {
    return (<h2>Error: {error.message}</h2>)
  }
  if (!todos) {
    return (<h2>No todo data found</h2>)
  }

  return (
    <h1>One todo component placeholder</h1>
  )
}

