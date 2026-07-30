"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Bug,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const categories = [
  {
    icon: Smartphone,
    title: "App Support",
    description:
      "Get help with app installation, updates, compatibility, and general usage.",
    items: [
      "Installation Issues",
      "App Updates",
      "Device Compatibility",
    ],
  },
  {
    icon: Bug,
    title: "Bug Reports",
    description:
      "Report crashes, technical problems, or unexpected behavior in our apps.",
    items: [
      "App Crashes",
      "Performance Issues",
      "Technical Problems",
    ],
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    description:
      "Share your ideas and suggestions to help us improve our applications.",
    items: [
      "New Features",
      "UI Improvements",
      "User Feedback",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Data",
    description:
      "Find information about privacy, permissions, and data deletion requests.",
    items: [
      "Privacy Policy",
      "Permissions",
      "Data Deletion",
    ],
  },
];

export default function SupportCategories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Support Categories
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            we&rsquo;re Here to Help
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Browse the categories below to quickly find the type of assistance
            you need for any VIPA App Studio application.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
                <category.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {category.description}
              </p>

              <ul className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-sm text-slate-700"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}