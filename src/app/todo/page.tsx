import prisma from "@/db";
import Link from "next/link";
import TodoItem from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}
async function deleteTodo(id: string) {
  "use server"

  await prisma.todo.delete({ where: { id } })
}

export default async function Todo() {
  const todos = await getTodos()
 
  
   return (
    <div className="bg-[#003b2e] p-4">
        <div className=" text-slate-100 h-screen mx-auto container">
      <header className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
            <Link href='/' className='border border-slate-300 text-slate-300 px-2 py-1 rounded-full hover:bg-slate-700 focus-within:bg-slate-700 outline-none'><i className='bx bx-arrow-back'></i></Link>
            <h1 className="text-2xl">Todos</h1>
        </div>
        <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href='/todo/addtodo'>Add</Link>
      </header>
      <ul className="pl-4">{todos.map(todo =>(
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> 
      ))}</ul>
    </div>
    </div>
    
  )
}
