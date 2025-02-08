import React, { useState } from "react";

const works = [
  { title: "Project A", image: "/work1.jpg", link: "/works/work1", description: "An innovative design project exploring UI/UX." },
  { title: "Project B", image: "/work2.jpg", link: "works/work2", description: "A Web3 development project focusing on blockchain integration." }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Me</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-800">
        <h1 className="text-4xl font-bold">Hi, I'm Hoi Ian</h1>
        <p className="mt-4 text-lg text-gray-300">Macau-based Designer & Coder | 3 Years in Game & Web3</p>
      </section>
      
      {/* Works Showcase */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <a key={index} href={work.link} className="group block relative rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
              <img src={work.image} alt={work.title} className="w-full h-64 object-cover group-hover:opacity-80 transition" />
              <div className="p-4 bg-gray-800 text-white">
                <h3 className="text-xl font-bold">{work.title}</h3>
                <p className="text-sm text-gray-400">{work.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-6 text-center text-gray-400 bg-gray-800 shadow-inner">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
