"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-16 text-center shadow-2xl md:px-16"
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            Join Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Discover the Apps Behind VIPA App Studio
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
             Explore our growing collection of AI-powered Android applications
            designed for creativity, photo editing, and digital experiences.
            Whether you&rsquo;re looking for innovative editing tools or fun creative
            apps, there&rsquo;s something for everyone.
            </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/apps"
              className="inline-flex items-center rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Our Apps
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}