"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  Calendar,
  Bell,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const updateItems = [
  {
    icon: RefreshCw,
    title: "Regular Updates",
    description:
      "We may update these Terms & Conditions from time to time to reflect changes in our services, legal requirements, or business practices.",
  },
  {
    icon: Calendar,
    title: "Last Updated",
    description:
      "The latest revision date is displayed on this page so you can easily identify when these Terms were most recently updated.",
  },
  {
    icon: Bell,
    title: "Stay Informed",
    description:
      "By continuing to use our website or applications after updated Terms become effective, you agree to the revised Terms & Conditions.",
  },
];

export default function TermsUpdates() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Updates
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Updates to These Terms
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            As our services continue to evolve, we may revise these Terms &
            Conditions to reflect new features, legal obligations, or
            operational improvements.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {updateItems.map((item, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-green-200 bg-green-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-green-600 p-3 text-white">
              <Calendar className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Last Updated
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                These Terms &amp; Conditions were last updated on{" "}
                <strong>{COMPANY.termsLastUpdated}</strong>. We encourage you to
                review this page periodically to stay informed about any
                changes.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Our Commitment
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-700">
                We are committed to maintaining clear, transparent, and fair Terms
                &amp; Conditions. Any updates will be published on this page with
                a revised <strong>&ldquo;Last Updated&rdquo;</strong> date to help you
                understand what has changed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}