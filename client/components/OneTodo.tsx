// import useTodos from "../apis/use-todos"

// interface Props {
//   userId: number
// }
// const userId = 1

const todos = [{
  id: '1',
  task: 'wash cat',
  urgency: 3,
  created: '2025',
  due: '2026',
  completed: null,
  userId: 1,
},
{
  id: '2',
  task: 'Tip Cow',
  urgency: 3,
  created: '2025',
  due: '2026',
  completed: null,
  userId: 1,
},
{
  id: '3',
  task: 'Shear Sheep',
  urgency: 1,
  created: '2025',
  due: '2026',
  completed: null,
  userId: 2,
},
{
  id: '4',
  task: 'Make up excuses',
  urgency: 3,
  created: '2025',
  due: '2026',
  completed: '2026',
  userId: 1,
}
]

export default function OneTodo() {



  // const { data: todos, isPending, error } = useTodos()

  // if (isPending) {
  //   return (<h2>Loading...</h2>)
  // }
  // if (error) {
  //   return (<h2>Error: {error.message}</h2>)
  // }
  // if (!todos) {
  //   return (<h2>No todo data found</h2>)
  // }
  //
  let filteredTodos = todos.filter((todo) => todo.urgency === 3)
  let randomTodo = null

  if (filteredTodos.length === 0) {
    filteredTodos = todos.filter((todo) => todo.urgency === 2)
  }
  if (filteredTodos.length === 0) {
    filteredTodos = todos.filter((todo) => todo.urgency === 1)
  }
  if (filteredTodos.length > 0) {
    filteredTodos = todos.filter((todo) => todo.completed === null)
  }
  if (filteredTodos.length > 0) {
    const randomChoice = Math.floor(Math.random() * filteredTodos.length)
    randomTodo = filteredTodos[randomChoice]
  }



  return (
    <>
      {randomTodo ? (
        <>
          <h3><strong>{randomTodo.task}</strong></h3>
          <p>Get your shit done</p>
        </>
      ) : (
        <>
          <button>Add todo</button>
          <p>You&apos;r all caught up!</p>
        </>
      )}
    </>
  )
}

