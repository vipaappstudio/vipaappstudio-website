"use client";

import AppCard from "./AppCard";

const apps = [
  {
    title: "Photo Editor Pro - AI Filters",
    category: "AI Editing",
    description:
      "Edit photos with AI filters, stickers, frames, text, and professional enhancement tools.",
    rating: "4.7",
    downloads: "1M+",
    image: "/apps/app_photo_pro.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.vipastudio.photoeditorpro&hl=en_IN",
  },
  {
    title: "AI Background Remover",
    category: "AI Tools",
    description:
      "Remove and replace photo backgrounds instantly with AI for clean, professional results.",
    rating: "4.5",
    downloads: "100K+",
    image: "/apps/app_bg_remove.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.vipastudio.bgremover&hl=en_IN",
  },
  {
    title: "Police Photo Editor",
    category: "Photo Editor",
    description:
      "Create realistic police uniform photos with stylish frames, badges, and creative photo effects.",
    rating: "4.5",
    downloads: "100K+",
    image: "/apps/app_police_app_icon.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.vipastudio.policephotoeditor&hl=en_IN",
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