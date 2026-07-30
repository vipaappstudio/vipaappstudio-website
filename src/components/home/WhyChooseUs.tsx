"use client";

import {
  Bot,
  Download,
  ShieldCheck,
  Smartphone,
  Gauge,
  RefreshCcw,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Bot,
    title: "AI Powered",
    description:
      "Advanced AI technologies that make photo editing faster, smarter and more creative.",
  },
  {
    icon: Smartphone,
    title: "20+ Android Apps",
    description:
      "A growing portfolio of creative Android applications across multiple categories.",
  },
  {
    icon: Download,
    title: "5M+ Downloads",
    description:
      "Trusted by millions of users worldwide with a strong presence on Google Play.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "We respect user privacy and design our applications with transparency and security in mind.",
  },
  {
    icon: Gauge,
    title: "Optimized Performance",
    description:
      "Lightweight, fast and responsive apps designed for smooth performance across Android devices.",
  },
  {
    icon: RefreshCcw,
    title: "Regular Updates",
    description:
      "Continuous improvements, bug fixes and new features to deliver the best user experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose VIPA
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Building Apps That Millions Love
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine AI innovation, beautiful design and high-performance
            Android development to create applications that people enjoy using
            every day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}