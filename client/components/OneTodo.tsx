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
  let filteredByUrgency = todos.filter((todo) => todo.urgency === 3)

  if (filteredByUrgency.length === 0) {
    filteredByUrgency = todos.filter((todo) => todo.urgency === 2)
  }
  if (filteredByUrgency.length === 0) {
    filteredByUrgency = todos.filter((todo) => todo.urgency === 1)
  }
  console.log(filteredByUrgency)
  return (
    <>
      <h1>All Todos will update to single todo</h1>
      <ul>
        {filteredByUrgency
          .filter((todo) => todo.completed === null)
          .map((todo) => (
            <li key={todo.id} >
              <h3>{todo.task}</h3>
              <p>Get your shit done</p>
            </li>
          ))}
      </ul >
    </>
  )
}

