import type { CountryNode, RelationLink } from "@/lib/types";

// Re-export for backward compatibility
export type EuropeCountry = CountryNode;
export type EuropeLink = RelationLink;

export const europeCountries: CountryNode[] = [
  // Core EU sample + nearby non-EU per request
  { id: "FRA", name: "France", areaKm2: 551_695, gdpBillionUsd: 3000, armyThousand: 205 },
  { id: "DEU", name: "Germany", areaKm2: 357_588, gdpBillionUsd: 4400, armyThousand: 183 },
  { id: "ITA", name: "Italy", areaKm2: 301_340, gdpBillionUsd: 2100, armyThousand: 170 },
  { id: "ESP", name: "Spain", areaKm2: 505_990, gdpBillionUsd: 1600, armyThousand: 120 },
  { id: "PRT", name: "Portugal", areaKm2: 92_226, gdpBillionUsd: 280, armyThousand: 27 },
  { id: "BEL", name: "Belgium", areaKm2: 30_689, gdpBillionUsd: 600, armyThousand: 25 },
  { id: "NLD", name: "Netherlands", areaKm2: 41_543, gdpBillionUsd: 1100, armyThousand: 40 },
  { id: "LUX", name: "Luxembourg", areaKm2: 2_586, gdpBillionUsd: 86, armyThousand: 1 },
  { id: "AUT", name: "Austria", areaKm2: 83_879, gdpBillionUsd: 480, armyThousand: 24 },
  { id: "POL", name: "Poland", areaKm2: 312_679, gdpBillionUsd: 840, armyThousand: 200 },
  { id: "CZE", name: "Czechia", areaKm2: 78_866, gdpBillionUsd: 330, armyThousand: 28 },
  { id: "SVK", name: "Slovakia", areaKm2: 49_035, gdpBillionUsd: 130, armyThousand: 18 },
  { id: "HUN", name: "Hungary", areaKm2: 93_028, gdpBillionUsd: 200, armyThousand: 25 },
  { id: "SVN", name: "Slovenia", areaKm2: 20_273, gdpBillionUsd: 70, armyThousand: 8 },
  { id: "HRV", name: "Croatia", areaKm2: 56_594, gdpBillionUsd: 80, armyThousand: 15 },
  { id: "ROU", name: "Romania", areaKm2: 238_397, gdpBillionUsd: 350, armyThousand: 70 },
  { id: "BGR", name: "Bulgaria", areaKm2: 110_879, gdpBillionUsd: 90, armyThousand: 25 },
  { id: "GRC", name: "Greece", areaKm2: 131_957, gdpBillionUsd: 220, armyThousand: 130 },
  { id: "EST", name: "Estonia", areaKm2: 45_339, gdpBillionUsd: 40, armyThousand: 7 },
  { id: "LVA", name: "Latvia", areaKm2: 64_589, gdpBillionUsd: 40, armyThousand: 7 },
  { id: "LTU", name: "Lithuania", areaKm2: 65_300, gdpBillionUsd: 70, armyThousand: 20 },
  { id: "IRL", name: "Ireland", areaKm2: 70_273, gdpBillionUsd: 500, armyThousand: 9 },
  { id: "DNK", name: "Denmark", areaKm2: 42_951, gdpBillionUsd: 400, armyThousand: 18 },
  { id: "SWE", name: "Sweden", areaKm2: 450_295, gdpBillionUsd: 600, armyThousand: 50 },
  { id: "FIN", name: "Finland", areaKm2: 338_424, gdpBillionUsd: 300, armyThousand: 23 },
  { id: "CYP", name: "Cyprus", areaKm2: 9_251, gdpBillionUsd: 40, armyThousand: 3 },
  // Non-EU neighbors
  { id: "NOR", name: "Norway", areaKm2: 385_207, gdpBillionUsd: 500, armyThousand: 23 },
  { id: "CHE", name: "Switzerland", areaKm2: 41_285, gdpBillionUsd: 800, armyThousand: 20 },
  { id: "MDA", name: "Moldova", areaKm2: 33_846, gdpBillionUsd: 15, armyThousand: 6 },
  { id: "SRB", name: "Serbia", areaKm2: 88_361, gdpBillionUsd: 70, armyThousand: 28 },
  { id: "ALB", name: "Albania", areaKm2: 28_748, gdpBillionUsd: 17, armyThousand: 8 },
  { id: "BIH", name: "Bosnia and Herz.", areaKm2: 51_197, gdpBillionUsd: 24, armyThousand: 10 },
  { id: "MKD", name: "North Macedonia", areaKm2: 25_713, gdpBillionUsd: 15, armyThousand: 8 },
  { id: "MNE", name: "Montenegro", areaKm2: 13_812, gdpBillionUsd: 6, armyThousand: 2 },
  { id: "BLR", name: "Belarus", areaKm2: 207_600, gdpBillionUsd: 80, armyThousand: 45 },
  { id: "UKR", name: "Ukraine", areaKm2: 603_628, gdpBillionUsd: 160, armyThousand: 700 },
  { id: "RUS", name: "Russia", areaKm2: 17_098_242, gdpBillionUsd: 2200, armyThousand: 1000 },
  { id: "LIE", name: "Liechtenstein", areaKm2: 160, gdpBillionUsd: 7, armyThousand: 0 },
  { id: "ISL", name: "Iceland", areaKm2: 103_000, gdpBillionUsd: 30, armyThousand: 0 },
  { id: "KOS", name: "Kosovo", areaKm2: 10_908, gdpBillionUsd: 9, armyThousand: 3 },
  { id: "GBR", name: "United Kingdom", areaKm2: 243_610, gdpBillionUsd: 3300, armyThousand: 150 },
  { id: "TUR", name: "Turkey", areaKm2: 783_562, gdpBillionUsd: 1200, armyThousand: 100 },
];

