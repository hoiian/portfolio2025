import React, { useState } from "react";

const works = [
  { title: "Studio: Redefining AI-Powered Video Creation", image: "/work1.jpg", link: "/work1", description: "Studio is an all-in-one content creation suite, enabling VTubers, AI creators, and digital influencers to stream, record, and edit videos seamlessly." },
  { title: "NFT minting", image: "/work2.jpg", link: "/work2", description: "A Web3 development project focusing on blockchain integration." }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">黃凱欣</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Me</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="text-left py-20">
        <h1 className="italic text-9xl">hoiian.wong</h1>
        <p className="mt-4 text-lg text-gray-300">Macau 
Design + Code 
Tsinghua 
3Y Exp 
Cantonese, Mandarin, English</p>
      </section>
      
      {/* Works Showcase */}
      <main className="flex-1 p-8">
        <h2 className="text-6xl italic mb-1 text-left">Latest Works</h2>
        <p className="mb-6">My most recent projects at Hologram</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <a key={index} href={work.link} className="group block relative rounded-lg overflow-hidden shadow-md transform transition hover:scale-105 bg-white">
              <img src={work.image} alt={work.title} className="w-full h-64 object-cover group-hover:opacity-80 transition" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">{work.title}</h3>
                <p className="text-sm text-gray-400">{work.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      
    </div>
  );
}
