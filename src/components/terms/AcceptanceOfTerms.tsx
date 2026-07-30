"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Smartphone,
  Globe,
  AlertTriangle,
} from "lucide-react";

const acceptanceItems = [
  {
    icon: Globe,
    title: "Website Usage",
    description:
      "By accessing or using the VIPA App Studio website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "By downloading, installing, or using any mobile application published by VIPA App Studio, you agree to comply with these Terms & Conditions and any applicable platform policies.",
  },
];

export default function AcceptanceOfTerms() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Acceptance
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Acceptance of These Terms
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            These Terms &amp; Conditions govern your use of our website and
            mobile applications. By continuing to access or use our services,
            you confirm that you accept these Terms and agree to comply with
            them.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {acceptanceItems.map((item, index) => (
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
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-amber-200 bg-amber-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-amber-500 p-3 text-white">
              <AlertTriangle className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                If You Do Not Agree
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                If you do not agree with these Terms &amp; Conditions, you should
                discontinue using our website and uninstall or stop using our
                mobile applications. Continued use of our services constitutes
                your acceptance of these Terms.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-green-600 p-3 text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Your Agreement
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                By continuing to use our services, you acknowledge that you have
                read, understood, and accepted these Terms &amp; Conditions, as
                well as our Privacy Policy where applicable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}