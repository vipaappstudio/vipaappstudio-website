"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To build innovative Android applications that empower users to create, edit, and express themselves through intuitive, AI-powered mobile experiences. We strive to make creativity accessible to everyone with fast, reliable, and user-friendly apps.",
    gradient: "from-blue-600 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a globally trusted Android app studio recognized for delivering high-quality mobile applications that inspire creativity, embrace innovation, and provide exceptional user experiences.",
    gradient: "from-violet-600 to-fuchsia-600",
    bg: "from-violet-50 to-fuchsia-50",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Driven by Innovation,
            <br />
            Focused on Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything we build is guided by a clear mission and a long-term
            vision to create exceptional Android applications that users love.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className={`rounded-3xl bg-gradient-to-br ${card.bg} border border-slate-200 p-10 shadow-sm transition-all hover:shadow-xl`}
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${card.gradient} text-white shadow-lg`}
              >
                <card.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}