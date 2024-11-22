//import React from 'react'
import Image from "next/image";


export default function Hero() {
  return (
    <div className="bg-[url('/bg2.png')] bg-cover bg-center mt-20">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center px-14 py-14 mb-14">
          <div className="py-2 animate-swipeInLeft">
            <h1 className="text-4xl font-extrabold leading-10 py-1">Boost Your Productivity, </h1>
            <h1 className="text-4xl font-extrabold pb-1">One Task at a Time</h1>
            <p className="text-base font-normal pt-4">Grum helps you stay organized, track your habits, </p> <p className="text-base font-normal"> and achieve your goals.</p>
            <div className="flex gap-3 my-5">
              <button className="transition duration-300 ease-in-out transform hover:scale-105 text-slate-200 bg-[#096b3ada] outline-none hover:bg-[#009966fd] px-5 py-1 rounded-2xl font-bold">Get Started</button>
              <button className="transition duration-300 ease-in-out transform hover:scale-105 px-5 py-1 text-[#096b3ada] hover:bg-slate-200 focus-within:bg-slate-200 rounded-xl outline-none font-semibold">Discover AI Assistant</button>
            </div>
          </div>
          <Image src="/happywoman.jpg" alt="image of a happy productive woman" width={450} height={500} className="rounded animate-swipeInRight" />
        </div>
      </div>
  )
}
