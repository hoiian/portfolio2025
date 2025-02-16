import React, { useState } from "react";

const works = [
  { title: "Studio: Redefining AI-Powered Video Creation", 
    image: "src//assets/images/placeholder-image.jpg", 
    link: "/work1", 
    description: "Studio is an all-in-one content creation suite, enabling VTubers, AI creators, and digital influencers to stream, record, and edit videos seamlessly." 
  },

  { title: "NFT minting", 
    image: "src//assets/images/placeholder-image.jpg", 
    link: "/work2", 
    description: "A Web3 development project focusing on blockchain integration." 
  }
];

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col max-w-5xl mx-auto">
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
      <section className="text-center py-20 min-h-[90vh] justify-center flex flex-col">
        <h1 className="italic text-9xl">hoiian.wong</h1>
        <p className="mt-4 text-lg">...Design</p>
      </section>
      
      {/* Works Showcase */}
      <main className="flex-1 p-8">
        <h2 className="text-6xl italic mb-1 text-left">Latest Works</h2>
        <p className="mb-6 ">My most recent projects at Hologram</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {works.map((work, index) => (
            <a key={index} href={work.link} className="group block relative rounded-3xl overflow-hidden shadow-md transform transition hover:scale-105 bg-zinc-900">
              <img src={work.image} alt={work.title} className="w-full h-64 object-cover group-hover:opacity-80 transition" />
              <div className="p-4 text-white">
                <h3 className="text-2xl italic">{work.title}</h3>
                <p className="text-sm ">{work.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      
    </div>
  );
}
