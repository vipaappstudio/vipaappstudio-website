"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Android Focused",
    description: "Crafting high-quality Android applications with modern technologies.",
  },
  {
    icon: Sparkles,
    title: "AI Innovation",
    description: "Creating smart photo editing and creative AI-powered experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Experience",
    description: "Building reliable apps enjoyed by millions of users worldwide.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Fast, lightweight and optimized applications for every device.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Who We Are
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Passionate About Building Exceptional Mobile Experiences
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            VIPA App Studio is an Android app development company dedicated to
            creating innovative applications that combine creativity, AI, and
            intuitive design. Our goal is to deliver high-quality experiences
            that make everyday photo editing simple, enjoyable, and accessible.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We continuously improve our apps with regular updates, performance
            enhancements, and new features, ensuring users always receive a
            modern and reliable experience.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 p-8 shadow-lg"
        >
          <h3 className="mb-8 text-2xl font-bold text-slate-900">
            What Defines Us
          </h3>

          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="rounded-2xl bg-blue-600 p-3 text-white">
                  <item.icon className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}