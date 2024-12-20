import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

  return (
    <div>
      <footer className="px-7 md:px-14 bg-black text-slate-300 py-10">
        <div className="md:flex justify-between pb-7">
          <div>
            <div className="flex gap-1 mb-2">
              <Image src='/logolight.png' alt="grum logo" width={40} height={40}/>
              <h1 className="text-2xl font-bold text-[#096b3ada]">Grum</h1>
            </div>
            <p className="w-full md:w-[400px] text-sm py-1">Grum is your ultimate productivity companion, designed to help you stay organized. Let us make productivity a habit with Grum.</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-10 my-3">
            <ul>
              <li className="text-[20px] pb-2.5">Company Info</li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <Link href="/">Home</Link>
              </li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <a href="#">About Us</a>
              </li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <a href="#">Contact</a>
              </li>
              <li className=" text-sm text-[#06bb60da]">
                <a href="#">NewsFeed</a>
              </li>
            </ul>
            <ul>
              <li className="text-[20px] pb-2.5">Legal</li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <a href="#">Terms & Condition</a>
              </li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <a href="#">Cookie Policy</a>
              </li>
              <li className=" text-sm text-[#06bb60da]">
                <a href="#">Return Policy</a>
              </li>
            </ul>
            <ul>
              <li className="text-[20px] pb-2.5">Features</li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <a href="#">Logistics</a>
              </li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <a href="#">Live Chat</a>
              </li>
              <li className="pb-2 text-sm text-[#06bb60da]">
                <Link href="#">NewsFeed</Link>
              </li>
              <li className=" text-sm text-[#06bb60da]">
                <a href="#">User Analytic</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-7">
          <div className="md:flex gap-6">
            <h3 className="text-base flex gap-1">
             <i className='bx bx-sm text-[#06bb60da] bx-copyright'></i>
                {`${year} Grum`}
            </h3>
            <p className="font-bold text-base text-center py-3 md:py-0">All Right Reserved</p>
          </div>
          <div className="flex gap-2 cursor-pointer">
          <i className='hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-105 bx bx-sm text-[#06bb60da] bxl-facebook-circle'></i>
          <i className='hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-105 bx bx-sm text-[#06bb60da] bxl-instagram'></i>
          <i className='hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-105 bx bx-sm text-[#06bb60da] bxl-twitter'></i>
          <i className='hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-105 bx bx-sm text-[#06bb60da] bxl-youtube'></i>
          </div>
        </div>
      </footer>
    </div>
  )
}
