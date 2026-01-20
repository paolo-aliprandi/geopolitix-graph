"use client";
import dynamic from "next/dynamic";
import * as d3 from "d3";
import { europeCountries, europeLinks, type EuropeCountry, type EuropeLink } from "@/data/europe";
import { useMemo, useState } from "react";
import type { LinkObject, NodeObject } from "react-force-graph-2d";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ForceGraph2D = dynamic(
  () => import("react-force-graph-2d"),
  { ssr: false }
);

type RelationType = "geographic" | "commercial" | "diplomatic" | "military";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [relationType, setRelationType] = useState<RelationType>("geographic");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeObject | null>(null);

  // Initialize from URL and keep URL in sync when relationType changes
  useEffect(() => {
    const typeParam = (searchParams.get("type") || "").toLowerCase();
    const countryParam = searchParams.get("country");
    const valid = ["geographic", "commercial", "diplomatic", "military"] as const;
    if (valid.includes(typeParam as RelationType)) {
      setRelationType(typeParam as RelationType);
    }
    if (countryParam) {
      setSelectedCountry(countryParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("type", relationType);
    if (selectedCountry) {
      params.set("country", selectedCountry);
    } else {
      params.delete("country");
    }
    router.replace(`/?${params.toString()}`);
  }, [relationType, selectedCountry, router, searchParams]);

  const colorScale = d3
    .scaleLinear<string>()
    .domain([-1, 0, 1])
    .range(["#e11d48", "#9ca3af", "#2563eb"]); // red → gray → blue

  const widthScale = d3
    .scaleSqrt()
    .domain([0, 1])
    .range([0.5, 6]);

  const filteredLinks: EuropeLink[] = useMemo(
    () => {
      // First filter by relation type
      let links = europeLinks.filter((l) => l.type === relationType);
      
      // Then filter by selected country if one is selected
      if (selectedCountry) {
        links = links.filter((l) => 
          l.source === selectedCountry || l.target === selectedCountry
        );
      }
      return links;
    },
    [relationType, selectedCountry]
  );

  type NodeWithSize = EuropeCountry & { val?: number };
  // Get the set of countries that should be shown based on selected country and links
  const visibleCountries = useMemo(() => {
    if (!selectedCountry) {
      // When no country is selected, show all countries that have connections
      const countries = new Set<string>();
      filteredLinks.forEach(l => {
        countries.add(l.source);
        countries.add(l.target);
      });
      return countries;
    }
    
    // When a country is selected, only show it and its connections if it has any
    const hasConnections = filteredLinks.some(l => 
      l.source === selectedCountry || l.target === selectedCountry
    );
    
    if (!hasConnections) {
      return new Set<string>(); // Show nothing if selected country has no connections
    }
    
    // Show selected country and its connections
    const countries = new Set([selectedCountry]);
    filteredLinks.forEach(l => {
      if (l.source === selectedCountry) {
        countries.add(l.target);
      }
      if (l.target === selectedCountry) {
        countries.add(l.source);
      }
    });
    return countries;
  }, [selectedCountry, filteredLinks]);

  const nodesWithSize: NodeWithSize[] = useMemo(() => {
    // Choose metric per relation type
    const metricKey =
      relationType === "geographic"
        ? "areaKm2"
        : relationType === "commercial"
        ? "gdpBillionUsd"
        : relationType === "military"
        ? "armyThousand"
        : undefined; // diplomatic

    // Filter nodes first, regardless of the metric
    const filteredNodes = europeCountries.filter((n) => visibleCountries.has(n.id));
    
    // If no metric (diplomatic), return filtered nodes with uniform size
    if (!metricKey) return filteredNodes.map((n) => ({ ...n, val: 1 }));

    const values = europeCountries
      .map((n) => (n as Record<string, unknown>)[metricKey])
      .filter((v): v is number => typeof v === "number");
    const min = Math.min(...values);
    const max = Math.max(...values);
    const scale = d3
      .scaleSqrt()
      .domain([min, max])
      .range([1, 12]); // relative size before nodeRelSize multiplier

    return filteredNodes.map((n) => {
        const value = (n as Record<string, unknown>)[metricKey];
        const numeric = typeof value === "number" ? value : undefined;
        return {
          ...n,
          val: numeric !== undefined ? scale(numeric) : 1,
        };
      });
  }, [relationType, visibleCountries]);

  // Create rich tooltips for nodes
  const getNodeTooltip = (n: NodeObject) => {
    const node = n as NodeWithSize;
    const connections = filteredLinks.filter(
      l => l.source === node.id || l.target === node.id
    );
    
    const stats = [
      node.areaKm2 ? `Area: ${node.areaKm2.toLocaleString()} km²` : '',
      node.gdpBillionUsd ? `GDP: $${node.gdpBillionUsd.toLocaleString()}B` : '',
      node.armyThousand ? `Military: ${node.armyThousand.toLocaleString()}k personnel` : '',
    ].filter(Boolean).join('\n');

    return `${node.name}\n${stats}\n\n${relationType} connections: ${connections.length}`;
  };

  // Create descriptive labels for links
  const getLinkTooltip = (l: LinkObject) => {
    const link = l as unknown as EuropeLink;
    const source = europeCountries.find(c => c.id === link.source)?.name;
    const target = europeCountries.find(c => c.id === link.target)?.name;
    const score = link.score;
    
    const relationship = score > 0.7 ? 'Strong positive'
      : score > 0.3 ? 'Positive'
      : score > -0.3 ? 'Neutral'
      : score > -0.7 ? 'Negative'
      : 'Strong negative';

    const tooltip = `${source} ↔ ${target}\n${relationship} (${score.toFixed(2)})${link.note ? '\n' + link.note : ''}`;
    return tooltip;
  };

  // Accessors typed to react-force-graph expectations
  const nodeLabelAccessor = (n: NodeObject) => (n as NodeWithSize).name;
  const nodeValAccessor = (n: NodeObject) => (n as NodeWithSize).val ?? 1;
  const linkColorAccessor = (l: LinkObject) =>
    colorScale((l as unknown as EuropeLink).score);
  const linkWidthAccessor = (l: LinkObject) =>
    widthScale(Math.abs((l as unknown as EuropeLink).score));

  return (
    <main className="w-screen h-screen bg-black">
      <div className="absolute z-10 m-3 rounded-md bg-white/90 p-3 shadow">
        <div className="mb-2 text-sm font-medium text-gray-700">Relationship</div>
        <select
          className="rounded border border-gray-300 bg-white px-2 py-1 text-sm"
          value={relationType}
          onChange={(e) => {
            // Update URL and reload without changing state
            const params = new URLSearchParams(window.location.search);
            params.set("type", e.target.value);
            window.location.href = `/?${params.toString()}`;
          }}
        >
          <option value="geographic">Geographic (neighbors)</option>
          <option value="commercial">Commercial</option>
          <option value="diplomatic">Diplomatic</option>
          <option value="military">Military</option>
        </select>

        <div className="mt-3 mb-2 text-sm font-medium text-gray-700">Focus Country</div>
        <div className="flex gap-2">
          <select
            className="rounded border border-gray-300 bg-white px-2 py-1 text-sm"
            value={selectedCountry || ""}
            onChange={(e) => {
              // Update URL and reload without changing state
              const params = new URLSearchParams(window.location.search);
              if (e.target.value) {
                params.set("country", e.target.value);
              } else {
                params.delete("country");
              }
              window.location.href = `/?${params.toString()}`;
            }}
          >
            <option value="">All Countries</option>
            {europeCountries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {selectedCountry && (
            <button
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm hover:bg-gray-50"
              onClick={() => {
                // Update URL and reload without changing state
                const params = new URLSearchParams(window.location.search);
                params.delete("country");
                window.location.href = `/?${params.toString()}`;
              }}
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-3 text-xs text-gray-600">
          <div className="mb-1 font-semibold">Score</div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-20" style={{
              background: "linear-gradient(90deg, #e11d48, #9ca3af, #2563eb)",
            }} />
            <div className="flex w-full justify-between">
              <span>-1</span>
              <span>0</span>
              <span>+1</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-[2px] w-8 bg-gray-500" />
            <div className="h-[6px] w-8 bg-gray-500" />
            <span>thicker = stronger magnitude</span>
          </div>
          <div className="mt-3">
            <div className="mb-1 font-semibold">Node size</div>
            <div className="text-[11px] leading-4 text-gray-700">
              {relationType === "geographic" && (
                <span>scaled by area (km²)</span>
              )}
              {relationType === "commercial" && (
                <span>scaled by GDP (billion USD)</span>
              )}
              {relationType === "military" && (
                <span>scaled by active force (thousand)</span>
              )}
              {relationType === "diplomatic" && (
                <span>uniform size</span>
              )}
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-3">
            <div className="mb-2 font-semibold text-sm">Statistics</div>
            <div className="text-[11px] leading-5 text-gray-700">
              <div>
                Visible countries: {nodesWithSize.length}
              </div>
              <div>
                Active relationships: {filteredLinks.length}
              </div>
              {selectedCountry && (
                <>
                  <div className="mt-2">
                    {europeCountries.find(c => c.id === selectedCountry)?.name} has:
                  </div>
                  <div className="pl-2">
                    • {filteredLinks.filter(l => 
                        l.source === selectedCountry || l.target === selectedCountry
                      ).length} {relationType} connection{filteredLinks.filter(l => 
                        l.source === selectedCountry || l.target === selectedCountry
                      ).length !== 1 ? 's' : ''}
                  </div>
                  <div className="pl-2">
                    • {filteredLinks.filter(l => 
                        (l.source === selectedCountry || l.target === selectedCountry) &&
                        l.score > 0
                      ).length} positive
                  </div>
                  <div className="pl-2">
                    • {filteredLinks.filter(l => 
                        (l.source === selectedCountry || l.target === selectedCountry) &&
                        l.score < 0
                      ).length} negative
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <ForceGraph2D
        graphData={{ nodes: nodesWithSize, links: filteredLinks }}
        nodeLabel={getNodeTooltip}
        linkLabel={getLinkTooltip}
        nodeVal={nodeValAccessor}
        nodeRelSize={6}
        linkColor={linkColorAccessor}
        linkWidth={linkWidthAccessor}
        backgroundColor="#000000"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = (node as NodeWithSize).name;
          const fontSize = 12/globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          const radius = Math.sqrt(nodeValAccessor(node)) * 6;
          
          // Draw node circle
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, radius, 0, 2 * Math.PI);
          ctx.fillStyle = node === hoveredNode ? '#4f46e5' : '#3b82f6';
          ctx.fill();
          ctx.strokeStyle = '#1e40af';
          ctx.stroke();
          
          // Draw label background
          const bckgDimensions = [textWidth + 4, fontSize + 4].map(n => n + fontSize * 0.2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(
            node.x! - bckgDimensions[0] / 2,
            node.y! + radius + 2,
            bckgDimensions[0],
            bckgDimensions[1]
          );
          
          // Draw label text
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#000000';
          ctx.fillText(
            label,
            node.x!,
            node.y! + radius + fontSize/2 + 4
          );
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          const radius = Math.sqrt(nodeValAccessor(node)) * 6;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, radius + 4, 0, 2 * Math.PI);
          ctx.fill();
        }}
        onNodeHover={node => {
          if (hoveredNode !== (node || null)) {
            setHoveredNode(node || null);
          }
        }}
        onNodeClick={node => {
          const params = new URLSearchParams(window.location.search);
          if (node) {
            params.set("country", (node as NodeWithSize).id);
          } else {
            params.delete("country");
          }
          window.location.href = `/?${params.toString()}`;
        }}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.005}
      />
    </main>
  );
}
