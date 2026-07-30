"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ExternalLink, Star } from "lucide-react";

interface AppCardProps {
  title: string;
  category: string;
  description: string;
  rating: string;
  downloads: string;
  image: string;
  playStore: string;
}

export default function AppCard({
  title,
  category,
  description,
  rating,
  downloads,
  image,
  playStore,
}: AppCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-200 hover:shadow-2xl"
    >
      {/* Screenshot */}

      <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
        <Image
          src={image}
          alt={title}
          width={600}
          height={1200}
         className="mx-auto h-[280px] w-auto transition duration-500 group-hover:scale-105"
        />

       <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-blue-700 shadow">
            {category}
        </div>
      </div>

      {/* Content */}

      <div className="p-5">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-3 flex items-center gap-4 text-slate-600">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span>{rating}</span>
          </div>

          <div className="flex items-center gap-1 text-slate-600">
            <Download size={18} />
            <span>{downloads}</span>
          </div>
        </div>

        <div className="mt-7">
          <a
            href={playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-1"
          >
            Google Play

            <ExternalLink
              size={18}
              className="ml-2"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}