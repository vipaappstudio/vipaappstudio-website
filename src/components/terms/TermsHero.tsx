"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, Scale } from "lucide-react";

import { COMPANY } from "@/lib/constants";

export default function TermsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 md:py-32">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
        >
          <FileText className="mr-2 h-4 w-4" />
          Terms &amp; Conditions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl"
        >
          Terms &{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Conditions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-600"
        >
          These Terms &amp; Conditions govern your access to and use of the
          website and mobile applications provided by{" "}
          <strong>{COMPANY.name}</strong>. By accessing or using our services,
          you agree to comply with these terms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <Calendar className="mr-3 h-5 w-5 text-blue-600" />

            <div className="text-left">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Effective Date
              </p>

              <p className="font-semibold text-slate-900">
                {COMPANY.privacyEffectiveDate}
              </p>
            </div>
          </div>

          <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <Scale className="mr-3 h-5 w-5 text-blue-600" />

            <div className="text-left">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Last Updated
              </p>

              <p className="font-semibold text-slate-900">
                {COMPANY.privacyLastUpdated}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}