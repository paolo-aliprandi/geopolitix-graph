export type RelationType = "geographic" | "commercial" | "diplomatic" | "military";

export type CountryNode = {
  id: string;
  name: string;
  areaKm2?: number;
  gdpBillionUsd?: number;
  armyThousand?: number;
};

export type RelationLink = {
  source: string;
  target: string;
  type: RelationType;
  score: number; // -1 (very negative) to +1 (very positive)
  note?: string;
};

export const RELATION_LABELS: Record<RelationType, string> = {
  geographic: "Geographic (borders)",
  commercial: "Commercial",
  diplomatic: "Diplomatic",
  military: "Military",
};

export const RELATION_COLORS: Record<RelationType, string> = {
  geographic: "#6b7280",
  commercial: "#059669",
  diplomatic: "#2563eb",
  military: "#dc2626",
};
