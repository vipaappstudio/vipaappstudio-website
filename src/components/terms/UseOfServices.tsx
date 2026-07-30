"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Ban,
  Scale,
} from "lucide-react";

const permittedUses = [
  {
    icon: CheckCircle2,
    title: "Lawful Use",
    description:
      "You agree to use our website and applications only for lawful purposes and in compliance with all applicable laws, regulations, and platform policies.",
  },
  {
    icon: Shield,
    title: "Respect Our Services",
    description:
      "You must not interfere with, disrupt, or attempt to gain unauthorized access to our website, applications, servers, or related systems.",
  },
];

const prohibitedUses = [
  "Reverse engineer, decompile, or modify our applications except where permitted by applicable law.",
  "Use our services for fraudulent, illegal, or harmful activities.",
  "Upload or distribute viruses, malware, or other malicious software.",
  "Attempt to bypass security measures or gain unauthorized access to our systems.",
  "Copy, reproduce, or redistribute our content without prior written permission where required.",
  "Use our services in a way that may damage, disable, or negatively affect other users or our infrastructure.",
];

export default function UseOfServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Use of Services
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Acceptable Use of Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We want everyone to enjoy a safe, reliable, and secure experience.
            By using our website and mobile applications, you agree to use them
            responsibly and in accordance with these Terms &amp; Conditions.
          </p>
        </div>

        {/* Permitted Use */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {permittedUses.map((item, index) => (
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

        {/* Prohibited Activities */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-red-200 bg-red-50 p-8"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-red-600 p-3 text-white">
              <Ban className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Prohibited Activities
              </h3>

              <p className="mt-2 text-slate-600">
                You agree not to engage in activities including, but not limited
                to:
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {prohibitedUses.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-5"
              >
                <Ban className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />

                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-600 p-3 text-white">
              <Scale className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Compliance with Laws
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                You are responsible for ensuring that your use of our website
                and applications complies with all applicable local, national,
                and international laws. Failure to comply with these Terms may
                result in suspension or termination of access to our services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}