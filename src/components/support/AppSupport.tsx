"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Smartphone,
  FileText,
  Camera,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const contactSteps = [
  {
    icon: Mail,
    title: "Contact Our Support Team",
    description:
      "Email us with your question or issue, and we'll do our best to assist you.",
  },
  {
    icon: Smartphone,
    title: "Include the App Name",
    description:
      "Tell us which VIPA App Studio application you're using and the version installed.",
  },
  {
    icon: FileText,
    title: "Describe the Issue",
    description:
      "Provide a clear explanation of what happened and the steps to reproduce the issue.",
  },
  {
    icon: Camera,
    title: "Attach Screenshots (Optional)",
    description:
      "Screenshots or screen recordings help us understand and resolve issues faster.",
  },
];

const troubleshootingTips = [
  "Update the app to the latest version from Google Play.",
  "Restart your device and try again.",
  "Ensure your Android OS is up to date.",
  "Check that all required app permissions are enabled.",
  "Verify that your internet connection is stable.",
  "Clear the app cache if you're experiencing unexpected behavior.",
];

export default function AppSupport() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Contact Support
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Help Us Resolve Your Issue Faster
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              When contacting our support team, including the right information
              helps us investigate and resolve your issue as quickly as possible.
            </p>

            <div className="mt-10 space-y-6">
              {contactSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex gap-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                    <step.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-10 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3 text-white">
                <RefreshCcw className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Before Contacting Support
              </h3>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Many common issues can be resolved by following these simple
              troubleshooting steps.
            </p>

            <div className="mt-8 space-y-5">
              {troubleshootingTips.map((tip) => (
                <div key={tip} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />

                  <p className="leading-7 text-slate-700">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}