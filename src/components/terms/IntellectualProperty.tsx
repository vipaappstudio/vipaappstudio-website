"use client";

import { motion } from "framer-motion";
import {
  Copyright,
  Code2,
  Palette,
  ShieldCheck,
} from "lucide-react";

const intellectualProperties = [
  {
    icon: Code2,
    title: "Applications & Source Code",
    description:
      "All mobile applications, software, source code, functionality, and related technologies developed by VIPA App Studio are protected by applicable intellectual property laws and remain the exclusive property of VIPA App Studio or its licensors.",
  },
  {
    icon: Palette,
    title: "Design & Content",
    description:
      "The website design, user interface, graphics, icons, images, text, logos, and other content are owned by or licensed to VIPA App Studio and are protected by copyright, trademark, and other applicable laws.",
  },
];

const restrictions = [
  "Copy, reproduce, distribute, or republish our content without authorization.",
  "Modify, translate, adapt, or create derivative works from our applications or website.",
  "Reverse engineer, decompile, or attempt to extract source code except where expressly permitted by applicable law.",
  "Use our trademarks, logos, branding, or other intellectual property without prior written permission.",
];

export default function IntellectualProperty() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Intellectual Property
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Ownership of Our Content
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Unless otherwise stated, all intellectual property rights in our
            website, applications, software, branding, and related content are
            owned by or licensed to VIPA App Studio and are protected under
            applicable intellectual property laws.
          </p>
        </div>

        {/* Ownership Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {intellectualProperties.map((item, index) => (
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

        {/* Restrictions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-amber-200 bg-amber-50 p-8"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-amber-500 p-3 text-white">
              <Copyright className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Restrictions
              </h3>

              <p className="mt-2 text-slate-600">
                Without our prior written permission, you must not:
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {restrictions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-5"
              >
                <Copyright className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />

                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-600 p-3 text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Respect for Intellectual Property
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Nothing in these Terms grants you ownership of our intellectual
                property. You are granted only a limited, non-exclusive,
                non-transferable right to access and use our website and
                applications in accordance with these Terms &amp; Conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}