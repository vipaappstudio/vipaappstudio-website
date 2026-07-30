"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import FloatingBackground from "./FloatingBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <FloatingBackground />

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl grid-cols-1 items-center gap-8 px-6 py-8 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm"
          >
            <Sparkles size={16} />
            Trusted by 5M+ Android Users Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl"
          >
            Create Stunning
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              AI Photo &
              <br />
              Video Apps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            VIPA App Studio develops AI-powered Android applications for
            photo editing, background removal, beauty filters, fashion
            montages, movie effects and creative tools trusted by millions
            of users around the world.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/apps"
              className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
            >
              Explore Apps

              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://play.google.com/store/apps/developer?id=Vipa+App+Studio&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-slate-50"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Visit Play Store
            </a>
          </motion.div>

          {/* STATS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8"
          >
            <div>
              <h2 className="text-5xl font-black text-slate-900">
                20+
              </h2>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Creative Apps
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-slate-900">
                5M+
              </h2>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Downloads
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-slate-900">
                4.5★
              </h2>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Average Rating
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex items-center justify-center">
          {/* Glow */}

          <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-violet-500/25 blur-3xl" />

          {/* Phone */}

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 -mt-18 lg:-mt-22"
          >
            <Image
              src="/hero/phone.webp"
              alt="VIPA App Studio"
              width={550}
              height={1050}
              priority
              className="w-full max-w-md drop-shadow-[0_60px_100px_rgba(59,130,246,0.45)]"
            />
          </motion.div>

          {/* Decorative Blobs */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute left-8 top-24 h-16 w-16 rounded-full bg-blue-500/20 blur-xl"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="absolute right-12 top-40 h-20 w-20 rounded-full bg-purple-500/20 blur-xl"
          />

          <motion.div
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-24 left-16 h-14 w-14 rounded-full bg-cyan-400/30 blur-lg"
          />
        </div>
      </div>
    </section>
  );
}