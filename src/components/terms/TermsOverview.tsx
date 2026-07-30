"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Smartphone,
  FileCheck,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

const appliesTo = [
  {
    icon: Globe,
    title: "Website",
    description:
      "These Terms & Conditions apply to your access to and use of the VIPA App Studio website, including all pages, content, and related services.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "These Terms also apply to Android applications developed and published by VIPA App Studio through the Google Play Store and other supported platforms.",
  },
];

export default function TermsOverview() {
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
              About These Terms
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              These Terms &amp; Conditions establish the legal agreement between{" "}
              <strong>{COMPANY.name}</strong> and every user who accesses our
              website or uses our mobile applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              They explain your rights and responsibilities when using our
              services, as well as our responsibilities in providing those
              services. Please read these Terms carefully before using our
              website or applications.
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
                    {COMPANY.name} develops Android applications and operates
                    this website to provide creative, productive, and
                    user-friendly digital experiences. These Terms help ensure a
                    safe, transparent, and fair experience for all users.
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
                These Terms Apply To
              </h3>

              <div className="mt-8 space-y-6">
                {appliesTo.map((item) => (
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
                  <FileCheck className="mt-1 h-6 w-6 text-green-600" />

                  <p className="leading-7 text-slate-700">
                    By continuing to access or use our website or applications,
                    you acknowledge that you have read, understood, and agree to
                    be bound by these Terms &amp; Conditions.
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