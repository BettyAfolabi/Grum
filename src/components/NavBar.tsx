import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    
      <div className="flex justify-between items-center flex-row p-6 bg-slate-50 w-screen top-0 fixed z-10">
          <div className="flex gap-1">
            <Image src='/logodark.png' alt="grum logo" width={40} height={40}/>
            <h1 className="text-2xl text-[#096b3ada] font-bold">Grum</h1>
          </div>
          <div className="hidden md:flex flex-row gap-2 ">
            <Link href="/" className="transition duration-300 ease-in-out transform hover:scale-105 px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">Home</Link>
            <Link href='/health' className="transition duration-300 ease-in-out transform hover:scale-105 px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">My Health</Link>
            <Link href='' className="transition duration-300 ease-in-out transform hover:scale-105 px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">Books</Link>
            <Link href='/track' className="transition duration-300 ease-in-out transform hover:scale-105 px-2 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded outline-none ">Track</Link>
            <Link className='transition duration-300 ease-in-out transform hover:scale-105 text-[#096b3ada] px-2 py-1 rounded hover:bg-slate-200 focus-within:bg-slate-200 outline-none' href='/todo'>Todos</Link>
          </div>
          {/* <div>
            <button className="bg-[#096b3ada] text-white text-lg font-semibold py-2 w-[120px] rounded-xl hover:bg-green-700">Sign In</button>
          </div> */}
        </div>
    
  )
}
