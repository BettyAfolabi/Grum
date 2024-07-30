"use client"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void;
}
export default function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
  
  return (
    <li className="flex gap-1 justify-between items-center ">
      <div className="flex gap-1">
      <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500 text-lg">{title}</label>
      </div>
      <button className="text-red-500 hover:text-red-600 focus:outline-none" onClick={e => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}
