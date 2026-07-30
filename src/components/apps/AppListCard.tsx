"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink, Star } from "lucide-react";

import { App } from "@/types/app";

interface AppListCardProps {
  app: App;
}

export default function AppListCard({ app }: AppListCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl"
    >
      {/* App Icon */}
      <div className="mb-5 flex justify-center">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
          <Image
            src={app.icon}
            alt={app.title}
            width={96}
            height={96}
            className="h-20 w-20 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Category */}
      <div className="mb-3 flex justify-center">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
          {app.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-center text-xl font-bold text-slate-900">
        {app.title}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-center text-sm leading-6 text-slate-600">
        {app.description}
      </p>

      {/* Stats */}
      <div className="mt-5 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-1 text-slate-700">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-medium">{app.rating}</span>
        </div>

        <div className="flex items-center gap-1 text-slate-700">
          <Download
            size={18}
            className="text-blue-600"
          />
          <span className="font-medium">{app.downloads}</span>
        </div>
      </div>

      {/* Google Play Button */}
      <Link
        href={app.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Google Play
        <ExternalLink
          size={18}
          className="ml-2"
        />
      </Link>
    </motion.div>
  );
}