"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Play,
  ShieldCheck,
  FileText,
  ArrowRight,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Business Information
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            We&rsquo;re Here to Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you have a question about one of our applications,
            need technical assistance, or want to share feedback,
            our team is happy to help.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <Building2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Company
                </h3>

                <p className="text-slate-600">
                  {COMPANY.name}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Email Support
                </h3>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <Play className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Google Play
                </h3>

                <a
                  href={COMPANY.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Visit Developer Page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white p-10 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Helpful Resources
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Before contacting us, you may find the information you need
            in one of the following resources.
          </p>

          <div className="mt-8 space-y-5">

            <Link
              href="/support"
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Support Center
                  </p>

                  <p className="text-sm text-slate-600">
                    Help with our applications.
                  </p>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400" />
            </Link>

            <Link
              href="/privacy"
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Privacy Policy
                  </p>

                  <p className="text-sm text-slate-600">
                    Learn how we protect your data.
                  </p>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400" />
            </Link>

            <Link
              href="/terms"
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="flex items-center gap-4">
                <FileText className="h-6 w-6 text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Terms & Conditions
                  </p>

                  <p className="text-sm text-slate-600">
                    Read our terms of service.
                  </p>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400" />
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}