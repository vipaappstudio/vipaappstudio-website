"use client";

import { motion } from "framer-motion";
import {
  User,
  Smartphone,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    icon: User,
    title: "Information You Provide",
    description:
      "You may voluntarily provide information when you contact us for support, send feedback, report a problem, or request assistance. This may include your name, email address, and any information you choose to include in your message.",
  },
  {
    icon: Smartphone,
    title: "Device & App Information",
    description:
      "Depending on the application you use, certain technical information may be collected automatically, such as your device model, Android version, language settings, app version, and general device configuration. This information helps us maintain compatibility and improve app performance.",
  },
  {
    icon: BarChart3,
    title: "Usage & Diagnostic Information",
    description:
      "Some applications may collect anonymous usage statistics, crash reports, and diagnostic information through trusted third-party services. This information helps us identify bugs, improve stability, and enhance the overall user experience. We do not use this information to personally identify you.",
  },
  {
    icon: ShieldCheck,
    title: "Permissions",
    description:
      "Certain applications may request access to device features such as the camera, photos and videos, storage, or notifications. These permissions are requested only when necessary to provide a specific feature and are used solely for their intended purpose.",
  },
];

export default function InformationCollection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Information Collection
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            What Information We Collect
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We collect only the information necessary to operate our website,
            provide our applications, respond to support requests, improve our
            services, and comply with applicable legal obligations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
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
                <section.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {section.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Our Commitment
          </h3>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            We are committed to collecting only the minimum information
            reasonably necessary to provide our services. We do not sell your
            personal information, and we do not collect sensitive personal data
            unless it is required for a specific feature and clearly disclosed
            to you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}