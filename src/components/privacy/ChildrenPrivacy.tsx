"use client";

import { motion } from "framer-motion";
import { Baby, ShieldCheck, Mail } from "lucide-react";

import { COMPANY } from "@/lib/constants";

export default function ChildrenPrivacy() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Children&rsquo;s Privacy
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Protecting Children&rsquo;s Privacy
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We are committed to protecting the privacy of children and handling
            personal information responsibly in accordance with applicable laws
            and platform policies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Baby className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Intended Audience
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Our website and most of our mobile applications are intended for a
              general audience and are not designed to knowingly collect
              personal information from children without appropriate consent,
              where required by applicable law.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              If a specific application is designed for children, it will
              clearly disclose its data collection and privacy practices in
              accordance with applicable laws and Google Play policies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-blue-100 bg-blue-50 p-8"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              If You Believe a Child Has Shared Information
            </h3>

            <p className="mt-5 leading-8 text-slate-700">
              If you believe that a child has provided personal information to
              us without appropriate consent, please contact us. We will review
              the request and take appropriate steps to remove the information
              where required.
            </p>

            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Mail className="mr-2 h-5 w-5" />
              {COMPANY.email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}