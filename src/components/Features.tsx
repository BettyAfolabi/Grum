import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
  return (
    <div className="my-8 px-14">
        <h2 className="text-3xl font-semibold pb-4 text-center">Features</h2>
        <div className="block md:flex justify-between mx-10 my-3 py-10  animate-swipeInBottom">
          <div className="flex flex-col items-center border border-green-800 bg-slate-100 text-black px-3 py-5 w-[200px] h-[230px] rounded-xl transition delay-150 duration-300 ease-in-out transform hover:scale-105">
            <Image src='/hourglass.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3">Pomodoro Timer</h3>
            <p className="leading-4 text-xs text-center">Work in intervals and track the time spent on different tasks and projects.</p>
            <Link href='/track' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
          <div className="flex flex-col items-center border border-green-800 bg-slate-100 text-black px-3 py-5 w-[200px] h-[230px] rounded-xl transition delay-150 duration-300 ease-in-out transform hover:scale-105">
            <Image src='/book.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3">Books</h3>
            <p className="leading-4 text-xs text-center">Get and read self development books tailored to you and your goals</p>
            <Link href='/' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
          <div className="flex flex-col items-center border border-green-800 bg-slate-100 text-black px-3 py-5 w-[200px] h-[230px] rounded-xl transition delay-150 duration-300 ease-in-out transform hover:scale-105">
            <Image src='/heart-rate.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3">Fitness</h3>
            <p className="leading-4 text-xs text-center">Take charge of your health, connect with people with same goals!</p>
            <Link href='/health' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
          <div className="flex flex-col items-center border border-green-800 bg-slate-100 text-black px-3 py-5 w-[200px] h-[230px] rounded-xl transition delay-150 duration-300 ease-in-out transform hover:scale-105">
            <Image src='/list.png' alt='hourglass icon' width={50} height={50}/>
            <h3 className="text-lg py-3 divide-y-2 divide-slate-100">Todo</h3>
            <p className="leading-4 text-xs text-center">{`Create, edit, and delete tasks. Focus on what's most important.`}</p>
            <Link href='/todo' className="font-bold bg-slate-200 px-2 py-1 rounded-2xl text-green-700 hover:bg-slate-300 outline-none my-4">grum me</Link>
          </div>
        </div>
      </div>
  )
}
