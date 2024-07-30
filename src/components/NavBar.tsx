import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    
      <div className="flex justify-between items-center flex-row-reverse mx-5 mt-3 mb-8">
          <div className="flex gap-1">
            <Image src='/logodark.png' alt="grum logo" width={40} height={40}/>
            <h1 className="text-2xl text-[#096b3ada] font-bold">Grum</h1>
          </div>
          <div className="flex flex-row gap-2 ">
            <Link href="/" className="px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">Home</Link>
            <Link href='/health' className="px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">My Health</Link>
            <Link href='' className="px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">Books</Link>
            <Link href='' className="px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">Track</Link>
            <Link className=' text-[#096b3ada] px-2 py-1 rounded hover:bg-slate-200 focus-within:bg-slate-200 outline-none' href='/todo'>Todos</Link>
          </div>
        </div>
    
  )
}
