import React from "react";
import { Link } from "react-router-dom";

export default function Work1() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Back Button */}
      <header className="p-6">
        <Link to="/" className="text-blue-400 hover:underline">← Back</Link>
      </header>

      {/* Work1 Content */}
      <main className="flex-1 p-8 text-center">
        <h1 className="text-4xl font-bold">Work 1 Project</h1>
        <p className="mt-4 text-lg text-gray-300">Details about Work 1 go here...</p>
      </main>

      {/* Next Project Link */}
      <div className="p-6 text-center">
        <Link to="/work2" className="text-blue-400 hover:underline">Next Project →</Link>
      </div>
    </div>
  );
}
