"use client";

import { useState } from "react";

import AppList from "@/components/apps/AppList";
import AppsHero from "@/components/apps/AppsHero";
import { apps } from "@/data/apps";

export default function AppsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen bg-white">
      <AppsHero
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalApps={apps.length}
      />

      <AppList
        apps={apps}
        searchTerm={searchTerm}
      />
    </main>
  );
}