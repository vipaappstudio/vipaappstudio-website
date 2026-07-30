"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  Calendar,
  Bell,
  ShieldCheck,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";

export default function PolicyUpdates() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Policy Updates
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Changes to This Privacy Policy
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We may update this Privacy Policy from time to time to reflect
            changes in our applications, website, legal requirements, or
            business practices. We encourage you to review this page
            periodically to stay informed about how we protect your information.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <RefreshCw className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Regular Updates
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              We may revise this Privacy Policy whenever necessary to reflect
              improvements to our services, new features, or changes in
              applicable laws and regulations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Calendar className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Last Updated
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              The <strong>&ldquo;Last Updated&rdquo;</strong> date displayed on this page
              indicates when this Privacy Policy was most recently revised.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-100 px-5 py-4">
              <p className="text-sm font-medium text-slate-500">
                Last Updated
              </p>

              <p className="mt-1 text-lg font-bold text-slate-900">
                {COMPANY.privacyLastUpdated}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Bell className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Stay Informed
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Your continued use of our website or applications after changes
              become effective constitutes your acceptance of the updated
              Privacy Policy, to the extent permitted by applicable law.
            </p>
          </motion.div>
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

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Transparency Commitment
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                We are committed to maintaining transparency about our privacy
                practices. Any significant updates to this Privacy Policy will
                be reflected by updating the revision date on this page.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}