import useTodos from '../apis/use-todos'
import AddTodo from '../components/AddTodo'
import DeleteTodo from '../components/DeleteTodo'
import { useState } from 'react'
import EditTodo from '../components/EditTodo'

export default function TodoList() {
  const [editId, setEditId] = useState(0)

  const { data: todos, isPending, error } = useTodos()

  if (isPending) {
    return <p>no todos yet</p>
  }
  if (error) {
    return <p>no todos ever</p>
  }

  console.log(editId)

  const handleClick = (id: number) => {
    setEditId(id)
  }
  return (
    <>
      <h1>Todo list placeholder</h1>
      <AddTodo />
      <ul>
        {todos.map((todo) => {
          {return  todo.id == editId ? <EditTodo key={todo.task} todo={todo} /> : <li
          key={todo.task}
          onClick={() => {
            handleClick(todo.id)
          }}
        >
          {todo.task}
        </li>}
})}
    </ul>
    <DeleteTodo todos={todos} />
  </>
)
}

//update

//useState - track task being edited (id)
//When user dbl clicks, the state changes (click handler - on every list item in the map)
//if task id is the clicked task id = show the form.
//ternary on line 25. id = editedId ? show component or list item for the task
