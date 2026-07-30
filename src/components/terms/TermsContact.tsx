"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Globe, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function TermsContact() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
            <FileText className="h-10 w-10" />
          </div>

          <h2 className="mt-8 text-4xl font-black">
            Questions About These Terms?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            If you have any questions regarding these Terms &amp; Conditions or
            the use of our website and mobile applications, we&rsquo;re here to help.
            Feel free to contact us using the information below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          <a
            href={`mailto:${COMPANY.email}`}
            className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:border-blue-500 hover:bg-slate-700"
          >
            <Mail className="mx-auto h-10 w-10 text-blue-400" />

            <h3 className="mt-5 text-xl font-bold">Email</h3>

            <p className="mt-3 break-all text-slate-300">
              {COMPANY.email}
            </p>
          </a>

          <a
            href={COMPANY.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:border-blue-500 hover:bg-slate-700"
          >
            <Globe className="mx-auto h-10 w-10 text-blue-400" />

            <h3 className="mt-5 text-xl font-bold">Website</h3>

            <p className="mt-3 break-all text-slate-300">
              {COMPANY.website}
            </p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-6 py-5"
        >
          <Clock className="h-6 w-6 text-green-400" />

          <div className="text-left">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Response Time
            </p>

            <p className="font-semibold">{COMPANY.responseTime}</p>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </section>
  );
}