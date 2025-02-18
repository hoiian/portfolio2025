import React, { useState, useEffect } from "react";
import SocialIcons from "../components/SocialIcons";


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

const funFactSentences = [
  "Bungee jumped three times, skydived once… and somehow still alive. 🪂",
  "Born and raised in Macau 🇲🇴—yes, the one with all the casinos.",
  "Currently reading *The Stranger* and having an existential crisis. 🤔",
  "Can use a mouse 🖱️ with both hands.",
  "Fueled by bubble tea 🧋—my daily survival juice.",
  "ChatGPT is my unofficial spokesperson. 🤖💬",
  "Gets things done with classical music BGM. 🎼✨",
  "Can sleep for over 18 hours straight. 😴",
  "Has nine ear piercings. 👂✨",
  "A proud Sudoku addict. 🔢",
  "An MBTI P-type who actually enjoys organizing and using Sheets. 📊✨",
];
function RotatingText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % funFactSentences.length);
        setFade(true);
      }, 300); // Fade-out duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h6 className={`font-extralight text-xl text-zinc-200 mt-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      {funFactSentences[index]}
    </h6>
  );
}


export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="min-h-screen text-white flex flex-col max-w-[1360px] mx-auto p-5">
      {/* Header */}

      {/* <header className="p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">黃凱欣</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Me</a></li>
          </ul>
        </nav>
      </header> */}
      
      {/* Hero Section */}
      <section className=" py-20 min-h-[90vh] min-h-screen justify-center flex flex-col">
        {/* <h1 className="text-[164px] uppercase text-left leading-none text-zinc-50">Hoi Ian <br /> Wong</h1> */}
      
        <h1 className={`pt-4 z-50 uppercase leading-none transition-all duration-500 text-zinc-50 ${isScrolled ? 'text-xl fixed top-0' : 'text-[164px]'}`}>
          Hoi Ian <br/> Wong
        </h1>
        
        <RotatingText />
        <SocialIcons />


      </section>
      
      {/* Works Showcase */}
      <main className="flex-1">
        <h2 className="text-6xl italic mb-1 text-left">Latest Works</h2>
        <p className="mb-6">My most recent projects at Hologram</p>
        <div className="grid grid-cols-3 gap-6">
          <a href={works[0].link} className="group block relative col-span-2 overflow-hidden shadow-md transform transition hover:rotate-1">
            <div className="bg-[linear-gradient(108deg,#2DEDD0_0%,#2474DD_100%)] rounded-3xl h-[500px]">
              {/* <img  alt={works[0].title} className="  w-full object-cover group-hover:opacity-80 transition" /> */}
            </div>
            
            <div className="p-4 text-white">
              <h3 className="text-2xl italic">{works[0].title}</h3>
              <p className="text-sm">{works[0].description}</p>
            </div>
          </a>
          <a href={works[1].link} className="group block relative col-span-1  overflow-hidden shadow-md transform transition hover:rotate-1">
          <div className="bg-[linear-gradient(142deg,#A22BC7_0%,#F17256_100%)] rounded-3xl h-[500px]">
              {/* <img  alt={works[1].title} className="  w-full object-cover group-hover:opacity-80 transition" /> */}
            </div>
            <div className="p-4 text-white">
              <h3 className="text-2xl italic">{works[1].title}</h3>
              <p className="text-sm">{works[1].description}</p>
            </div>
          </a>
        </div>
      </main>
      
    </div>
  );
}
