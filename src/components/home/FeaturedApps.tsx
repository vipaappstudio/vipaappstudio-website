"use client";

import AppCard from "./AppCard";

const apps = [
  {
    title: "Photo Editor Pro",
    category: "AI Editing",
    description:
      "Professional AI-powered photo editing with filters, effects and creative tools.",
    rating: "4.6",
    downloads: "1M+",
    image: "/apps/app_photo_pro.webp",
    playStore: "#",
  },
  {
    title: "Background Remover",
    category: "AI Tools",
    description:
      "Remove photo backgrounds instantly using advanced AI technology.",
    rating: "4.5",
    downloads: "500K+",
    image: "/apps/app_bg_remove.webp",
    playStore: "#",
  },
  {
    title: "Police Photo Suit Editor",
    category: "Photo Editor",
    description:
      "Create realistic police uniform photos with AI-powered editing and professional photo effects.",
    rating: "4.7",
    downloads: "750K+",
    image: "/apps/app_police_app_icon.webp",
    playStore: "#",
  },
];

export default function FeaturedApps() {
  return (
    <section
      id="apps"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Apps
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Millions of Downloads Worldwide
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore some of our most popular Android applications loved by
            millions of users across the world.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => (
            <AppCard
              key={app.title}
              {...app}
            />
          ))}
        </div>
      </div>
    </section>
  );
}