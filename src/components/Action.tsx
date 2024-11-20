import React from 'react'
import Image from 'next/image'

export default function Action() {
  return (
    <section className="py-10 md:py-20 bg-[#f4f9f8] flex justify-between flex-col md:flex-row">
        <div className="pl-7 md:pl-14">
        <h1 className="w-full text-3xl font-bold leading-10 md:w-[600px] py-4 mb-4">Ready to start grooming your life towards efficiency and success?</h1>
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
            <button className="transition duration-300 ease-in-out transform hover:scale-105 border border-[#096b3ada] px-3 py-1 rounded-full hover:bg-slate-200 text-black">Talk to Sales</button>
            <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-[#096b3ada] text-slate-100 px-3 py-1 rounded-full hover:bg-green-700">Sign up for free</button>
        </div>
        </div>
        <Image src='/family.jpg' alt="image of a working family" width={500} height={400} className="rounded mx-auto"/>
    </section>
  )
}
