"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

export default function PrivacyContact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-10 text-white shadow-2xl md:p-14"
        >
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
              <ShieldCheck className="h-10 w-10 text-blue-300" />
            </div>

            <h2 className="mt-8 text-4xl font-black md:text-5xl">
              Questions About Privacy?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              If you have any questions about this Privacy Policy, our data
              practices, or wish to exercise your privacy rights, we&rsquo;re here to
              help. Feel free to contact us and we&rsquo;ll respond as soon as
              reasonably possible.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <a
              href={`mailto:${COMPANY.email}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-600 p-4">
                  <Mail className="h-7 w-7 text-white" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Email
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    {COMPANY.email}
                  </h3>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center font-semibold text-blue-300 group-hover:text-blue-200">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-600 p-4">
                  <Globe className="h-7 w-7 text-white" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Website
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    {COMPANY.website.replace("https://", "")}
                  </h3>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center font-semibold text-blue-300 group-hover:text-blue-200">
                Visit Website
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-slate-300">
              We aim to respond to privacy-related inquiries within{" "}
              <strong className="text-white">
                {COMPANY.responseTime}
              </strong>
              .
            </p>

            <p className="mt-3 text-sm text-slate-400">
              © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}