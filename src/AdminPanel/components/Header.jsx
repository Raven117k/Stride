// Header.jsx
import React, { useState } from "react";

export default function Header({ setMobileOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="h-16 border-b border-white/10 bg-dark-bg flex items-center justify-between px-3 sm:px-6 shrink-0 relative z-30 md:z-50">
      {/* Mobile toggle using logo */}
      <div
        className="flex items-center md:hidden cursor-pointer"
        onClick={() => setMobileOpen(prev => !prev)}
      >
        <div className="bg-primary w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-charcoal shrink-0">
          <span className="material-symbols-outlined filled-icon text-xl sm:text-2xl">
            bolt
          </span>
        </div>
        <div className="ml-2 flex flex-col text-xs sm:text-sm truncate">
          <h1 className="text-white font-black leading-tight uppercase truncate">
            Admin Console
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest truncate">
            STRIDE
          </p>
        </div>
      </div>

      {/* Desktop search */}
      <div className="flex-1 hidden md:flex max-w-xl">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
            search
          </span>
          <input
            className="w-full bg-card border border-white/10 focus:border-primary/50 focus:ring-0 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 transition-all"
            placeholder="Search system logs, users, or tickets..."
          />
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3 sm:gap-6 ml-3">
        <span
          className="md:hidden material-symbols-outlined text-gray-500 text-lg cursor-pointer"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          search
        </span>
      </div>

      {/* Mobile search input */}
      {searchOpen && (
        <div className="absolute left-0 right-0 top-16 px-3 md:hidden z-40">
          <input
            className="w-full bg-card border border-white/10 rounded-full py-2 pl-4 pr-4 text-sm text-white placeholder:text-gray-600"
            placeholder="Search system logs, users, or tickets..."
          />
        </div>
      )}
    </header>
  );
}