export const europeLinks: RelationLink[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // GEOGRAPHIC — land borders (+ Channel Tunnel for GBR-FRA)
  // Score 0.2 = neutral adjacency fact
  // ═══════════════════════════════════════════════════════════════════════════

  // France
  { source: "FRA", target: "DEU", type: "geographic", score: 0.2 },
  { source: "FRA", target: "BEL", type: "geographic", score: 0.2 },
  { source: "FRA", target: "ESP", type: "geographic", score: 0.2 },
  { source: "FRA", target: "ITA", type: "geographic", score: 0.2 },
  { source: "FRA", target: "CHE", type: "geographic", score: 0.2 },
  { source: "FRA", target: "LUX", type: "geographic", score: 0.2 },
  { source: "FRA", target: "GBR", type: "geographic", score: 0.2, note: "Channel Tunnel" },

  // Germany
  { source: "DEU", target: "POL", type: "geographic", score: 0.2 },
  { source: "DEU", target: "CZE", type: "geographic", score: 0.2 },
  { source: "DEU", target: "AUT", type: "geographic", score: 0.2 },
  { source: "DEU", target: "CHE", type: "geographic", score: 0.2 },
  { source: "DEU", target: "LUX", type: "geographic", score: 0.2 },
  { source: "DEU", target: "NLD", type: "geographic", score: 0.2 },
  { source: "DEU", target: "BEL", type: "geographic", score: 0.2 },
  { source: "DEU", target: "DNK", type: "geographic", score: 0.2 },

  // Italy
  { source: "ITA", target: "AUT", type: "geographic", score: 0.2 },
  { source: "ITA", target: "SVN", type: "geographic", score: 0.2 },
  { source: "ITA", target: "CHE", type: "geographic", score: 0.2 },

  // Iberia
  { source: "ESP", target: "PRT", type: "geographic", score: 0.2 },

  // UK & Ireland
  { source: "GBR", target: "IRL", type: "geographic", score: 0.2, note: "Northern Ireland land border" },

  // Poland
  { source: "POL", target: "LTU", type: "geographic", score: 0.2 },
  { source: "POL", target: "BLR", type: "geographic", score: 0.2 },
  { source: "POL", target: "UKR", type: "geographic", score: 0.2 },
  { source: "POL", target: "SVK", type: "geographic", score: 0.2 },
  { source: "POL", target: "CZE", type: "geographic", score: 0.2 },

  // Baltics
  { source: "LTU", target: "LVA", type: "geographic", score: 0.2 },
  { source: "LTU", target: "BLR", type: "geographic", score: 0.2 },
  { source: "LTU", target: "RUS", type: "geographic", score: 0.2, note: "Kaliningrad exclave" },
  { source: "LVA", target: "EST", type: "geographic", score: 0.2 },
  { source: "LVA", target: "BLR", type: "geographic", score: 0.2 },
  { source: "LVA", target: "RUS", type: "geographic", score: 0.2 },
  { source: "EST", target: "RUS", type: "geographic", score: 0.2 },

  // Nordics
  { source: "SWE", target: "NOR", type: "geographic", score: 0.2 },
  { source: "FIN", target: "SWE", type: "geographic", score: 0.2 },
  { source: "FIN", target: "NOR", type: "geographic", score: 0.2 },
  { source: "FIN", target: "RUS", type: "geographic", score: 0.2 },
  { source: "NOR", target: "RUS", type: "geographic", score: 0.2 },

  // Switzerland & Liechtenstein
  { source: "CHE", target: "AUT", type: "geographic", score: 0.2 },
  { source: "CHE", target: "LIE", type: "geographic", score: 0.2 },
  { source: "AUT", target: "LIE", type: "geographic", score: 0.2 },

  // Central Europe
  { source: "AUT", target: "HUN", type: "geographic", score: 0.2 },
  { source: "AUT", target: "SVK", type: "geographic", score: 0.2 },
  { source: "AUT", target: "SVN", type: "geographic", score: 0.2 },
  { source: "SVK", target: "HUN", type: "geographic", score: 0.2 },
  { source: "SVK", target: "UKR", type: "geographic", score: 0.2 },
  { source: "HUN", target: "UKR", type: "geographic", score: 0.2 },
  { source: "HUN", target: "SVN", type: "geographic", score: 0.2 },

  // Croatia & Western Balkans
  { source: "HRV", target: "SVN", type: "geographic", score: 0.2 },
  { source: "HRV", target: "BIH", type: "geographic", score: 0.2 },
  { source: "HRV", target: "SRB", type: "geographic", score: 0.2 },
  { source: "HRV", target: "MNE", type: "geographic", score: 0.2 },
  { source: "HRV", target: "HUN", type: "geographic", score: 0.2 },
  { source: "SRB", target: "BIH", type: "geographic", score: 0.2 },
  { source: "SRB", target: "MNE", type: "geographic", score: 0.2 },
  { source: "SRB", target: "MKD", type: "geographic", score: 0.2 },
  { source: "SRB", target: "BGR", type: "geographic", score: 0.2 },
  { source: "SRB", target: "ROU", type: "geographic", score: 0.2 },
  { source: "SRB", target: "HUN", type: "geographic", score: 0.2 },
  { source: "SRB", target: "KOS", type: "geographic", score: 0.2 },
  { source: "MNE", target: "BIH", type: "geographic", score: 0.2 },
  { source: "MNE", target: "KOS", type: "geographic", score: 0.2 },
  { source: "MNE", target: "ALB", type: "geographic", score: 0.2 },
  { source: "ALB", target: "MKD", type: "geographic", score: 0.2 },
  { source: "ALB", target: "GRC", type: "geographic", score: 0.2 },
  { source: "ALB", target: "KOS", type: "geographic", score: 0.2 },
  { source: "MKD", target: "BGR", type: "geographic", score: 0.2 },
  { source: "MKD", target: "GRC", type: "geographic", score: 0.2 },
  { source: "MKD", target: "KOS", type: "geographic", score: 0.2 },

  // Romania, Bulgaria, Moldova
  { source: "ROU", target: "BGR", type: "geographic", score: 0.2 },
  { source: "ROU", target: "HUN", type: "geographic", score: 0.2 },
  { source: "ROU", target: "MDA", type: "geographic", score: 0.2 },
  { source: "ROU", target: "UKR", type: "geographic", score: 0.2 },
  { source: "BGR", target: "GRC", type: "geographic", score: 0.2 },
  { source: "BGR", target: "TUR", type: "geographic", score: 0.2 },
  { source: "TUR", target: "GRC", type: "geographic", score: 0.2 },

  // Eastern Europe
  { source: "BLR", target: "RUS", type: "geographic", score: 0.2 },
  { source: "BLR", target: "UKR", type: "geographic", score: 0.2 },
  { source: "UKR", target: "RUS", type: "geographic", score: 0.2 },
  { source: "UKR", target: "MDA", type: "geographic", score: 0.2 },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMERCIAL — trade volumes, sanctions, energy dependencies
  // ═══════════════════════════════════════════════════════════════════════════

  // Germany — Europe's trade hub
  { source: "DEU", target: "FRA", type: "commercial", score: 0.85, note: "EU's largest bilateral trade corridor" },
  { source: "DEU", target: "NLD", type: "commercial", score: 0.8, note: "Rotterdam as gateway for German trade" },
  { source: "DEU", target: "POL", type: "commercial", score: 0.75, note: "major supply chain integration" },
  { source: "DEU", target: "ITA", type: "commercial", score: 0.7 },
  { source: "DEU", target: "CZE", type: "commercial", score: 0.75, note: "deep automotive supply chains" },
  { source: "DEU", target: "AUT", type: "commercial", score: 0.7, note: "strong DACH corridor" },
  { source: "DEU", target: "CHE", type: "commercial", score: 0.7 },
  { source: "DEU", target: "BEL", type: "commercial", score: 0.65 },
  { source: "DEU", target: "ESP", type: "commercial", score: 0.6 },
  { source: "DEU", target: "GBR", type: "commercial", score: 0.6, note: "post-Brexit trade friction" },
  { source: "DEU", target: "HUN", type: "commercial", score: 0.55, note: "German auto sector investment" },
  { source: "DEU", target: "SVK", type: "commercial", score: 0.55, note: "automotive integration" },
  { source: "DEU", target: "ROU", type: "commercial", score: 0.5 },
  { source: "DEU", target: "TUR", type: "commercial", score: 0.5 },
  { source: "DEU", target: "DNK", type: "commercial", score: 0.55 },
  { source: "DEU", target: "SWE", type: "commercial", score: 0.55 },
  { source: "DEU", target: "NOR", type: "commercial", score: 0.6, note: "Norwegian gas replacing Russian" },

  // France — trade relationships
  { source: "FRA", target: "ITA", type: "commercial", score: 0.65 },
  { source: "FRA", target: "ESP", type: "commercial", score: 0.65 },
  { source: "FRA", target: "BEL", type: "commercial", score: 0.65 },
  { source: "FRA", target: "GBR", type: "commercial", score: 0.6 },
  { source: "FRA", target: "NLD", type: "commercial", score: 0.55 },
  { source: "FRA", target: "CHE", type: "commercial", score: 0.55 },
  { source: "FRA", target: "PRT", type: "commercial", score: 0.45 },

  // UK post-Brexit
  { source: "GBR", target: "IRL", type: "commercial", score: 0.7, note: "deeply interlinked economies" },
  { source: "GBR", target: "NLD", type: "commercial", score: 0.55 },
  { source: "GBR", target: "NOR", type: "commercial", score: 0.5, note: "North Sea energy" },
  { source: "GBR", target: "TUR", type: "commercial", score: 0.4 },
  { source: "GBR", target: "ITA", type: "commercial", score: 0.45 },
  { source: "GBR", target: "ESP", type: "commercial", score: 0.45 },

  // Italy
  { source: "ITA", target: "ESP", type: "commercial", score: 0.5 },
  { source: "ITA", target: "CHE", type: "commercial", score: 0.55 },
  { source: "ITA", target: "AUT", type: "commercial", score: 0.5 },
  { source: "ITA", target: "TUR", type: "commercial", score: 0.45 },
  { source: "ITA", target: "GRC", type: "commercial", score: 0.4 },
  { source: "ITA", target: "SVN", type: "commercial", score: 0.45 },
  { source: "ITA", target: "ROU", type: "commercial", score: 0.45 },

  // Iberia
  { source: "ESP", target: "PRT", type: "commercial", score: 0.7, note: "Iberian market integration" },

  // Nordics
  { source: "SWE", target: "NOR", type: "commercial", score: 0.7, note: "Nordic economic linkage" },
  { source: "SWE", target: "FIN", type: "commercial", score: 0.65 },
  { source: "SWE", target: "DNK", type: "commercial", score: 0.65 },
  { source: "NOR", target: "DNK", type: "commercial", score: 0.55 },
  { source: "FIN", target: "EST", type: "commercial", score: 0.55, note: "cross-Baltic digital trade" },

  // Benelux
  { source: "BEL", target: "NLD", type: "commercial", score: 0.75, note: "Benelux union" },
  { source: "BEL", target: "LUX", type: "commercial", score: 0.55, note: "Benelux union" },

  // Central Europe
  { source: "AUT", target: "HUN", type: "commercial", score: 0.5 },
  { source: "CZE", target: "SVK", type: "commercial", score: 0.65, note: "post-Czechoslovakia integration" },
  { source: "CZE", target: "POL", type: "commercial", score: 0.55 },
  { source: "SVN", target: "HRV", type: "commercial", score: 0.5 },
  { source: "POL", target: "SVK", type: "commercial", score: 0.45 },

  // Western Balkans
  { source: "SRB", target: "BIH", type: "commercial", score: 0.4 },
  { source: "SRB", target: "MNE", type: "commercial", score: 0.35 },
  { source: "MKD", target: "GRC", type: "commercial", score: 0.35 },
  { source: "ALB", target: "ITA", type: "commercial", score: 0.35 },
  { source: "ALB", target: "GRC", type: "commercial", score: 0.3 },

  // Ukraine wartime trade
  { source: "POL", target: "UKR", type: "commercial", score: 0.55, note: "wartime solidarity trade corridor" },
  { source: "ROU", target: "UKR", type: "commercial", score: 0.35, note: "Danube grain corridor" },
  { source: "ROU", target: "MDA", type: "commercial", score: 0.4 },

  // Turkey
  { source: "TUR", target: "BGR", type: "commercial", score: 0.4 },
  { source: "TUR", target: "GRC", type: "commercial", score: 0.35, note: "bilateral trade despite tensions" },
  { source: "TUR", target: "ROU", type: "commercial", score: 0.35 },

  // Greece & Cyprus
  { source: "GRC", target: "CYP", type: "commercial", score: 0.5 },
  { source: "GRC", target: "BGR", type: "commercial", score: 0.4 },

  // SANCTIONS — Russia & Belarus
  { source: "RUS", target: "DEU", type: "commercial", score: -0.8, note: "sanctions; Nord Stream ended" },
  { source: "RUS", target: "FRA", type: "commercial", score: -0.7, note: "EU sanctions" },
  { source: "RUS", target: "ITA", type: "commercial", score: -0.7, note: "EU sanctions; former energy ties" },
  { source: "RUS", target: "NLD", type: "commercial", score: -0.7, note: "EU sanctions" },
  { source: "RUS", target: "POL", type: "commercial", score: -0.9, note: "full energy cutoff + sanctions" },
  { source: "RUS", target: "GBR", type: "commercial", score: -0.8, note: "heavy sanctions" },
  { source: "RUS", target: "FIN", type: "commercial", score: -0.8, note: "trade collapsed post-2022" },
  { source: "RUS", target: "EST", type: "commercial", score: -0.85, note: "sanctions" },
  { source: "RUS", target: "LVA", type: "commercial", score: -0.85, note: "sanctions" },
  { source: "RUS", target: "LTU", type: "commercial", score: -0.85, note: "sanctions; Kaliningrad transit row" },
  { source: "RUS", target: "NOR", type: "commercial", score: -0.6, note: "sanctions; Arctic cooperation ended" },
  { source: "RUS", target: "CHE", type: "commercial", score: -0.5, note: "Swiss adopted EU sanctions" },
  { source: "RUS", target: "SWE", type: "commercial", score: -0.7, note: "sanctions" },
  { source: "RUS", target: "BLR", type: "commercial", score: 0.7, note: "economic union; Russia is key partner" },
  { source: "RUS", target: "TUR", type: "commercial", score: 0.3, note: "Turkey did not join sanctions; energy trade" },
  { source: "RUS", target: "SRB", type: "commercial", score: 0.3, note: "Serbia did not sanction Russia" },
  { source: "RUS", target: "HUN", type: "commercial", score: -0.2, note: "EU sanctions apply but Orbán resists" },
  { source: "UKR", target: "RUS", type: "commercial", score: -1, note: "trade severed by war" },
  { source: "BLR", target: "POL", type: "commercial", score: -0.7, note: "sanctions; border crisis" },
  { source: "BLR", target: "LTU", type: "commercial", score: -0.7, note: "sanctions; border sealed" },
  { source: "BLR", target: "LVA", type: "commercial", score: -0.65, note: "sanctions" },
  { source: "BLR", target: "DEU", type: "commercial", score: -0.6, note: "EU sanctions" },

  // ═══════════════════════════════════════════════════════════════════════════
  // DIPLOMATIC — alliances, EU/NATO alignment, tensions
  // ═══════════════════════════════════════════════════════════════════════════

  // Franco-German axis (EU engine)
  { source: "FRA", target: "DEU", type: "diplomatic", score: 0.85, note: "EU founding axis; Élysée Treaty" },
  { source: "FRA", target: "ITA", type: "diplomatic", score: 0.7, note: "Quirinal Treaty 2021" },
  { source: "FRA", target: "ESP", type: "diplomatic", score: 0.7, note: "EU Southern partners" },
  { source: "FRA", target: "BEL", type: "diplomatic", score: 0.75, note: "Francophonie; EU founding" },
  { source: "FRA", target: "GBR", type: "diplomatic", score: 0.65, note: "post-Brexit tensions but close allies" },
  { source: "FRA", target: "POL", type: "diplomatic", score: 0.6, note: "Weimar Triangle" },
  { source: "FRA", target: "UKR", type: "diplomatic", score: 0.7, note: "strong support for Ukraine" },

  // Germany
  { source: "DEU", target: "POL", type: "diplomatic", score: 0.6, note: "Weimar Triangle; historical baggage" },
  { source: "DEU", target: "NLD", type: "diplomatic", score: 0.75, note: "like-minded on fiscal policy" },
  { source: "DEU", target: "AUT", type: "diplomatic", score: 0.7, note: "German-speaking affinity" },
  { source: "DEU", target: "CZE", type: "diplomatic", score: 0.6 },
  { source: "DEU", target: "UKR", type: "diplomatic", score: 0.6, note: "Zeitenwende support" },
  { source: "DEU", target: "GBR", type: "diplomatic", score: 0.6 },
  { source: "DEU", target: "CHE", type: "diplomatic", score: 0.65 },

  // UK
  { source: "GBR", target: "IRL", type: "diplomatic", score: 0.55, note: "close but Northern Ireland strains" },
  { source: "GBR", target: "UKR", type: "diplomatic", score: 0.8, note: "early and strong Ukraine supporter" },
  { source: "GBR", target: "NOR", type: "diplomatic", score: 0.65, note: "North Sea cooperation" },

  // Nordics (Nordic Council)
  { source: "SWE", target: "FIN", type: "diplomatic", score: 0.9, note: "joined NATO together" },
  { source: "SWE", target: "NOR", type: "diplomatic", score: 0.85, note: "Nordic brothers" },
  { source: "SWE", target: "DNK", type: "diplomatic", score: 0.8, note: "Nordic Council" },
  { source: "NOR", target: "DNK", type: "diplomatic", score: 0.8 },
  { source: "NOR", target: "FIN", type: "diplomatic", score: 0.8 },
  { source: "NOR", target: "ISL", type: "diplomatic", score: 0.75, note: "Nordic Council" },
  { source: "FIN", target: "EST", type: "diplomatic", score: 0.8, note: "Finno-Ugric; close Baltic ally" },
  { source: "FIN", target: "UKR", type: "diplomatic", score: 0.65 },

  // Baltics (tight trilateral cooperation)
  { source: "EST", target: "LVA", type: "diplomatic", score: 0.85, note: "Baltic cooperation" },
  { source: "EST", target: "LTU", type: "diplomatic", score: 0.85, note: "Baltic cooperation" },
  { source: "LVA", target: "LTU", type: "diplomatic", score: 0.85, note: "Baltic cooperation" },
  { source: "POL", target: "LTU", type: "diplomatic", score: 0.8, note: "Lublin Triangle" },
  { source: "POL", target: "UKR", type: "diplomatic", score: 0.85, note: "strongest Ukraine advocate in NATO" },
  { source: "LTU", target: "UKR", type: "diplomatic", score: 0.8, note: "Lublin Triangle" },
  { source: "EST", target: "UKR", type: "diplomatic", score: 0.75, note: "highest per-capita Ukraine support" },
  { source: "LVA", target: "UKR", type: "diplomatic", score: 0.7 },

  // Visegrád group (fractured)
  { source: "CZE", target: "SVK", type: "diplomatic", score: 0.7, note: "close post-Czechoslovakia" },
  { source: "POL", target: "HUN", type: "diplomatic", score: 0.3, note: "Visegrád strained; Ukraine split" },
  { source: "CZE", target: "POL", type: "diplomatic", score: 0.6 },
  { source: "HUN", target: "SVK", type: "diplomatic", score: 0.45, note: "Hungarian minority issues occasional friction" },

  // Hungary — EU outlier
  { source: "HUN", target: "RUS", type: "diplomatic", score: 0.2, note: "Orbán's Russia-friendly stance" },
  { source: "HUN", target: "DEU", type: "diplomatic", score: 0.3, note: "EU rule-of-law tensions" },
  { source: "HUN", target: "UKR", type: "diplomatic", score: -0.3, note: "Hungarian minority; aid blocking" },

  // Greece & Cyprus
  { source: "GRC", target: "CYP", type: "diplomatic", score: 0.95, note: "near-unified diplomatic stance" },
  { source: "GRC", target: "FRA", type: "diplomatic", score: 0.6, note: "defense pact 2021" },
  { source: "GRC", target: "ITA", type: "diplomatic", score: 0.55, note: "Mediterranean partners" },

  // Turkey — complicated NATO member
  { source: "TUR", target: "GRC", type: "diplomatic", score: -0.5, note: "Aegean/Cyprus/maritime disputes" },
  { source: "TUR", target: "CYP", type: "diplomatic", score: -0.7, note: "Northern Cyprus occupation" },
  { source: "TUR", target: "DEU", type: "diplomatic", score: 0.3, note: "large diaspora; trade; frictions" },
  { source: "TUR", target: "GBR", type: "diplomatic", score: 0.4 },
  { source: "TUR", target: "UKR", type: "diplomatic", score: 0.5, note: "Bayraktar drones; Black Sea interests" },
  { source: "TUR", target: "RUS", type: "diplomatic", score: 0.15, note: "balancing act; grain deal mediator" },
  { source: "TUR", target: "SWE", type: "diplomatic", score: 0.3, note: "improved after NATO accession deal" },
  { source: "TUR", target: "BGR", type: "diplomatic", score: 0.4 },

  // Western Balkans & EU aspiration
  { source: "SRB", target: "RUS", type: "diplomatic", score: 0.5, note: "historic Slavic ally; no sanctions on Russia" },
  { source: "SRB", target: "KOS", type: "diplomatic", score: -0.9, note: "Serbia does not recognize Kosovo" },
  { source: "SRB", target: "FRA", type: "diplomatic", score: 0.2, note: "EU accession dialogue" },
  { source: "SRB", target: "DEU", type: "diplomatic", score: 0.3, note: "EU accession pathway" },
  { source: "SRB", target: "HUN", type: "diplomatic", score: 0.5, note: "Orbán-Vučić axis" },
  { source: "SRB", target: "HRV", type: "diplomatic", score: -0.2, note: "post-Yugoslav tensions" },
  { source: "SRB", target: "BIH", type: "diplomatic", score: -0.1, note: "Republika Srpska entity tensions" },
  { source: "MNE", target: "SRB", type: "diplomatic", score: 0.3 },
  { source: "MKD", target: "GRC", type: "diplomatic", score: 0.4, note: "improved after Prespa Agreement" },
  { source: "MKD", target: "BGR", type: "diplomatic", score: -0.3, note: "language/identity dispute blocks EU progress" },
  { source: "ALB", target: "KOS", type: "diplomatic", score: 0.85, note: "ethnic Albanian affinity" },
  { source: "ALB", target: "MKD", type: "diplomatic", score: 0.5 },
  { source: "KOS", target: "GBR", type: "diplomatic", score: 0.6, note: "UK recognizes Kosovo" },
  { source: "KOS", target: "DEU", type: "diplomatic", score: 0.5, note: "Germany recognizes Kosovo" },
  { source: "KOS", target: "FRA", type: "diplomatic", score: 0.5, note: "France recognizes Kosovo" },

  // Moldova & Eastern neighborhood
  { source: "MDA", target: "ROU", type: "diplomatic", score: 0.8, note: "shared language/culture; EU candidacy" },
  { source: "MDA", target: "UKR", type: "diplomatic", score: 0.6, note: "Transnistria shared concern" },
  { source: "MDA", target: "RUS", type: "diplomatic", score: -0.5, note: "Transnistria; Russian interference" },

  // Russia & Belarus — diplomatic isolation
  { source: "BLR", target: "RUS", type: "diplomatic", score: 0.9, note: "Union State; Lukashenko depends on Putin" },
  { source: "RUS", target: "FRA", type: "diplomatic", score: -0.7, note: "frozen since 2022 invasion" },
  { source: "RUS", target: "DEU", type: "diplomatic", score: -0.7, note: "frozen since 2022 invasion" },
  { source: "RUS", target: "GBR", type: "diplomatic", score: -0.85, note: "deeply hostile; Salisbury, war" },
  { source: "RUS", target: "POL", type: "diplomatic", score: -0.9, note: "historically adversarial; NATO frontline" },
  { source: "RUS", target: "EST", type: "diplomatic", score: -0.8, note: "perceived Russian threat" },
  { source: "RUS", target: "LVA", type: "diplomatic", score: -0.8 },
  { source: "RUS", target: "LTU", type: "diplomatic", score: -0.8 },
  { source: "RUS", target: "FIN", type: "diplomatic", score: -0.7, note: "border sealed; NATO accession 2023" },
  { source: "RUS", target: "SWE", type: "diplomatic", score: -0.6, note: "NATO accession 2024" },
  { source: "RUS", target: "NOR", type: "diplomatic", score: -0.6, note: "Arctic tensions" },
  { source: "RUS", target: "UKR", type: "diplomatic", score: -1, note: "full-scale war since Feb 2022" },
  { source: "BLR", target: "POL", type: "diplomatic", score: -0.8, note: "migrant weaponization; hostility" },
  { source: "BLR", target: "LTU", type: "diplomatic", score: -0.75, note: "border tensions" },
  { source: "BLR", target: "UKR", type: "diplomatic", score: -0.7, note: "invasion staging ground" },

  // Benelux
  { source: "BEL", target: "NLD", type: "diplomatic", score: 0.8, note: "Benelux; EU founding" },
  { source: "BEL", target: "LUX", type: "diplomatic", score: 0.8, note: "Benelux; EU founding" },
  { source: "NLD", target: "LUX", type: "diplomatic", score: 0.75 },

  // Other
  { source: "ROU", target: "BGR", type: "diplomatic", score: 0.55, note: "Schengen accession together" },
  { source: "ROU", target: "POL", type: "diplomatic", score: 0.6, note: "Bucharest Nine; eastern flank" },
  { source: "ROU", target: "UKR", type: "diplomatic", score: 0.55, note: "grain corridor; Black Sea" },
  { source: "IRL", target: "GBR", type: "diplomatic", score: 0.55, note: "Common Travel Area" },
  { source: "CHE", target: "FRA", type: "diplomatic", score: 0.6 },
  { source: "SVN", target: "HRV", type: "diplomatic", score: 0.5, note: "EU neighbors; border dispute resolved" },
  { source: "ISL", target: "DNK", type: "diplomatic", score: 0.7, note: "Nordic Council" },

  // ═══════════════════════════════════════════════════════════════════════════
  // MILITARY — NATO cooperation, defense pacts, conflicts, arms supply
  // ═══════════════════════════════════════════════════════════════════════════

  // NATO core cooperation
  { source: "FRA", target: "DEU", type: "military", score: 0.65, note: "Franco-German Brigade; FCAS project" },
  { source: "FRA", target: "GBR", type: "military", score: 0.75, note: "Lancaster House Treaties; nuclear powers" },
  { source: "DEU", target: "NLD", type: "military", score: 0.7, note: "integrated army corps" },
  { source: "DEU", target: "NOR", type: "military", score: 0.55 },
  { source: "DEU", target: "POL", type: "military", score: 0.65, note: "NATO eastern flank" },
  { source: "GBR", target: "NOR", type: "military", score: 0.65, note: "JEF; North Sea/Arctic" },
  { source: "GBR", target: "EST", type: "military", score: 0.7, note: "UK leads NATO battlegroup in Estonia" },
  { source: "GBR", target: "POL", type: "military", score: 0.65 },

  // Ukraine military support (key suppliers)
  { source: "POL", target: "UKR", type: "military", score: 0.9, note: "largest European arms/logistics hub" },
  { source: "GBR", target: "UKR", type: "military", score: 0.85, note: "early NLAW/Storm Shadow; training" },
  { source: "FRA", target: "UKR", type: "military", score: 0.65, note: "CAESAR howitzers; AMX-10; SCALP" },
  { source: "DEU", target: "UKR", type: "military", score: 0.6, note: "Leopard 2; IRIS-T; Gepard" },
  { source: "NOR", target: "UKR", type: "military", score: 0.55, note: "NASAMS; financial aid" },
  { source: "DNK", target: "UKR", type: "military", score: 0.55, note: "F-16 donation" },
  { source: "NLD", target: "UKR", type: "military", score: 0.6, note: "F-16 donation; Patriot" },
  { source: "SWE", target: "UKR", type: "military", score: 0.55, note: "CV90; Archer artillery" },
  { source: "FIN", target: "UKR", type: "military", score: 0.5, note: "artillery; defense packages" },
  { source: "EST", target: "UKR", type: "military", score: 0.7, note: "highest per-capita military aid" },
  { source: "LVA", target: "UKR", type: "military", score: 0.6 },
  { source: "LTU", target: "UKR", type: "military", score: 0.65, note: "Lublin Triangle; drone coalition" },
  { source: "CZE", target: "UKR", type: "military", score: 0.6, note: "ammo initiative; T-72s" },
  { source: "TUR", target: "UKR", type: "military", score: 0.5, note: "Bayraktar TB2 drones" },
  { source: "ITA", target: "UKR", type: "military", score: 0.45, note: "SAMP/T air defense" },
  { source: "ESP", target: "UKR", type: "military", score: 0.35, note: "Leopard 2A4; Hawk" },
  { source: "ROU", target: "UKR", type: "military", score: 0.4, note: "logistics; training" },
  { source: "BGR", target: "UKR", type: "military", score: 0.3, note: "indirect support via ammo" },

  // Nordic defense (NORDEFCO)
  { source: "SWE", target: "FIN", type: "military", score: 0.8, note: "joint NATO accession; deep integration" },
  { source: "SWE", target: "NOR", type: "military", score: 0.7, note: "NORDEFCO" },
  { source: "SWE", target: "DNK", type: "military", score: 0.6 },
  { source: "NOR", target: "FIN", type: "military", score: 0.65, note: "Arctic defense cooperation" },
  { source: "NOR", target: "DNK", type: "military", score: 0.6 },

  // Baltic defense
  { source: "EST", target: "LVA", type: "military", score: 0.7, note: "Baltic trilateral defense" },
  { source: "EST", target: "LTU", type: "military", score: 0.7 },
  { source: "LVA", target: "LTU", type: "military", score: 0.7 },
  { source: "EST", target: "FIN", type: "military", score: 0.65, note: "Gulf of Finland control" },

  // Eastern flank buildup
  { source: "POL", target: "ROU", type: "military", score: 0.55, note: "Bucharest Nine; NATO eastern flank" },
  { source: "ROU", target: "BGR", type: "military", score: 0.45, note: "Black Sea NATO cooperation" },
  { source: "FRA", target: "GRC", type: "military", score: 0.6, note: "defense pact 2021; Rafale sale" },
  { source: "FRA", target: "ROU", type: "military", score: 0.45 },
  { source: "ITA", target: "GRC", type: "military", score: 0.45, note: "Mediterranean security" },

  // Russia — military threats & war
  { source: "RUS", target: "UKR", type: "military", score: -1, note: "full-scale invasion since Feb 2022" },
  { source: "RUS", target: "POL", type: "military", score: -0.8, note: "NATO frontline; missile incidents" },
  { source: "RUS", target: "EST", type: "military", score: -0.8, note: "Baltic air/sea provocations" },
  { source: "RUS", target: "LVA", type: "military", score: -0.8, note: "Baltic threats" },
  { source: "RUS", target: "LTU", type: "military", score: -0.8, note: "Kaliningrad; Suwałki Gap" },
  { source: "RUS", target: "FIN", type: "military", score: -0.7, note: "1,340km border; NATO since 2023" },
  { source: "RUS", target: "NOR", type: "military", score: -0.6, note: "Arctic; submarine threat" },
  { source: "RUS", target: "GBR", type: "military", score: -0.8, note: "nuclear rhetoric; deep hostility" },
  { source: "RUS", target: "FRA", type: "military", score: -0.6 },
  { source: "RUS", target: "DEU", type: "military", score: -0.6 },
  { source: "RUS", target: "SWE", type: "military", score: -0.6, note: "Gotland; Baltic Sea standoff" },
  { source: "RUS", target: "ROU", type: "military", score: -0.55, note: "Black Sea drone incidents" },

  // Belarus — Russian military proxy
  { source: "BLR", target: "RUS", type: "military", score: 0.9, note: "joint drills; tactical nukes deployed" },
  { source: "BLR", target: "POL", type: "military", score: -0.7, note: "border military buildup" },
  { source: "BLR", target: "LTU", type: "military", score: -0.65, note: "border provocations" },
  { source: "BLR", target: "UKR", type: "military", score: -0.8, note: "invasion staging ground 2022" },

  // Turkey-Greece-Cyprus triangle
  { source: "TUR", target: "GRC", type: "military", score: -0.4, note: "Aegean dogfights; island disputes" },
  { source: "TUR", target: "CYP", type: "military", score: -0.6, note: "Northern Cyprus; drilling disputes" },
  { source: "GRC", target: "CYP", type: "military", score: 0.75, note: "Greek troops in Cyprus; joint exercises" },
  { source: "TUR", target: "RUS", type: "military", score: 0.2, note: "S-400 purchase; uneasy coexistence" },

  // Serbia — non-NATO
  { source: "SRB", target: "RUS", type: "military", score: 0.4, note: "BARS cooperation; no NATO membership" },
  { source: "SRB", target: "FRA", type: "military", score: 0.2, note: "Rafale acquisition discussions" },

  // Other NATO cooperation
  { source: "DEU", target: "FRA", type: "military", score: 0.65 },
  { source: "DEU", target: "GBR", type: "military", score: 0.55 },
  { source: "FRA", target: "ITA", type: "military", score: 0.5 },
  { source: "FRA", target: "ESP", type: "military", score: 0.5 },
  { source: "GBR", target: "DNK", type: "military", score: 0.55, note: "JEF member" },
  { source: "GBR", target: "NLD", type: "military", score: 0.6, note: "JEF; UK-NL Amphibious Force" },
  { source: "ITA", target: "ESP", type: "military", score: 0.4 },
  { source: "ITA", target: "TUR", type: "military", score: 0.35, note: "NATO allies; Mediterranean" },
  { source: "POL", target: "LTU", type: "military", score: 0.7, note: "Suwałki Gap defense" },
  { source: "CHE", target: "AUT", type: "military", score: 0.3, note: "both neutral; limited cooperation" },
];



