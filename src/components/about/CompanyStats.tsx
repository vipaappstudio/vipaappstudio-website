"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Smartphone,
  Download,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const stats = [
  {
    icon: Smartphone,
    value: 20,
    suffix: "+",
    title: "Android Apps",
    description:
      "Creative applications published across multiple categories.",
  },
  {
    icon: Download,
    value: 5,
    suffix: "M+",
    title: "Downloads",
    description:
      "Millions of users have downloaded and enjoyed our apps.",
  },
  {
    icon: Sparkles,
    value: 100,
    suffix: "%",
    title: "AI-Powered Innovation",
    description:
      "Focused on delivering modern AI-enhanced mobile experiences.",
  },
  {
    icon: RefreshCw,
    value: 24,
    suffix: "/7",
    title: "Continuous Improvement",
    description:
      "Regular updates, optimizations and feature enhancements.",
  },
];

export default function CompanyStats() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Trusted by Users Around the World
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We are committed to building high-quality Android applications
            that combine creativity, performance, and innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <stat.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-5xl font-black text-white">
                <CountUp
                  end={stat.value}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </h3>

              <p className="mt-3 text-xl font-semibold text-white">
                {stat.title}
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}