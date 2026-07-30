"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Shield,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const responsibilities = [
  {
    icon: UserCheck,
    title: "Provide Accurate Information",
    description:
      "If you choose to contact us or submit information through our website or applications, you agree to provide accurate, current, and complete information.",
  },
  {
    icon: Smartphone,
    title: "Use Services Responsibly",
    description:
      "You are responsible for using our website and applications in a lawful and respectful manner, and for ensuring that your use does not interfere with other users or our services.",
  },
  {
    icon: Shield,
    title: "Protect Your Device",
    description:
      "You are responsible for maintaining the security of your device, operating system, internet connection, and any accounts used to access our services.",
  },
];

const obligations = [
  "Comply with all applicable laws and regulations while using our services.",
  "Keep your device and software updated to help maintain security and compatibility.",
  "Respect the intellectual property rights of VIPA App Studio and third parties.",
  "Avoid activities that may harm, disrupt, or misuse our website or applications.",
  "Report security vulnerabilities or suspected misuse responsibly when possible.",
];

export default function UserResponsibilities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            User Responsibilities
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Your Responsibilities
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            By using our website and applications, you agree to act responsibly,
            comply with these Terms &amp; Conditions, and help maintain a safe
            and secure environment for all users.
          </p>
        </div>

        {/* Responsibility Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {responsibilities.map((item, index) => (
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
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg"
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

        {/* User Obligations */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-green-200 bg-green-50 p-8"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-green-600 p-3 text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Your Obligations
              </h3>

              <p className="mt-2 text-slate-600">
                When using our services, you agree to:
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {obligations.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-5"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />

                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}