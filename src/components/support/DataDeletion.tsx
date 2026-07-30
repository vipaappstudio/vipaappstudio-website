"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  Trash2,
  ArrowRight,
  Clock3,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

export default function DataDeletion() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-lg"
        >
          <div className="grid gap-12 p-10 lg:grid-cols-2 lg:p-14">
            {/* Left */}
            <div>
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                Privacy & Data
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900">
                Request Data Deletion
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                If one of our applications stores your personal information,
                you may request deletion of your data. We respect your privacy
                and process eligible requests in accordance with our Privacy
                Policy and applicable laws.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Request via Email
                </a>

                <Link
                  href="/privacy"
                  className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
                >
                  Privacy Policy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                What to Include
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-blue-100 p-3">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      App Name
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Specify which VIPA App Studio application your request
                      relates to.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-red-100 p-3">
                    <Trash2 className="h-6 w-6 text-red-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Request Details
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Briefly describe your request and provide any information
                      needed to identify your account, if applicable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-green-100 p-3">
                    <Clock3 className="h-6 w-6 text-green-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Processing Time
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Eligible requests are reviewed and processed as quickly as
                      reasonably possible. We may contact you if additional
                      verification is required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}