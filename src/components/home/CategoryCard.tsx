"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function CategoryCard({
  title,
  description,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-2xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
        <Icon size={30} />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 inline-flex items-center font-semibold text-blue-600">
        Learn More

        <ArrowUpRight
          size={18}
          className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
    </motion.div>
  );
}