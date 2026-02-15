"use client";

import { Suspense, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { europeCountries, europeLinks } from "@/data/europe";
import type { RelationType } from "@/lib/types";
import {
  useFilteredLinks,
  useVisibleCountries,
  useNodesWithSize,
} from "@/lib/hooks";
import ControlPanel from "@/components/ControlPanel";
import Legend from "@/components/Legend";
import StatsPanel from "@/components/StatsPanel";
import GraphCanvas from "@/components/GraphCanvas";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

function GraphApp() {
  const searchParams = useSearchParams();
  const [relationType, setRelationType] = useState<RelationType>("geographic");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Initialize from URL on mount
  useEffect(() => {
    const typeParam = (searchParams.get("type") || "").toLowerCase();
    const countryParam = searchParams.get("country");
    const valid: RelationType[] = [
      "geographic",
      "commercial",
      "diplomatic",
      "military",
    ];
    if (valid.includes(typeParam as RelationType)) {
      setRelationType(typeParam as RelationType);
    }
    if (countryParam) {
      setSelectedCountry(countryParam);
    }
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync state changes to URL (without reloading!)
  useEffect(() => {
    if (!isReady) return;
    const params = new URLSearchParams();
    params.set("type", relationType);
    if (selectedCountry) params.set("country", selectedCountry);
    const url = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", url);
  }, [relationType, selectedCountry, isReady]);

  // Derived data
  const filteredLinks = useFilteredLinks(
    europeLinks,
    relationType,
    selectedCountry
  );
  const visibleCountries = useVisibleCountries(filteredLinks, selectedCountry);
  const nodesWithSize = useNodesWithSize(
    europeCountries,
    visibleCountries,
    relationType
  );

  const handleRelationChange = useCallback((type: RelationType) => {
    setRelationType(type);
  }, []);

  const handleCountryChange = useCallback((id: string | null) => {
    setSelectedCountry(id);
  }, []);

  const handleNodeClick = useCallback((id: string) => {
    setSelectedCountry((prev) => (prev === id ? null : id));
  }, []);

  return (
    <main className="relative w-screen h-screen bg-slate-950 overflow-hidden">
      {/* Loading overlay */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950"
          >
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="animate-spin text-blue-400" size={32} />
              <span className="text-sm text-gray-400">Loading graph…</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Panel - left */}
      <ControlPanel
        relationType={relationType}
        onRelationChange={handleRelationChange}
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryChange}
        countries={europeCountries}
      />

      {/* Stats Panel - right */}
      <StatsPanel
        nodes={nodesWithSize}
        filteredLinks={filteredLinks}
        selectedCountry={selectedCountry}
        relationType={relationType}
        allCountries={europeCountries}
        onCountryChange={handleCountryChange}
      />

      {/* Legend - bottom left */}
      <Legend relationType={relationType} />

      {/* Keyboard shortcut hint */}
      <div className="absolute bottom-3 right-3 z-10 rounded-lg border border-white/5 bg-gray-900/60 px-3 py-1.5 text-[10px] text-gray-600 backdrop-blur-sm">
        Click a node to focus · Click again to deselect
      </div>

      {/* Graph */}
      <GraphCanvas
        nodes={nodesWithSize}
        links={filteredLinks}
        allCountries={europeCountries}
        onNodeClick={handleNodeClick}
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-slate-950">
          <Loader2 className="animate-spin text-blue-400" size={32} />
        </div>
      }
    >
      <GraphApp />
    </Suspense>
  );
}
