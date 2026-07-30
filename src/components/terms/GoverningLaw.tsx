"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Globe,
  Landmark,
  Gavel,
} from "lucide-react";

const governingLawItems = [
  {
    icon: Globe,
    title: "Applicable Law",
    description:
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India, without regard to its conflict of law principles.",
  },
  {
    icon: Landmark,
    title: "Jurisdiction",
    description:
      "Any disputes arising out of or relating to these Terms or your use of our website or applications shall be subject to the exclusive jurisdiction of the competent courts in India, unless otherwise required by applicable law.",
  },
];

export default function GoverningLaw() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Governing Law
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Applicable Law & Jurisdiction
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            These Terms &amp; Conditions are governed by the laws of India. By
            using our website and applications, you agree that any legal matters
            relating to these Terms will be handled in accordance with the
            applicable laws and jurisdiction described below.
          </p>
        </div>

        {/* Law Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {governingLawItems.map((item, index) => (
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

        {/* Dispute Resolution */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-600 p-3 text-white">
              <Gavel className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Dispute Resolution
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                We encourage users to contact us first to resolve any concerns
                or disputes amicably. If a dispute cannot be resolved through
                discussion, it shall be handled in accordance with the
                applicable laws of India and the competent courts having
                jurisdiction.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-green-600 p-3 text-white">
              <Scale className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Legal Compliance
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Nothing in these Terms &amp; Conditions limits any rights or
                protections available to users under applicable consumer
                protection or other mandatory laws. Where local law provides
                additional rights, those rights will continue to apply.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}