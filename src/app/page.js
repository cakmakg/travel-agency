import Image from "next/image";
import Cards from "./components/Cards"


export default function Home() {
  return (
    <div className="bg-gray-800 h-screen items-center ">
      <div className="bg-gray-700 text-white text-center py-10 px-5 shadow-lg">
      <img src="images/ChatGPT Image 28 Nis 2025 01_29_00.png"/>
        <h1 className="text-4xl text-white-600 mb-4">Travel Agent</h1>
      </div>

      <Cards/>

    </div>
  );
}
