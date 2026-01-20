export type EuropeCountry = {
  id: string;
  name: string;
  areaKm2?: number; // used for geographic sizing
  gdpBillionUsd?: number; // used for commercial sizing
  armyThousand?: number; // used for military sizing
};

export type EuropeLink = {
  source: string;
  target: string;
  type: "geographic" | "commercial" | "diplomatic" | "military";
  score: number; // -1 (very negative) to +1 (very positive)
  note?: string;
};

export const europeCountries: EuropeCountry[] = [
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

export const europeLinks: EuropeLink[] = [
{ source: "FRA", target: "DEU", type: "geographic", score: 0.2 },
{ source: "FRA", target: "BEL", type: "geographic", score: 0.2 },
{ source: "FRA", target: "ESP", type: "geographic", score: 0.2 },
{ source: "FRA", target: "ITA", type: "geographic", score: 0.2 },
{ source: "FRA", target: "CHE", type: "geographic", score: 0.2 },
{ source: "FRA", target: "LUX", type: "geographic", score: 0.2 },

{ source: "DEU", target: "POL", type: "geographic", score: 0.2 },
{ source: "DEU", target: "CZE", type: "geographic", score: 0.2 },
{ source: "DEU", target: "AUT", type: "geographic", score: 0.2 },
{ source: "DEU", target: "CHE", type: "geographic", score: 0.2 },
{ source: "DEU", target: "LUX", type: "geographic", score: 0.2 },
{ source: "DEU", target: "NLD", type: "geographic", score: 0.2 },
{ source: "DEU", target: "BEL", type: "geographic", score: 0.2 },
{ source: "DEU", target: "DNK", type: "geographic", score: 0.2 },
{ source: "DEU", target: "LIE", type: "geographic", score: 0.2 },

{ source: "ITA", target: "AUT", type: "geographic", score: 0.2 },
{ source: "ITA", target: "SVN", type: "geographic", score: 0.2 },
{ source: "ITA", target: "CHE", type: "geographic", score: 0.2 },

{ source: "ESP", target: "PRT", type: "geographic", score: 0.2 },

{ source: "POL", target: "LTU", type: "geographic", score: 0.2 },
{ source: "POL", target: "BLR", type: "geographic", score: 0.2 },
{ source: "POL", target: "UKR", type: "geographic", score: 0.2 },
{ source: "POL", target: "SVK", type: "geographic", score: 0.2 },
{ source: "POL", target: "CZE", type: "geographic", score: 0.2 },

{ source: "LTU", target: "LVA", type: "geographic", score: 0.2 },
{ source: "LVA", target: "EST", type: "geographic", score: 0.2 },

{ source: "SWE", target: "NOR", type: "geographic", score: 0.2 },
{ source: "FIN", target: "SWE", type: "geographic", score: 0.2 },
{ source: "FIN", target: "NOR", type: "geographic", score: 0.2 },
{ source: "FIN", target: "RUS", type: "geographic", score: 0.2 },

{ source: "CHE", target: "AUT", type: "geographic", score: 0.2 },
{ source: "CHE", target: "LIE", type: "geographic", score: 0.2 },

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
{ source: "SRB", target: "HRV", type: "geographic", score: 0.2 },

{ source: "ALB", target: "MNE", type: "geographic", score: 0.2 },
{ source: "ALB", target: "MKD", type: "geographic", score: 0.2 },
{ source: "ALB", target: "GRC", type: "geographic", score: 0.2 },
{ source: "ALB", target: "KOS", type: "geographic", score: 0.2 },

{ source: "ROU", target: "BGR", type: "geographic", score: 0.2 },
{ source: "ROU", target: "HUN", type: "geographic", score: 0.2 },
{ source: "ROU", target: "SRB", type: "geographic", score: 0.2 },
{ source: "ROU", target: "MDA", type: "geographic", score: 0.2 },
{ source: "ROU", target: "UKR", type: "geographic", score: 0.2 },

{ source: "MNE", target: "BIH", type: "geographic", score: 0.2 },
{ source: "MNE", target: "KOS", type: "geographic", score: 0.2 },

{ source: "MKD", target: "ALB", type: "geographic", score: 0.2 },
{ source: "MKD", target: "SRB", type: "geographic", score: 0.2 },
{ source: "MKD", target: "BGR", type: "geographic", score: 0.2 },
{ source: "MKD", target: "GRC", type: "geographic", score: 0.2 },
{ source: "MKD", target: "KOS", type: "geographic", score: 0.2 },


  // Commercial ties (illustrative scores)
  { source: "DEU", target: "POL", type: "commercial", score: 0.7 },
  { source: "DEU", target: "CZE", type: "commercial", score: 0.7 },
  { source: "FRA", target: "DEU", type: "commercial", score: 0.8 },
  { source: "ITA", target: "DEU", type: "commercial", score: 0.6 },
  { source: "ESP", target: "PRT", type: "commercial", score: 0.6 },
  { source: "AUT", target: "HUN", type: "commercial", score: 0.5 },
  { source: "SVN", target: "HRV", type: "commercial", score: 0.5 },
  { source: "DEU", target: "NLD", type: "commercial", score: 0.7 }, // strong trade
  { source: "DEU", target: "FRA", type: "commercial", score: 0.8 },
  { source: "ITA", target: "FRA", type: "commercial", score: 0.6 },
  { source: "ESP", target: "FRA", type: "commercial", score: 0.6 },
  { source: "POL", target: "UKR", type: "commercial", score: 0.5 }, // recent cooperation
  { source: "CHE", target: "DEU", type: "commercial", score: 0.6 },
  { source: "CHE", target: "ITA", type: "commercial", score: 0.5 },
  { source: "RUS", target: "DEU", type: "commercial", score: -0.7, note: "sanctions, energy cutoff" },
  { source: "BLR", target: "DEU", type: "commercial", score: -0.6, note: "sanctions" },
  { source: "UKR", target: "RUS", type: "commercial", score: -1, note: "trade severed" },

  // Diplomatic alignment (EU/NATO etc.)
  { source: "FRA", target: "DEU", type: "diplomatic", score: 0.9 },
  { source: "FRA", target: "ITA", type: "diplomatic", score: 0.7 },
  { source: "POL", target: "LTU", type: "diplomatic", score: 0.8 },
  { source: "SWE", target: "FIN", type: "diplomatic", score: 0.9 },
  { source: "NOR", target: "SWE", type: "diplomatic", score: 0.7 },
  { source: "CHE", target: "DEU", type: "diplomatic", score: 0.6 },
  { source: "ALB", target: "MKD", type: "diplomatic", score: 0.5 },
  { source: "POL", target: "UKR", type: "diplomatic", score: 0.8 }, // strong alignment
  { source: "LTU", target: "UKR", type: "diplomatic", score: 0.7 },
  { source: "FRA", target: "POL", type: "diplomatic", score: 0.6 },
  { source: "HUN", target: "POL", type: "diplomatic", score: 0.5 }, // Visegrád
  { source: "GRC", target: "CYP", type: "diplomatic", score: 0.9 }, // Greece–Cyprus
  { source: "TUR", target: "GRC", type: "diplomatic", score: -0.6, note: "Aegean tensions" }, 

  // Military/security cooperation (illustrative)
  { source: "POL", target: "DEU", type: "military", score: 0.6 },
  { source: "FRA", target: "DEU", type: "military", score: 0.6 },
  { source: "FIN", target: "SWE", type: "military", score: 0.7 },
  { source: "ITA", target: "GRC", type: "military", score: 0.4 },
  { source: "POL", target: "UKR", type: "military", score: 0.9, note: "support against Russia" },
  { source: "FRA", target: "UKR", type: "military", score: 0.6 },
  { source: "DEU", target: "UKR", type: "military", score: 0.5 },
  { source: "TUR", target: "UKR", type: "military", score: 0.6 },
  { source: "RUS", target: "UKR", type: "military", score: -1, note: "ongoing war" },
  { source: "RUS", target: "POL", type: "military", score: -0.8 },
  { source: "RUS", target: "EST", type: "military", score: -0.8, note: "Baltic threats" },
  { source: "RUS", target: "LVA", type: "military", score: -0.8, note: "Baltic threats" },
  { source: "RUS", target: "LTU", type: "military", score: -0.8, note: "Baltic threats" },
  { source: "GRC", target: "TUR", type: "military", score: -0.5 },
  { source: "TUR", target: "UKR", type: "military", score: 0.6 },
  { source: "TUR", target: "RUS", type: "military", score: 0.3 },
  { source: "TUR", target: "GRC", type: "military", score: 0.4 },
];


