"use client";

import { motion } from "framer-motion";
import {
  Trash2,
  Mail,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

const steps = [
  {
    icon: Mail,
    title: "Submit a Request",
    description: `Send your data deletion request to ${COMPANY.email}. Please include the application name and sufficient details to help us identify your request.`,
  },
  {
    icon: Clock3,
    title: "Request Review",
    description:
      "We will review your request and may contact you if additional information is required to verify or process it.",
  },
  {
    icon: Trash2,
    title: "Deletion Process",
    description:
      "Where applicable, we will delete or anonymize your personal information within a reasonable timeframe, unless we are legally required to retain certain information.",
  },
];

export default function DataDeletionSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Data Deletion
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Request Deletion of Your Information
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We respect your privacy and your right to request deletion of
            personal information that you have provided to us. If your
            information is stored by us, you may submit a deletion request using
            the contact details below.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
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
                <step.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {step.description}
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
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-600 p-3 text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900">
                Contact for Data Deletion
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                To request deletion of your personal information, please email
                us at:
              </p>

              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-4 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                {COMPANY.email}
              </a>

              <p className="mt-6 leading-7 text-slate-600">
                We aim to respond to data deletion requests within{" "}
                <strong>{COMPANY.responseTime}</strong>. Some information may be
                retained where required by applicable laws or to resolve
                legitimate disputes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}