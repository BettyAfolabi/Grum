import Image from "next/image";
import Navbar from '@/components/NavBar'
import Footer from "@/components/footer";
import Link from "next/link";

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

      {/* Features */}
      <div className="my-8 px-14">
        <h2 className="text-3xl font-semibold pb-7 text-center">Features</h2>
        <div className="block md:flex justify-between mx-10 my-3 py-10  animate-swipeInBottom">
          <div className="flex flex-col items-center  bg-green-800 text-slate-100 px-3 py-5 w-[200px] h-[230px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-400 ">
            <Image src='/hourglass.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3">Pomodoro Timer</h3>
            <p className="leading-4 text-xs text-center">Work in intervals and track the time spent on different tasks and projects.</p>
            <Link href='/track' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
          <div className="flex flex-col items-center bg-green-800 text-slate-100 px-3 py-5 w-[200px] h-[230px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-400 ">
            <Image src='/book.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3">Books</h3>
            <p className="leading-4 text-xs text-center">Get and read self development books tailored to you and your goals</p>
            <Link href='/' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
          <div className="flex flex-col items-center bg-green-800 text-slate-100 px-3 py-5 w-[200px] h-[230px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-400 ">
            <Image src='/heart-rate.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3">Fitness</h3>
            <p className="leading-4 text-xs text-center">Take charge of your health, connect with people with same goals!</p>
            <Link href='/health' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
          <div className="flex flex-col items-center  bg-green-800 text-slate-100 px-3 py-5 w-[200px] h-[230px] rounded-xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-400 ">
            <Image src='/list.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3 divide-y-2 divide-slate-100">Todo</h3>
            <p className="leading-4 text-xs text-center">{`Create, edit, and delete tasks. Focus on what's most important.`}</p>
            <Link href='/todo' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <section className="py-20 bg-[#f4f9f8] flex justify-between">
          <div className="pl-14">
            <h1 className="text-3xl font-bold leading-10 w-[600px] py-4 mb-4">Ready to start grooming your life towards efficiency and success?</h1>
            <ul className="text-black space-y-3">
              <li className="flex gap-3 items-center py-1">
                <i className='bx text-[#096b3ada] bx-sm bx-check-circle'></i>
                <p>30 days free trial</p>
              </li>
              <li className="flex gap-3 items-center py-1">
                <i className='bx text-[#096b3ada] bx-sm bx-check-circle'></i>
                <p>Cancel at any time</p>
              </li>
              <li className="flex gap-3 items-center py-1">
                <i className='bx text-[#096b3ada] bx-sm bx-check-circle'></i>
                <p>Access to all features</p>
              </li>
              <li className="flex gap-3 items-center py-1">
                <i className='bx text-[#096b3ada] bx-sm bx-check-circle'></i>
                <p>Personalized onboarding</p>
              </li>
            </ul>
            <div className="flex gap-3 my-12 font-semibold">
              <button className="border border-[#096b3ada] px-3 py-1 rounded-full hover:bg-slate-200 text-black">Talk to Sales</button>
              <button className="bg-[#096b3ada] text-slate-100 px-3 py-1 rounded-full hover:bg-green-700">Sign up for free</button>
            </div>
          </div>
          <Image src='/family.jpg' alt="image of a working family" width={500} height={400} className="rounded"/>
      </section>
      <Footer />
    </div>
  )
}
