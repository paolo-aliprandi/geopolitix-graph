"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  HandCoins,
  Handshake,
  Shield,
  ChevronDown,
  X,
  Search,
} from "lucide-react";
import { useState, useMemo, type ReactNode } from "react";
import type { CountryNode, RelationType } from "@/lib/types";
import { RELATION_LABELS } from "@/lib/types";

const RELATION_ICONS: Record<RelationType, ReactNode> = {
  geographic: <Globe2 size={16} />,
  commercial: <HandCoins size={16} />,
  diplomatic: <Handshake size={16} />,
  military: <Shield size={16} />,
};

interface ControlPanelProps {
  relationType: RelationType;
  onRelationChange: (type: RelationType) => void;
  selectedCountry: string | null;
  onCountryChange: (id: string | null) => void;
  countries: CountryNode[];
}

export default function ControlPanel({
  relationType,
  onRelationChange,
  selectedCountry,
  onCountryChange,
  countries,
}: ControlPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries;
    const q = searchQuery.toLowerCase();
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
    );
  }, [countries, searchQuery]);

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute left-3 top-3 z-10 w-72 rounded-xl border border-white/10 bg-gray-900/95 p-4 shadow-2xl backdrop-blur-xl"
    >
      {/* Brand header */}
      <div className="mb-4 flex items-center gap-2">
        <Globe2 className="text-blue-400" size={22} />
        <h1 className="text-lg font-bold tracking-tight text-white">
          GeopolitixGraph
        </h1>
      </div>

      {/* Relation type pills */}
      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
        Relationship
      </div>
      <div className="mb-4 grid grid-cols-2 gap-1.5">
        {(Object.keys(RELATION_LABELS) as RelationType[]).map((type) => (
          <button
            key={type}
            onClick={() => onRelationChange(type)}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
              relationType === type
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            {RELATION_ICONS[type]}
            {RELATION_LABELS[type].split(" (")[0]}
          </button>
        ))}
      </div>

      {/* Country selector */}
      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
        Focus Country
      </div>
      <div className="relative mb-3">
        <Search
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500"
          size={14}
        />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-8 pr-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
        />
      </div>

      <div className="relative">
        <ChevronDown
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
          size={14}
        />
        <select
          className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
          value={selectedCountry || ""}
          onChange={(e) => onCountryChange(e.target.value || null)}
        >
          <option value="" className="bg-gray-900">
            All Countries
          </option>
          {filteredCountries.map((c) => (
            <option key={c.id} value={c.id} className="bg-gray-900">
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => {
            onCountryChange(null);
            setSearchQuery("");
          }}
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-1.5 text-xs text-gray-300 hover:bg-white/10"
        >
          <X size={12} /> Clear selection
        </motion.button>
      )}
    </motion.div>
  );
}
