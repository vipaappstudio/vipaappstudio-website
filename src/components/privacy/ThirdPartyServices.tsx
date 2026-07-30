"use client";

import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  BarChart3,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    title: "Google Play Services",
    description:
      "Some of our applications rely on Google Play Services to provide core Android functionality, improve compatibility, and enhance the user experience.",
    url: "https://policies.google.com/privacy",
  },
  {
    title: "Google AdMob",
    description:
      "Some applications may display advertisements provided by Google AdMob. AdMob may collect and process certain information to provide and measure advertising in accordance with Google's Privacy Policy.",
    url: "https://policies.google.com/privacy",
  },
  {
    title: "Firebase Analytics",
    description:
      "Some applications may use Firebase Analytics to understand app usage, measure performance, and improve features. Analytics information is generally collected in an aggregated form.",
    url: "https://firebase.google.com/support/privacy",
  },
];

export default function ThirdPartyServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Third-Party Services
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Services We May Use
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Some of our website features and mobile applications may integrate
            trusted third-party services to improve functionality, analytics,
            and application performance. These providers process information in
            accordance with their own privacy policies.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    {index === 0 ? (
                      <Server className="h-8 w-8" />
                    ) : index === 1 ? (
                      <ShieldCheck className="h-8 w-8" />
                    ) : (
                      <BarChart3 className="h-8 w-8" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Privacy Policy
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
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
            Important Notice
          </h3>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Third-party services operate under their own privacy policies and
            terms. We encourage you to review their privacy practices before
            using features that rely on these services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}