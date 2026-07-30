"use client";

import { Search } from "lucide-react";

interface AppsHeroProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalApps: number;
}

export default function AppsHero({
  searchTerm,
  onSearchChange,
  totalApps,
}: AppsHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
            📱 {totalApps} Apps Available
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Our Apps
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
          Explore Android applications developed by VIPA App Studio.
          Discover powerful tools for photography, productivity, and everyday
          use—all available on Google Play.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search apps..."
              className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-5 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}