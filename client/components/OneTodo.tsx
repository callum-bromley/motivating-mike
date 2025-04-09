// import useTodos from "../apis/use-todos"

// interface Props {
//   userId: number
// }
const userId = 1

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
  userId: 1,
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
  console.log(todos)

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
  return (
    <>
      <h1>All Todos will update to single todo</h1>
      <ul>
        {todos
          .filter((todo) => todo.completed === null)
          .map((todo) => {
            if (todo.urgency === 3) {
              return (
                < li key={todo.id} >
                  <h3>{todo.task}</h3>
                  <p>Get your shit done</p>
                  {/* {todo.completed ? <p>complete</p> : null} */}
                </li>
              )
            }
            else if (todo.urgency === 2) {
              return (
                < li key={todo.id} >
                  <h3>{todo.task}</h3>
                  <p>Hey, it&apos;s time to get onto this one</p>
                </li>
              )
            }
            else if (todo.urgency === 1) {
              return (
                < li key={todo.id} >
                  <h3>{todo.task}</h3>
                  <p>You, can do it!</p>
                </li>
              )
            }
          })
        }
      </ul >
    </>
  )
}

