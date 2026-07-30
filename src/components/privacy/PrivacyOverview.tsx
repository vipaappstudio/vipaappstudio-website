"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

const coverage = [
  {
    icon: Globe,
    title: "Website",
    description:
      "This Privacy Policy applies to your use of the VIPA App Studio website and its related services.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "It also applies to Android applications published by VIPA App Studio through the Google Play Store.",
  },
];

export default function PrivacyOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Overview
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Our Commitment to Your Privacy
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              This Privacy Policy explains how{" "}
              <strong>{COMPANY.name}</strong> collects, uses, stores,
              and protects information when you use our website or any
              of our mobile applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              By accessing our website or using our applications, you
              acknowledge that you have read and understood this Privacy
              Policy. If you do not agree with this policy, please
              discontinue using our services.
            </p>

            <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-600 p-3 text-white">
                  <Building2 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    About {COMPANY.name}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    We develop Android applications focused on creativity,
                    productivity, and user-friendly experiences. Protecting
                    user privacy and maintaining transparency are important
                    parts of how we design and operate our services.
                  </p>
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
          >
            <div className="rounded-3xl bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                This Policy Covers
              </h3>

              <div className="mt-8 space-y-6">
                {coverage.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                      <item.icon className="h-7 w-7" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

                  <p className="leading-7 text-slate-700">
                    We are committed to handling your information responsibly,
                    using only the data necessary to provide and improve our
                    services while respecting your privacy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}