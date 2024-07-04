import Hero from "@components/components/Hero";
import Highlights from "@components/components/Highlights";
import Navbar from "@components/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar></Navbar> 
      <Hero></Hero>
      <Highlights></Highlights>
    </main>
  );
}
