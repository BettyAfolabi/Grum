import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

  return (
    <div>
      <footer className="px-7 md:px-14 bg-slate-100 text-[#096b3ada] py-5 md:py-10">
        <div className="md:flex justify-between pb-7">
          <div>
            <div className="flex gap-1 mb-2">
              <Image src='/logolight.png' alt="grum logo" width={40} height={40}/>
              <h1 className="text-2xl font-bold">Grum</h1>
            </div>
            <p className="w-[400px] text-sm py-1">Grum is your ultimate productivity companion, designed to help you stay organized. Let us make productivity a habit with Grum.</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
            <ul>
              <li className="text-[20px] pb-2.5">Company Info</li>
              <li className="pb-2 text-sm">
                <Link href="/">Home</Link>
              </li>
              <li className="pb-2 text-sm">
                <a href="#">About Us</a>
              </li>
              <li className="pb-2 text-sm">
                <a href="#">Contact</a>
              </li>
              <li className=" text-sm">
                <a href="#">NewsFeed</a>
              </li>
            </ul>
            <ul>
              <li className="text-[20px] pb-2.5">Legal</li>
              <li className="pb-2 text-sm">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="pb-2 text-sm">
                <a href="#">Terms & Condition</a>
              </li>
              <li className="pb-2 text-sm">
                <a href="#">Cookie Policy</a>
              </li>
              <li className=" text-sm">
                <a href="#">Return Policy</a>
              </li>
            </ul>
            <ul>
              <li className="text-[20px] pb-2.5">Features</li>
              <li className="pb-2 text-sm">
                <a href="#">Logistics</a>
              </li>
              <li className="pb-2 text-sm">
                <a href="#">Live Chat</a>
              </li>
              <li className="pb-2 text-sm">
                <Link href="#">NewsFeed</Link>
              </li>
              <li className=" text-sm">
                <a href="#">User Analytic</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-7">
          <div className="md:flex gap-6">
            <h3 className="text-base flex gap-1">
             <i className='bx bx-sm text-[#096b3ada] bx-copyright'></i>
                {`${year} Grum`}
            </h3>
            <p className="font-bold text-base text-center">All Right Reserved</p>
          </div>
          <div className="flex gap-2">
          <i className='bx bx-sm text-[#096b3ada] bxl-facebook-circle'></i>
          <i className='bx bx-sm text-[#096b3ada] bxl-instagram'></i>
          <i className='bx bx-sm text-[#096b3ada] bxl-twitter'></i>
          <i className='bx bx-sm text-[#096b3ada] bxl-youtube'></i>
          </div>
        </div>
      </footer>
    </div>
  )
}
