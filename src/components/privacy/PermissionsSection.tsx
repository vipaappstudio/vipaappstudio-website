"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Image,
  Bell,
  Wifi,
  ShieldCheck,
} from "lucide-react";

const permissions = [
  {
    icon: Camera,
    title: "Camera",
    description:
      "Some applications may request camera access to capture photos or enable camera-based features. Camera access is only used while the feature is active and is never used without your permission.",
  },
  {
    icon: Image,
    title: "Photos & Videos",
    description:
      "Certain applications may request access to photos or videos stored on your device so you can select, edit, or save media. We only access files that you choose to share with the application.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Some applications may request permission to send notifications, such as important updates, reminders, or feature announcements. You can manage notification preferences through your device settings.",
  },
  {
    icon: Wifi,
    title: "Internet Access",
    description:
      "Internet access may be required to load online content, display advertisements, access cloud-based services, or check for updates. Network communication is limited to the functionality provided by the application.",
  },
];

export default function PermissionsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            App Permissions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Permissions Requested by Our Applications
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Depending on the functionality of a particular application, we may
            request access to certain device features. Permissions are requested
            only when required to provide specific functionality and can be
            managed through your device settings.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {permissions.map((permission, index) => (
            <motion.div
              key={permission.title}
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
                <permission.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {permission.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {permission.description}
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

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Your Control
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                You are always in control of the permissions granted to our
                applications. You may review, allow, deny, or revoke permissions
                at any time through your Android device settings. Some features
                may not function correctly if the required permissions are
                disabled.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}