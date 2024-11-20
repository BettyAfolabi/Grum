import Navbar from '@/components/NavBar'
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Action from "@/components/Action";

export default function Home() {

   return (
    <div className="h-screen text-black">
      <Navbar />
      <Hero />
      <Features />
      <Action />
      <Footer />
    </div>
  )
}
