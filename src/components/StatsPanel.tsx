"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, TrendingUp, TrendingDown, X, ExternalLink } from "lucide-react";
import type { CountryNode, RelationLink, RelationType } from "@/lib/types";
import { RELATION_LABELS } from "@/lib/types";
import type { NodeWithSize } from "@/lib/hooks";
import { getLinkId } from "@/lib/hooks";

interface StatsPanelProps {
  nodes: NodeWithSize[];
  filteredLinks: RelationLink[];
  selectedCountry: string | null;
  relationType: RelationType;
  allCountries: CountryNode[];
  onCountryChange: (id: string | null) => void;
}

export default function StatsPanel({
  nodes,
  filteredLinks,
  selectedCountry,
  relationType,
  allCountries,
  onCountryChange,
}: StatsPanelProps) {
  const country = allCountries.find((c) => c.id === selectedCountry);
  const countryLinks = filteredLinks.filter(
    (l) => getLinkId(l.source) === selectedCountry || getLinkId(l.target) === selectedCountry
  );
  const positiveCount = countryLinks.filter((l) => l.score > 0).length;
  const negativeCount = countryLinks.filter((l) => l.score < 0).length;

  // Top connections for selected country
  const topConnections = [...countryLinks]
    .sort((a, b) => Math.abs(b.score) - Math.abs(a.score))
    .slice(0, 5);

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="absolute right-3 top-3 z-10 w-64 rounded-xl border border-white/10 bg-gray-900/95 p-4 shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-3 flex items-center gap-2">
        <BarChart3 className="text-blue-400" size={16} />
        <span className="text-sm font-semibold text-white">Statistics</span>
      </div>

      <div className="space-y-2 text-xs text-gray-300">
        <div className="flex justify-between">
          <span className="text-gray-500">Visible countries</span>
          <span className="font-mono">{nodes.length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Active relationships</span>
          <span className="font-mono">{filteredLinks.length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Layer</span>
          <span className="capitalize">{RELATION_LABELS[relationType].split(" (")[0]}</span>
        </div>
      </div>

      <AnimatePresence>
        {selectedCountry && country && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 border-t border-white/10 pt-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  {country.name}
                </span>
                <button
                  onClick={() => onCountryChange(null)}
                  className="rounded-md p-0.5 text-gray-500 hover:bg-white/10 hover:text-gray-300"
                >
                  <X size={12} />
                </button>
              </div>

              {/* Country stats */}
              <div className="mb-3 space-y-1 text-xs text-gray-400">
                {country.areaKm2 && (
                  <div className="flex justify-between">
                    <span>Area</span>
                    <span className="text-gray-300">
                      {country.areaKm2.toLocaleString()} km²
                    </span>
                  </div>
                )}
                {country.gdpBillionUsd && (
                  <div className="flex justify-between">
                    <span>GDP</span>
                    <span className="text-gray-300">
                      ${country.gdpBillionUsd.toLocaleString()}B
                    </span>
                  </div>
                )}
                {country.armyThousand !== undefined && (
                  <div className="flex justify-between">
                    <span>Military</span>
                    <span className="text-gray-300">
                      {country.armyThousand.toLocaleString()}k personnel
                    </span>
                  </div>
                )}
              </div>

              {/* Connection summary */}
              <div className="mb-3 flex gap-2">
                <div className="flex flex-1 items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1">
                  <TrendingUp size={12} className="text-emerald-400" />
                  <span className="text-xs text-emerald-300">{positiveCount} positive</span>
                </div>
                <div className="flex flex-1 items-center gap-1 rounded-md bg-rose-500/10 px-2 py-1">
                  <TrendingDown size={12} className="text-rose-400" />
                  <span className="text-xs text-rose-300">{negativeCount} negative</span>
                </div>
              </div>

              {/* Top connections */}
              {topConnections.length > 0 && (
                <div>
                  <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                    Strongest connections
                  </div>
                  <div className="space-y-1">
                    {topConnections.map((link, i) => {
                      const partnerId =
                        getLinkId(link.source) === selectedCountry
                          ? getLinkId(link.target)
                          : getLinkId(link.source);
                      const partner = allCountries.find(
                        (c) => c.id === partnerId
                      );
                      return (
                        <button
                          key={i}
                          onClick={() => onCountryChange(partnerId)}
                          className="flex w-full items-center justify-between rounded-md px-2 py-1 text-xs hover:bg-white/5"
                        >
                          <span className="flex items-center gap-1 text-gray-300">
                            <ExternalLink size={10} className="text-gray-600" />
                            {partner?.name ?? partnerId}
                          </span>
                          <span
                            className={`font-mono ${
                              link.score > 0
                                ? "text-emerald-400"
                                : link.score < 0
                                  ? "text-rose-400"
                                  : "text-gray-400"
                            }`}
                          >
                            {link.score > 0 ? "+" : ""}
                            {link.score.toFixed(2)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {topConnections.some((l) => l.note) && (
                    <div className="mt-2 space-y-1">
                      {topConnections
                        .filter((l) => l.note)
                        .map((l, i) => {
                          const partnerId =
                            getLinkId(l.source) === selectedCountry
                              ? getLinkId(l.target)
                              : getLinkId(l.source);
                          const partner = allCountries.find(
                            (c) => c.id === partnerId
                          );
                          return (
                            <div
                              key={i}
                              className="rounded bg-white/5 px-2 py-1 text-[10px] text-gray-500"
                            >
                              <span className="text-gray-400">
                                {partner?.name}:
                              </span>{" "}
                              {l.note}
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
