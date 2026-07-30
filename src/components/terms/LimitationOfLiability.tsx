"use client";

import { motion } from "framer-motion";
import {
  Shield,
  AlertCircle,
  ServerCrash,
  Scale,
} from "lucide-react";

const limitations = [
  {
    icon: ServerCrash,
    title: "Service Interruptions",
    description:
      "VIPA App Studio is not responsible for temporary interruptions, delays, technical issues, or unavailability of our website or applications resulting from maintenance, network failures, third-party services, or events beyond our reasonable control.",
  },
  {
    icon: AlertCircle,
    title: "Indirect Damages",
    description:
      "To the fullest extent permitted by applicable law, VIPA App Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or applications.",
  },
  {
    icon: Shield,
    title: "User Responsibility",
    description:
      "You are responsible for how you use our services and for maintaining appropriate backups of your own data. We recommend exercising caution when storing or sharing important information through any digital service.",
  },
];

export default function LimitationOfLiability() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Limitation of Liability
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Limits of Our Liability
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            While we strive to provide reliable and secure services, our
            liability is limited to the maximum extent permitted by applicable
            law. Please review the following limitations carefully.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {limitations.map((item, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-600 p-3 text-white">
              <Scale className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Legal Limitation
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Nothing in these Terms &amp; Conditions excludes or limits any
                liability that cannot legally be excluded or limited under
                applicable law. Where such limitations are permitted, our
                liability shall be limited to the fullest extent allowed by
                law.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}