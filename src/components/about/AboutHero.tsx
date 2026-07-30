"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 md:py-32">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
        >
          <Building2 className="mr-2 h-4 w-4" />
          About VIPA App Studio
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 max-w-4xl text-5xl font-black leading-tight text-slate-900 md:text-6xl"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI-Powered Android Apps
          </span>{" "}
          That Inspire Creativity
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-600"
        >
          VIPA App Studio develops innovative Android applications for photo
          editing, AI-powered creativity, beauty tools, and digital imaging.
          Our mission is to build fast, intuitive, and reliable apps that help
          users create, edit, and express themselves with confidence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/apps"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Our Apps
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}