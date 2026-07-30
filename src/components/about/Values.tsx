"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new technologies, AI, and creative ideas to build Android applications that solve real-world problems and inspire creativity.",
  },
  {
    icon: HeartHandshake,
    title: "User-Centric Design",
    description:
      "Every feature is designed with our users in mind, ensuring simple, intuitive, and enjoyable experiences across all our applications.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "We focus on performance, stability, and security, delivering applications that users can trust every day.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We regularly enhance our apps with new features, performance optimizations, and updates based on user feedback.",
  },
];

export default function Values() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Values
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            The Principles That Drive Everything We Build
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our values guide every decision we make—from designing intuitive
            user experiences to delivering reliable, high-quality Android
            applications.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
                <value.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}