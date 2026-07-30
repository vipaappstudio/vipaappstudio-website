"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      {/* Decorative Blurs */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black text-white md:text-5xl"
        >
          Ready to Explore Our Apps?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100"
        >
          Discover AI-powered Android applications designed for photo editing,
          creativity and productivity. Join millions of users enjoying our apps
          worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/apps"
            className="inline-flex items-center rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Explore Apps
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <a
            href="https://play.google.com/store/apps/developer?id=Vipa+App+Studio&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Visit Google Play
          </a>
        </motion.div>
      </div>
    </section>
  );
}