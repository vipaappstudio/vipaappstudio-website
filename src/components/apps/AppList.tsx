"use client";

import { SearchX } from "lucide-react";

import { App } from "@/types/app";
import AppListCard from "./AppListCard";

interface AppListProps {
  apps: App[];
  searchTerm: string;
}

export default function AppList({
  apps,
  searchTerm,
}: AppListProps) {
  const filteredApps = apps.filter((app) => {
    const query = searchTerm.toLowerCase();

    return (
      app.title.toLowerCase().includes(query) ||
      app.category.toLowerCase().includes(query) ||
      app.description.toLowerCase().includes(query)
    );
  });

  if (filteredApps.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-20 text-center">
          <SearchX
            size={56}
            className="mb-6 text-slate-400"
          />

          <h2 className="text-2xl font-bold text-slate-900">
            No apps found
          </h2>

          <p className="mt-3 max-w-md text-slate-600">
                We could not find any apps matching your search.
                Try using a different keyword.
            </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredApps.map((app) => (
          <AppListCard
            key={app.id}
            app={app}
          />
        ))}
      </div>
    </section>
  );
}