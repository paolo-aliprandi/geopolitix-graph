"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { LinkObject, NodeObject } from "react-force-graph-2d";
import type { CountryNode, RelationLink } from "@/lib/types";
import type { NodeWithSize } from "@/lib/hooks";
import { useLinkScales, getLinkId } from "@/lib/hooks";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

interface GraphCanvasProps {
  nodes: NodeWithSize[];
  links: RelationLink[];
  allCountries: CountryNode[];
  onNodeClick: (id: string) => void;
}

export default function GraphCanvas({
  nodes,
  links,
  allCountries,
  onNodeClick,
}: GraphCanvasProps) {
  const [hoveredNode, setHoveredNode] = useState<NodeObject | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<any>(null);

  const { colorScale, widthScale } = useLinkScales();

  // Configure d3 forces for more spacing
  useEffect(() => {
    const fg = graphRef.current;
    if (!fg) return;
    fg.d3Force("charge")?.strength(-250);       // stronger repulsion (default ~ -30)
    fg.d3Force("link")?.distance(120);           // longer resting link distance
    fg.d3Force("center")?.strength(0.05);        // gentler centering pull
    fg.d3ReheatSimulation();
  }, [nodes, links]);

  const nodeValAccessor = useCallback(
    (n: NodeObject) => (n as NodeWithSize).val ?? 1,
    []
  );

  const linkColorAccessor = useCallback(
    (l: LinkObject) => colorScale((l as unknown as RelationLink).score),
    [colorScale]
  );

  const linkWidthAccessor = useCallback(
    (l: LinkObject) =>
      widthScale(Math.abs((l as unknown as RelationLink).score)),
    [widthScale]
  );

  const getNodeTooltip = useCallback(
    (n: NodeObject) => {
      const node = n as NodeWithSize;
      const connections = links.filter(
        (l) => getLinkId(l.source) === node.id || getLinkId(l.target) === node.id
      );

      const stats = [
        node.areaKm2
          ? `Area: ${node.areaKm2.toLocaleString()} km²`
          : "",
        node.gdpBillionUsd
          ? `GDP: $${node.gdpBillionUsd.toLocaleString()}B`
          : "",
        node.armyThousand
          ? `Military: ${node.armyThousand.toLocaleString()}k personnel`
          : "",
      ]
        .filter(Boolean)
        .join("\n");

      return `${node.name}\n${stats}\n\nConnections: ${connections.length}`;
    },
    [links]
  );

  const getLinkTooltip = useCallback(
    (l: LinkObject) => {
      const link = l as unknown as RelationLink;
      const sourceId = getLinkId(link.source);
      const targetId = getLinkId(link.target);
      const source = allCountries.find((c) => c.id === sourceId)?.name;
      const target = allCountries.find((c) => c.id === targetId)?.name;
      const score = link.score;

      const relationship =
        score > 0.7
          ? "Strong positive"
          : score > 0.3
            ? "Positive"
            : score > -0.3
              ? "Neutral"
              : score > -0.7
                ? "Negative"
                : "Strong negative";

      return `${source} ↔ ${target}\n${relationship} (${score.toFixed(2)})${link.note ? "\n" + link.note : ""}`;
    },
    [allCountries]
  );

  const nodeCanvasObject = useCallback(
    (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const x = node.x;
      const y = node.y;
      if (x == null || y == null || !isFinite(x) || !isFinite(y)) return;

      const label = (node as NodeWithSize).name;
      const fontSize = 12 / globalScale;
      ctx.font = `${fontSize}px Inter, system-ui, sans-serif`;
      const textWidth = ctx.measureText(label).width;
      const radius = Math.sqrt(nodeValAccessor(node)) * 6;

      // Glow for hovered
      if (node === hoveredNode) {
        ctx.beginPath();
        ctx.arc(x, y, radius + 4, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(99, 102, 241, 0.2)";
        ctx.fill();
      }

      // Node circle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      const gradient = ctx.createRadialGradient(
        x - radius * 0.3,
        y - radius * 0.3,
        0,
        x,
        y,
        radius
      );
      gradient.addColorStop(0, node === hoveredNode ? "#818cf8" : "#60a5fa");
      gradient.addColorStop(1, node === hoveredNode ? "#4f46e5" : "#2563eb");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = node === hoveredNode ? "#a5b4fc" : "#1e40af";
      ctx.lineWidth = 1 / globalScale;
      ctx.stroke();

      // Label background
      const padding = fontSize * 0.3;
      const bgWidth = textWidth + padding * 2;
      const bgHeight = fontSize + padding * 2;
      const bgX = x - bgWidth / 2;
      const bgY = y + radius + 2;

      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      const borderRadius = 3 / globalScale;
      ctx.beginPath();
      ctx.moveTo(bgX + borderRadius, bgY);
      ctx.lineTo(bgX + bgWidth - borderRadius, bgY);
      ctx.quadraticCurveTo(bgX + bgWidth, bgY, bgX + bgWidth, bgY + borderRadius);
      ctx.lineTo(bgX + bgWidth, bgY + bgHeight - borderRadius);
      ctx.quadraticCurveTo(bgX + bgWidth, bgY + bgHeight, bgX + bgWidth - borderRadius, bgY + bgHeight);
      ctx.lineTo(bgX + borderRadius, bgY + bgHeight);
      ctx.quadraticCurveTo(bgX, bgY + bgHeight, bgX, bgY + bgHeight - borderRadius);
      ctx.lineTo(bgX, bgY + borderRadius);
      ctx.quadraticCurveTo(bgX, bgY, bgX + borderRadius, bgY);
      ctx.closePath();
      ctx.fill();

      // Label text
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#e2e8f0";
      ctx.fillText(label, x, bgY + bgHeight / 2);
    },
    [hoveredNode, nodeValAccessor]
  );

  const nodePointerAreaPaint = useCallback(
    (node: NodeObject, color: string, ctx: CanvasRenderingContext2D) => {
      const x = node.x;
      const y = node.y;
      if (x == null || y == null || !isFinite(x) || !isFinite(y)) return;
      ctx.fillStyle = color;
      const radius = Math.sqrt(nodeValAccessor(node)) * 6;
      ctx.beginPath();
      ctx.arc(x, y, radius + 4, 0, 2 * Math.PI);
      ctx.fill();
    },
    [nodeValAccessor]
  );

  return (
    <ForceGraph2D
      ref={graphRef}
      graphData={{ nodes, links }}
      nodeLabel={getNodeTooltip}
      linkLabel={getLinkTooltip}
      nodeVal={nodeValAccessor}
      nodeRelSize={6}
      linkColor={linkColorAccessor}
      linkWidth={linkWidthAccessor}
      backgroundColor="#0f172a"
      nodeCanvasObject={nodeCanvasObject}
      nodePointerAreaPaint={nodePointerAreaPaint}
      onNodeHover={(node) => {
        if (hoveredNode !== (node || null)) {
          setHoveredNode(node || null);
        }
      }}
      onNodeClick={(node) => {
        if (node) onNodeClick((node as NodeWithSize).id);
      }}
      linkDirectionalParticles={2}
      linkDirectionalParticleWidth={2}
      linkDirectionalParticleSpeed={0.005}
      linkDirectionalParticleColor={linkColorAccessor}
    />
  );
}
