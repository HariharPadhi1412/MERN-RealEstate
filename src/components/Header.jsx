import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Harihar</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent"
          />
          <FaSearch className="bg-slate-600 bg-transparent" />
        </form>
      </div>
    </header>
  );
}
