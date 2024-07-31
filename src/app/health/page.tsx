import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer";


export default function page() {
  return (
    <div className="bg-slate-50 h-screen w-screen">
      <Navbar />
      <Image src='/gymclass.jpg' alt="image of people in a gym" width={900} height={400} className="my-5 w-full"/>
      <p className="my-10 w-3/4 mx-auto text-black leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia labore provident, recusandae eos quasi doloribus sit eius dignissimos dolor atque quia dicta harum maiores adipisci molestias quod distinctio, nobis architecto natus esse pariatur amet corrupti earum? Doloribus, inventore blanditiis alias at, deserunt placeat temporibus modi voluptatem expedita minima eligendi, suscipit nam impedit. Quod facilis id maiores perspiciatis dolor placeat voluptatem nesciunt? Magnam, ducimus! Enim asperiores voluptatum iure praesentium nobis esse expedita nemo ipsam nihil! Ad est, laudantium debitis ducimus eveniet mollitia vel, nostrum facilis aspernatur a itaque qui saepe fuga unde enim blanditiis assumenda officiis illo voluptatem. Animi ullam consectetur facere eum iusto sapiente mollitia qui molestias hic non omnis id dicta aliquam, nihil perspiciatis quidem tempore, ab sed repellat, in quo rerum libero earum unde? Pariatur, eaque tenetur deleniti veritatis facere sint, voluptatum nesciunt laboriosam laudantium, aliquid totam amet ab laborum eum! Labore, quae quod cupiditate dolores molestiae quibusdam dicta! Nisi debitis cum distinctio ab explicabo, voluptatem in quaerat officiis recusandae, ipsa iste tempora corrupti voluptas dignissimos consequatur? Saepe vero quis numquam veritatis deserunt aspernatur quos, aut animi molestias placeat qui harum, fugiat nihil molestiae distinctio ex voluptatum quaerat dicta, obcaecati pariatur! Tempora aperiam ducimus deleniti dolorem voluptas.</p>
    <Footer /> 
    </div>
  )
}
