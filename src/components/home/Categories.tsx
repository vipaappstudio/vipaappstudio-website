"use client";

import {
  Sparkles,
  Camera,
  Wand2,
  ImageIcon,
  Scissors,
  Palette,
} from "lucide-react";

import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "AI Photo Editing",
    description:
      "Powerful AI tools to transform photos with intelligent editing and enhancements.",
    icon: Sparkles,
  },
  {
    title: "Background Remover",
    description:
      "Remove backgrounds instantly with accurate AI-powered cutout technology.",
    icon: Scissors,
  },
  {
    title: "Beauty & Makeup",
    description:
      "Apply makeup, beauty filters and face retouching in just a few taps.",
    icon: Palette,
  },
  {
    title: "Photo Effects",
    description:
      "Create stunning artistic effects, movie styles and creative photo transformations.",
    icon: Camera,
  },
  {
    title: "AI Filters",
    description:
      "Generate unique AI-powered filters for portraits and social media content.",
    icon: Wand2,
  },
  {
    title: "Creative Tools",
    description:
      "Frames, collages, stickers and editing utilities for professional-looking images.",
    icon: ImageIcon,
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-gradient-to-b from-white to-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            What We Build
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Explore Our App Categories
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From AI-powered photo editing to creative visual tools, VIPA App
            Studio develops applications that help millions of users create,
            edit and enhance images effortlessly.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}