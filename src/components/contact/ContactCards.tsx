"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Clock3,
  Globe2,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

const cards = [
  {
    icon: Mail,
    title: "Email Support",
    value: COMPANY.email,
    description:
      "For support, feedback, feature requests, or general inquiries.",
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "24–48 Hours",
    description:
      "We aim to respond to all inquiries as quickly as possible.",
  },
  {
    icon: Globe2,
    title: "Worldwide Support",
    value: "Available Globally",
    description:
      "Our applications are used by people around the world.",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
                <card.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {card.title}
              </h3>

              {card.href ? (
                <a
                  href={card.href}
                  className="mt-4 block text-lg font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  {card.value}
                </a>
              ) : (
                <p className="mt-4 text-lg font-semibold text-slate-900">
                  {card.value}
                </p>
              )}

              <p className="mt-4 leading-7 text-slate-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}