import prisma from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  await prisma.todo.create({ data: {title, complete: false}})
  redirect('/todo')
}

export default function page() {
  return (
    <div  className="bg-[#003b2e] p-4">
      <div className=" text-slate-100 h-screen mx-auto container">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">New</h1>
        </header>
        <form action={createTodo} className="flex gap-2 flex-col"> 
          <input type="text" name="title"  className='border border-slate-300 bg-transparent px-2 py-1 rounded focus-within:bg-slate-700 outline-none mb-3' />
          <div className="flex gap-2 justify-end">
            <Link href='/todo' className='border border-slate-300 bg-transparent px-2 py-1 rounded focus-within:bg-slate-700 outline-none' >Cancel</Link>
            <button type="submit" className='border border-slate-300 bg-transparent px-2 py-1 rounded focus-within:bg-slate-700 outline-none' >Create</button>
          </div>
        </form>
      </div>
    
    </div>
  )
}
