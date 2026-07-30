"use client";

import { motion } from "framer-motion";
import {
  UserX,
  Ban,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

const terminationReasons = [
  {
    icon: Ban,
    title: "Violation of Terms",
    description:
      "We may suspend or terminate your access if you violate these Terms & Conditions or engage in activities that are unlawful, harmful, or interfere with our services.",
  },
  {
    icon: ShieldAlert,
    title: "Security & Protection",
    description:
      "Access may be restricted or terminated if necessary to protect our website, applications, users, or systems from security threats, fraud, abuse, or unauthorized activities.",
  },
];

const effects = [
  "Your right to access or use our website and applications may end immediately upon termination.",
  "Termination does not affect any rights or obligations that arose before the termination date.",
  "Certain provisions of these Terms, including those relating to intellectual property, disclaimers, and limitation of liability, will continue to apply where appropriate.",
];

export default function Termination() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Termination
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Suspension &amp; Termination
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We reserve the right to suspend or terminate access to our website
            or applications when necessary to protect our services, users, or
            to enforce these Terms &amp; Conditions.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {terminationReasons.map((item, index) => (
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
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
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

        {/* Effects */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-red-200 bg-red-50 p-8"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-red-600 p-3 text-white">
              <UserX className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Effect of Termination
              </h3>

              <p className="mt-2 text-slate-600">
                If access is suspended or terminated:
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {effects.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-5"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />

                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User Choice */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-green-600 p-3 text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Your Choice
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                You may stop using our website and uninstall our mobile
                applications at any time. If you discontinue using our
                services, these Terms will cease to apply except for provisions
                that are intended to survive termination, as permitted by
                applicable law.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}