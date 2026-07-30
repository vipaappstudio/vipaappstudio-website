"use client";

import { motion } from "framer-motion";
import {
  Database,
  Clock3,
  Trash2,
  ShieldCheck,
} from "lucide-react";

const retentionItems = [
  {
    icon: Database,
    title: "Information You Provide",
    description:
      "Information you provide when contacting us, such as support requests or feedback, may be retained for as long as necessary to respond to your request, resolve issues, and maintain appropriate business records.",
  },
  {
    icon: Clock3,
    title: "Usage & Diagnostic Data",
    description:
      "Anonymous analytics, crash reports, and diagnostic information may be retained for a reasonable period to help us monitor application performance, improve stability, and enhance the user experience.",
  },
  {
    icon: Trash2,
    title: "Data Deletion",
    description:
      "When information is no longer required for the purpose it was collected, we take reasonable steps to securely delete, anonymize, or otherwise dispose of it, unless a longer retention period is required by law.",
  },
];

export default function DataRetention() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Data Retention
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            How Long We Keep Your Information
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We retain information only for as long as it is reasonably necessary
            to provide our services, comply with legal obligations, resolve
            disputes, enforce our agreements, and improve the quality of our
            applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {retentionItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <item.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-600 p-3 text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Our Retention Principles
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                We strive to retain only the minimum amount of information
                necessary for legitimate business purposes. Information that is
                no longer required is securely deleted, anonymized, or retained
                only where required by applicable law.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}