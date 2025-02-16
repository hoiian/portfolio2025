import React from "react";
import { Link } from "react-router-dom";

export default function Work1() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Back Button */}
      <header className="p-6">
        <Link to="/" className="text-yellow-300 hover:underline">← Back</Link>
      </header>

      {/* Work1 Content */}
      <main className="flex-1 p-8 text-left">
        <h1 className="italic text-4xl">Studio: <br/>
        Redefining AI-Powered Video Creation</h1>
        <p className="mt-4 text-gray-300">
            Studio is an all-in-one content creation suite, enabling VTubers, AI creators, and digital influencers to stream, record, and edit videos seamlessly.

        </p>
      </main>

      {/* Next Project Link */}
      <div className="p-6 text-center">
        <Link to="/work2" className="italic text-yellow-300 hover:underline text-4xl">
          Next Project →
        </Link>
      </div>
    </div>
  );
}
