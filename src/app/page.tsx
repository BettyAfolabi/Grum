import Image from "next/image";
import Navbar from '@/components/NavBar'
import Footer from "@/components/footer";

export default function Home() {

   return (
    <div className="h-screen text-black">
      <div className="bg-[url('/bg.jpg')] bg-cover bg-center p-4 ">
        <Navbar />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center px-14  my-14">
          <div className="py-2 animate-swipeInLeft">
            <h1 className="text-4xl font-extrabold leading-10 py-1">Boost Your Productivity, </h1>
            <h1 className="text-4xl font-extrabold leading-10 pb-1">One Task at a Time</h1>
            <p className="text-base font-normal py-1">Grum helps you stay organized, track your habits, </p> <p className="text-base font-normal py-1"> and achieve your goals.</p>
            <div className="flex gap-3 my-4">
              <button className="text-slate-200 bg-[#096b3ada] outline-none hover:bg-[#009966fd] px-5 py-1 rounded-2xl font-bold">Get Started</button>
              <button className="px-5 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded-xl outline-none font-semibold">Discover AI Assistant</button>
            </div>
          </div>
          <Image src="/happywoman.jpg" alt="image of a happy productive woman" width={450} height={500} className="rounded animate-swipeInRight" />
        </div>
      </div>
      <div className="my-8 px-14">
        <h2 className="text-3xl font-semibold pb-7 text-center">Features</h2>
        <div className="block md:flex justify-between mx-10 my-3 animate-swipeInBottom">
          <div className="flex flex-col bg-green-800 text-slate-100 p-3 w-[200px] h-[200px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-green-700 duration-700 "></div>
          <div className="flex flex-col bg-green-800 text-slate-100 p-3 w-[200px] h-[200px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-green-700 duration-700 "></div>
          <div className="flex flex-col bg-green-800 text-slate-100 p-3 w-[200px] h-[200px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-green-700 duration-700 "></div>
          <div className="flex flex-col bg-green-800 text-slate-100 p-3 w-[200px] h-[200px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-green-700 duration-700 "></div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
