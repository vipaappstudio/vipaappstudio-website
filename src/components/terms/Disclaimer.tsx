"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Wrench,
  Wifi,
  ShieldAlert,
} from "lucide-react";

const disclaimerItems = [
  {
    icon: Wrench,
    title: "Provided 'As Is'",
    description:
      "Our website and mobile applications are provided on an 'as is' and 'as available' basis. While we strive to deliver reliable services, we do not guarantee that all features will always operate without interruption or error.",
  },
  {
    icon: Wifi,
    title: "Availability",
    description:
      "Service availability may be affected by maintenance, software updates, network connectivity, third-party services, or circumstances beyond our reasonable control.",
  },
  {
    icon: ShieldAlert,
    title: "No Warranty",
    description:
      "To the fullest extent permitted by applicable law, we disclaim warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
];

export default function Disclaimer() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Disclaimer
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Service Disclaimer
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We work hard to provide high-quality applications and services.
            However, no software or online service can guarantee uninterrupted
            availability or completely error-free operation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {disclaimerItems.map((item, index) => (
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
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-amber-200 bg-amber-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-amber-500 p-3 text-white">
              <AlertTriangle className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Important Notice
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                We make reasonable efforts to keep our website and applications
                secure, accurate, and up to date. However, we cannot guarantee
                that they will always be free from defects, vulnerabilities,
                delays, interruptions, or inaccuracies. Your use of our services
                is at your own discretion and risk, to the extent permitted by
                applicable law.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}