"use client";

import { motion } from "framer-motion";
import type { RelationType } from "@/lib/types";

interface LegendProps {
  relationType: RelationType;
}

const NODE_SIZE_LABELS: Record<RelationType, string> = {
  geographic: "Area (km²)",
  commercial: "GDP (billion USD)",
  military: "Active force (thousands)",
  diplomatic: "Uniform size",
};

export default function Legend({ relationType }: LegendProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="absolute bottom-3 left-3 z-10 rounded-xl border border-white/10 bg-gray-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
        Legend
      </div>

      {/* Score gradient */}
      <div className="mb-2 flex items-center gap-2">
        <div className="text-[11px] text-gray-400 w-10">Score</div>
        <div
          className="h-2 w-28 rounded-full"
          style={{
            background: "linear-gradient(90deg, #e11d48, #9ca3af, #2563eb)",
          }}
        />
        <div className="flex w-16 justify-between text-[10px] text-gray-500">
          <span>-1</span>
          <span>0</span>
          <span>+1</span>
        </div>
      </div>

      {/* Line width */}
      <div className="mb-2 flex items-center gap-2">
        <div className="text-[11px] text-gray-400 w-10">Width</div>
        <div className="flex items-center gap-1">
          <div className="h-[1px] w-8 bg-gray-500 rounded-full" />
          <div className="h-[4px] w-8 bg-gray-500 rounded-full" />
        </div>
        <span className="text-[10px] text-gray-500">= stronger magnitude</span>
      </div>

      {/* Node size */}
      <div className="flex items-center gap-2">
        <div className="text-[11px] text-gray-400 w-10">Nodes</div>
        <span className="text-[10px] text-gray-500">
          scaled by {NODE_SIZE_LABELS[relationType]}
        </span>
      </div>
    </motion.div>
  );
}
