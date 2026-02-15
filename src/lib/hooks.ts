"use client";

import { useMemo } from "react";
import * as d3 from "d3";
import type { CountryNode, RelationLink, RelationType } from "./types";

export type NodeWithSize = CountryNode & { val?: number };

/** Extract the string ID from a link endpoint (which may be a string or a mutated node object). */
export function getLinkId(endpoint: string | { id?: string }): string {
  if (typeof endpoint === "string") return endpoint;
  return endpoint?.id ?? "";
}

/**
 * Returns filtered links based on relation type and optional selected country.
 */
export function useFilteredLinks(
  links: RelationLink[],
  relationType: RelationType,
  selectedCountry: string | null
): RelationLink[] {
  return useMemo(() => {
    let filtered = links.filter((l) => l.type === relationType);
    if (selectedCountry) {
      filtered = filtered.filter(
        (l) =>
          getLinkId(l.source) === selectedCountry ||
          getLinkId(l.target) === selectedCountry
      );
    }
    return filtered;
  }, [links, relationType, selectedCountry]);
}

/**
 * Returns the set of country IDs that should be visible on the graph.
 */
export function useVisibleCountries(
  filteredLinks: RelationLink[],
  selectedCountry: string | null
): Set<string> {
  return useMemo(() => {
    if (!selectedCountry) {
      const countries = new Set<string>();
      filteredLinks.forEach((l) => {
        countries.add(getLinkId(l.source));
        countries.add(getLinkId(l.target));
      });
      return countries;
    }

    const hasConnections = filteredLinks.some(
      (l) =>
        getLinkId(l.source) === selectedCountry ||
        getLinkId(l.target) === selectedCountry
    );

    if (!hasConnections) return new Set<string>();

    const countries = new Set([selectedCountry]);
    filteredLinks.forEach((l) => {
      if (getLinkId(l.source) === selectedCountry) countries.add(getLinkId(l.target));
      if (getLinkId(l.target) === selectedCountry) countries.add(getLinkId(l.source));
    });
    return countries;
  }, [selectedCountry, filteredLinks]);
}

/**
 * Returns nodes sized by the metric appropriate for the current relation type.
 */
export function useNodesWithSize(
  allCountries: CountryNode[],
  visibleCountries: Set<string>,
  relationType: RelationType
): NodeWithSize[] {
  return useMemo(() => {
    const metricKey =
      relationType === "geographic"
        ? "areaKm2"
        : relationType === "commercial"
          ? "gdpBillionUsd"
          : relationType === "military"
            ? "armyThousand"
            : undefined;

    const filteredNodes = allCountries.filter((n) =>
      visibleCountries.has(n.id)
    );

    if (!metricKey) return filteredNodes.map((n) => ({ ...n, val: 1 }));

    const values = allCountries
      .map((n) => (n as Record<string, unknown>)[metricKey])
      .filter((v): v is number => typeof v === "number");
    const min = Math.min(...values);
    const max = Math.max(...values);
    const scale = d3.scaleSqrt().domain([min, max]).range([1, 12]);

    return filteredNodes.map((n) => {
      const value = (n as Record<string, unknown>)[metricKey];
      const numeric = typeof value === "number" ? value : undefined;
      return { ...n, val: numeric !== undefined ? scale(numeric) : 1 };
    });
  }, [allCountries, visibleCountries, relationType]);
}

/**
 * Color & width scales for link rendering.
 */
export function useLinkScales() {
  const colorScale = useMemo(
    () =>
      d3
        .scaleLinear<string>()
        .domain([-1, 0, 1])
        .range(["#e11d48", "#9ca3af", "#2563eb"]),
    []
  );

  const widthScale = useMemo(
    () => d3.scaleSqrt().domain([0, 1]).range([0.5, 6]),
    []
  );

  return { colorScale, widthScale };
}
