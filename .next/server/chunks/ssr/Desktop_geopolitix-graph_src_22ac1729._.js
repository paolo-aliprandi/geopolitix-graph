module.exports = [
"[project]/Desktop/geopolitix-graph/src/data/europe.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "europeCountries",
    ()=>europeCountries,
    "europeLinks",
    ()=>europeLinks
]);
const europeCountries = [
    // Core EU sample + nearby non-EU per request
    {
        id: "FRA",
        name: "France",
        areaKm2: 551_695,
        gdpBillionUsd: 3000,
        armyThousand: 205
    },
    {
        id: "DEU",
        name: "Germany",
        areaKm2: 357_588,
        gdpBillionUsd: 4400,
        armyThousand: 183
    },
    {
        id: "ITA",
        name: "Italy",
        areaKm2: 301_340,
        gdpBillionUsd: 2100,
        armyThousand: 170
    },
    {
        id: "ESP",
        name: "Spain",
        areaKm2: 505_990,
        gdpBillionUsd: 1600,
        armyThousand: 120
    },
    {
        id: "PRT",
        name: "Portugal",
        areaKm2: 92_226,
        gdpBillionUsd: 280,
        armyThousand: 27
    },
    {
        id: "BEL",
        name: "Belgium",
        areaKm2: 30_689,
        gdpBillionUsd: 600,
        armyThousand: 25
    },
    {
        id: "NLD",
        name: "Netherlands",
        areaKm2: 41_543,
        gdpBillionUsd: 1100,
        armyThousand: 40
    },
    {
        id: "LUX",
        name: "Luxembourg",
        areaKm2: 2_586,
        gdpBillionUsd: 86,
        armyThousand: 1
    },
    {
        id: "AUT",
        name: "Austria",
        areaKm2: 83_879,
        gdpBillionUsd: 480,
        armyThousand: 24
    },
    {
        id: "POL",
        name: "Poland",
        areaKm2: 312_679,
        gdpBillionUsd: 840,
        armyThousand: 200
    },
    {
        id: "CZE",
        name: "Czechia",
        areaKm2: 78_866,
        gdpBillionUsd: 330,
        armyThousand: 28
    },
    {
        id: "SVK",
        name: "Slovakia",
        areaKm2: 49_035,
        gdpBillionUsd: 130,
        armyThousand: 18
    },
    {
        id: "HUN",
        name: "Hungary",
        areaKm2: 93_028,
        gdpBillionUsd: 200,
        armyThousand: 25
    },
    {
        id: "SVN",
        name: "Slovenia",
        areaKm2: 20_273,
        gdpBillionUsd: 70,
        armyThousand: 8
    },
    {
        id: "HRV",
        name: "Croatia",
        areaKm2: 56_594,
        gdpBillionUsd: 80,
        armyThousand: 15
    },
    {
        id: "ROU",
        name: "Romania",
        areaKm2: 238_397,
        gdpBillionUsd: 350,
        armyThousand: 70
    },
    {
        id: "BGR",
        name: "Bulgaria",
        areaKm2: 110_879,
        gdpBillionUsd: 90,
        armyThousand: 25
    },
    {
        id: "GRC",
        name: "Greece",
        areaKm2: 131_957,
        gdpBillionUsd: 220,
        armyThousand: 130
    },
    {
        id: "EST",
        name: "Estonia",
        areaKm2: 45_339,
        gdpBillionUsd: 40,
        armyThousand: 7
    },
    {
        id: "LVA",
        name: "Latvia",
        areaKm2: 64_589,
        gdpBillionUsd: 40,
        armyThousand: 7
    },
    {
        id: "LTU",
        name: "Lithuania",
        areaKm2: 65_300,
        gdpBillionUsd: 70,
        armyThousand: 20
    },
    {
        id: "IRL",
        name: "Ireland",
        areaKm2: 70_273,
        gdpBillionUsd: 500,
        armyThousand: 9
    },
    {
        id: "DNK",
        name: "Denmark",
        areaKm2: 42_951,
        gdpBillionUsd: 400,
        armyThousand: 18
    },
    {
        id: "SWE",
        name: "Sweden",
        areaKm2: 450_295,
        gdpBillionUsd: 600,
        armyThousand: 50
    },
    {
        id: "FIN",
        name: "Finland",
        areaKm2: 338_424,
        gdpBillionUsd: 300,
        armyThousand: 23
    },
    {
        id: "CYP",
        name: "Cyprus",
        areaKm2: 9_251,
        gdpBillionUsd: 40,
        armyThousand: 3
    },
    // Non-EU neighbors
    {
        id: "NOR",
        name: "Norway",
        areaKm2: 385_207,
        gdpBillionUsd: 500,
        armyThousand: 23
    },
    {
        id: "CHE",
        name: "Switzerland",
        areaKm2: 41_285,
        gdpBillionUsd: 800,
        armyThousand: 20
    },
    {
        id: "MDA",
        name: "Moldova",
        areaKm2: 33_846,
        gdpBillionUsd: 15,
        armyThousand: 6
    },
    {
        id: "SRB",
        name: "Serbia",
        areaKm2: 88_361,
        gdpBillionUsd: 70,
        armyThousand: 28
    },
    {
        id: "ALB",
        name: "Albania",
        areaKm2: 28_748,
        gdpBillionUsd: 17,
        armyThousand: 8
    },
    {
        id: "BIH",
        name: "Bosnia and Herz.",
        areaKm2: 51_197,
        gdpBillionUsd: 24,
        armyThousand: 10
    },
    {
        id: "MKD",
        name: "North Macedonia",
        areaKm2: 25_713,
        gdpBillionUsd: 15,
        armyThousand: 8
    },
    {
        id: "MNE",
        name: "Montenegro",
        areaKm2: 13_812,
        gdpBillionUsd: 6,
        armyThousand: 2
    },
    {
        id: "BLR",
        name: "Belarus",
        areaKm2: 207_600,
        gdpBillionUsd: 80,
        armyThousand: 45
    },
    {
        id: "UKR",
        name: "Ukraine",
        areaKm2: 603_628,
        gdpBillionUsd: 160,
        armyThousand: 700
    },
    {
        id: "RUS",
        name: "Russia",
        areaKm2: 17_098_242,
        gdpBillionUsd: 2200,
        armyThousand: 1000
    },
    {
        id: "LIE",
        name: "Liechtenstein",
        areaKm2: 160,
        gdpBillionUsd: 7,
        armyThousand: 0
    },
    {
        id: "ISL",
        name: "Iceland",
        areaKm2: 103_000,
        gdpBillionUsd: 30,
        armyThousand: 0
    },
    {
        id: "KOS",
        name: "Kosovo",
        areaKm2: 10_908,
        gdpBillionUsd: 9,
        armyThousand: 3
    },
    {
        id: "GBR",
        name: "United Kingdom",
        areaKm2: 243_610,
        gdpBillionUsd: 3300,
        armyThousand: 150
    },
    {
        id: "TUR",
        name: "Turkey",
        areaKm2: 783_562,
        gdpBillionUsd: 1200,
        armyThousand: 100
    }
];
const europeLinks = [
    // ═══════════════════════════════════════════════════════════════════════════
    // GEOGRAPHIC — land borders (+ Channel Tunnel for GBR-FRA)
    // Score 0.2 = neutral adjacency fact
    // ═══════════════════════════════════════════════════════════════════════════
    // France
    {
        source: "FRA",
        target: "DEU",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FRA",
        target: "BEL",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FRA",
        target: "ESP",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FRA",
        target: "ITA",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FRA",
        target: "CHE",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FRA",
        target: "LUX",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FRA",
        target: "GBR",
        type: "geographic",
        score: 0.2,
        note: "Channel Tunnel"
    },
    // Germany
    {
        source: "DEU",
        target: "POL",
        type: "geographic",
        score: 0.2
    },
    {
        source: "DEU",
        target: "CZE",
        type: "geographic",
        score: 0.2
    },
    {
        source: "DEU",
        target: "AUT",
        type: "geographic",
        score: 0.2
    },
    {
        source: "DEU",
        target: "CHE",
        type: "geographic",
        score: 0.2
    },
    {
        source: "DEU",
        target: "LUX",
        type: "geographic",
        score: 0.2
    },
    {
        source: "DEU",
        target: "NLD",
        type: "geographic",
        score: 0.2
    },
    {
        source: "DEU",
        target: "BEL",
        type: "geographic",
        score: 0.2
    },
    {
        source: "DEU",
        target: "DNK",
        type: "geographic",
        score: 0.2
    },
    // Italy
    {
        source: "ITA",
        target: "AUT",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ITA",
        target: "SVN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ITA",
        target: "CHE",
        type: "geographic",
        score: 0.2
    },
    // Iberia
    {
        source: "ESP",
        target: "PRT",
        type: "geographic",
        score: 0.2
    },
    // UK & Ireland
    {
        source: "GBR",
        target: "IRL",
        type: "geographic",
        score: 0.2,
        note: "Northern Ireland land border"
    },
    // Poland
    {
        source: "POL",
        target: "LTU",
        type: "geographic",
        score: 0.2
    },
    {
        source: "POL",
        target: "BLR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "POL",
        target: "UKR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "POL",
        target: "SVK",
        type: "geographic",
        score: 0.2
    },
    {
        source: "POL",
        target: "CZE",
        type: "geographic",
        score: 0.2
    },
    // Baltics
    {
        source: "LTU",
        target: "LVA",
        type: "geographic",
        score: 0.2
    },
    {
        source: "LTU",
        target: "BLR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "LTU",
        target: "RUS",
        type: "geographic",
        score: 0.2,
        note: "Kaliningrad exclave"
    },
    {
        source: "LVA",
        target: "EST",
        type: "geographic",
        score: 0.2
    },
    {
        source: "LVA",
        target: "BLR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "LVA",
        target: "RUS",
        type: "geographic",
        score: 0.2
    },
    {
        source: "EST",
        target: "RUS",
        type: "geographic",
        score: 0.2
    },
    // Nordics
    {
        source: "SWE",
        target: "NOR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FIN",
        target: "SWE",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FIN",
        target: "NOR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "FIN",
        target: "RUS",
        type: "geographic",
        score: 0.2
    },
    {
        source: "NOR",
        target: "RUS",
        type: "geographic",
        score: 0.2
    },
    // Switzerland & Liechtenstein
    {
        source: "CHE",
        target: "AUT",
        type: "geographic",
        score: 0.2
    },
    {
        source: "CHE",
        target: "LIE",
        type: "geographic",
        score: 0.2
    },
    {
        source: "AUT",
        target: "LIE",
        type: "geographic",
        score: 0.2
    },
    // Central Europe
    {
        source: "AUT",
        target: "HUN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "AUT",
        target: "SVK",
        type: "geographic",
        score: 0.2
    },
    {
        source: "AUT",
        target: "SVN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SVK",
        target: "HUN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SVK",
        target: "UKR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "HUN",
        target: "UKR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "HUN",
        target: "SVN",
        type: "geographic",
        score: 0.2
    },
    // Croatia & Western Balkans
    {
        source: "HRV",
        target: "SVN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "HRV",
        target: "BIH",
        type: "geographic",
        score: 0.2
    },
    {
        source: "HRV",
        target: "SRB",
        type: "geographic",
        score: 0.2
    },
    {
        source: "HRV",
        target: "MNE",
        type: "geographic",
        score: 0.2
    },
    {
        source: "HRV",
        target: "HUN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SRB",
        target: "BIH",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SRB",
        target: "MNE",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SRB",
        target: "MKD",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SRB",
        target: "BGR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SRB",
        target: "ROU",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SRB",
        target: "HUN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "SRB",
        target: "KOS",
        type: "geographic",
        score: 0.2
    },
    {
        source: "MNE",
        target: "BIH",
        type: "geographic",
        score: 0.2
    },
    {
        source: "MNE",
        target: "KOS",
        type: "geographic",
        score: 0.2
    },
    {
        source: "MNE",
        target: "ALB",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ALB",
        target: "MKD",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ALB",
        target: "GRC",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ALB",
        target: "KOS",
        type: "geographic",
        score: 0.2
    },
    {
        source: "MKD",
        target: "BGR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "MKD",
        target: "GRC",
        type: "geographic",
        score: 0.2
    },
    {
        source: "MKD",
        target: "KOS",
        type: "geographic",
        score: 0.2
    },
    // Romania, Bulgaria, Moldova
    {
        source: "ROU",
        target: "BGR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ROU",
        target: "HUN",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ROU",
        target: "MDA",
        type: "geographic",
        score: 0.2
    },
    {
        source: "ROU",
        target: "UKR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "BGR",
        target: "GRC",
        type: "geographic",
        score: 0.2
    },
    {
        source: "BGR",
        target: "TUR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "TUR",
        target: "GRC",
        type: "geographic",
        score: 0.2
    },
    // Eastern Europe
    {
        source: "BLR",
        target: "RUS",
        type: "geographic",
        score: 0.2
    },
    {
        source: "BLR",
        target: "UKR",
        type: "geographic",
        score: 0.2
    },
    {
        source: "UKR",
        target: "RUS",
        type: "geographic",
        score: 0.2
    },
    {
        source: "UKR",
        target: "MDA",
        type: "geographic",
        score: 0.2
    },
    // ═══════════════════════════════════════════════════════════════════════════
    // COMMERCIAL — trade volumes, sanctions, energy dependencies
    // ═══════════════════════════════════════════════════════════════════════════
    // Germany — Europe's trade hub
    {
        source: "DEU",
        target: "FRA",
        type: "commercial",
        score: 0.85,
        note: "EU's largest bilateral trade corridor"
    },
    {
        source: "DEU",
        target: "NLD",
        type: "commercial",
        score: 0.8,
        note: "Rotterdam as gateway for German trade"
    },
    {
        source: "DEU",
        target: "POL",
        type: "commercial",
        score: 0.75,
        note: "major supply chain integration"
    },
    {
        source: "DEU",
        target: "ITA",
        type: "commercial",
        score: 0.7
    },
    {
        source: "DEU",
        target: "CZE",
        type: "commercial",
        score: 0.75,
        note: "deep automotive supply chains"
    },
    {
        source: "DEU",
        target: "AUT",
        type: "commercial",
        score: 0.7,
        note: "strong DACH corridor"
    },
    {
        source: "DEU",
        target: "CHE",
        type: "commercial",
        score: 0.7
    },
    {
        source: "DEU",
        target: "BEL",
        type: "commercial",
        score: 0.65
    },
    {
        source: "DEU",
        target: "ESP",
        type: "commercial",
        score: 0.6
    },
    {
        source: "DEU",
        target: "GBR",
        type: "commercial",
        score: 0.6,
        note: "post-Brexit trade friction"
    },
    {
        source: "DEU",
        target: "HUN",
        type: "commercial",
        score: 0.55,
        note: "German auto sector investment"
    },
    {
        source: "DEU",
        target: "SVK",
        type: "commercial",
        score: 0.55,
        note: "automotive integration"
    },
    {
        source: "DEU",
        target: "ROU",
        type: "commercial",
        score: 0.5
    },
    {
        source: "DEU",
        target: "TUR",
        type: "commercial",
        score: 0.5
    },
    {
        source: "DEU",
        target: "DNK",
        type: "commercial",
        score: 0.55
    },
    {
        source: "DEU",
        target: "SWE",
        type: "commercial",
        score: 0.55
    },
    {
        source: "DEU",
        target: "NOR",
        type: "commercial",
        score: 0.6,
        note: "Norwegian gas replacing Russian"
    },
    // France — trade relationships
    {
        source: "FRA",
        target: "ITA",
        type: "commercial",
        score: 0.65
    },
    {
        source: "FRA",
        target: "ESP",
        type: "commercial",
        score: 0.65
    },
    {
        source: "FRA",
        target: "BEL",
        type: "commercial",
        score: 0.65
    },
    {
        source: "FRA",
        target: "GBR",
        type: "commercial",
        score: 0.6
    },
    {
        source: "FRA",
        target: "NLD",
        type: "commercial",
        score: 0.55
    },
    {
        source: "FRA",
        target: "CHE",
        type: "commercial",
        score: 0.55
    },
    {
        source: "FRA",
        target: "PRT",
        type: "commercial",
        score: 0.45
    },
    // UK post-Brexit
    {
        source: "GBR",
        target: "IRL",
        type: "commercial",
        score: 0.7,
        note: "deeply interlinked economies"
    },
    {
        source: "GBR",
        target: "NLD",
        type: "commercial",
        score: 0.55
    },
    {
        source: "GBR",
        target: "NOR",
        type: "commercial",
        score: 0.5,
        note: "North Sea energy"
    },
    {
        source: "GBR",
        target: "TUR",
        type: "commercial",
        score: 0.4
    },
    {
        source: "GBR",
        target: "ITA",
        type: "commercial",
        score: 0.45
    },
    {
        source: "GBR",
        target: "ESP",
        type: "commercial",
        score: 0.45
    },
    // Italy
    {
        source: "ITA",
        target: "ESP",
        type: "commercial",
        score: 0.5
    },
    {
        source: "ITA",
        target: "CHE",
        type: "commercial",
        score: 0.55
    },
    {
        source: "ITA",
        target: "AUT",
        type: "commercial",
        score: 0.5
    },
    {
        source: "ITA",
        target: "TUR",
        type: "commercial",
        score: 0.45
    },
    {
        source: "ITA",
        target: "GRC",
        type: "commercial",
        score: 0.4
    },
    {
        source: "ITA",
        target: "SVN",
        type: "commercial",
        score: 0.45
    },
    {
        source: "ITA",
        target: "ROU",
        type: "commercial",
        score: 0.45
    },
    // Iberia
    {
        source: "ESP",
        target: "PRT",
        type: "commercial",
        score: 0.7,
        note: "Iberian market integration"
    },
    // Nordics
    {
        source: "SWE",
        target: "NOR",
        type: "commercial",
        score: 0.7,
        note: "Nordic economic linkage"
    },
    {
        source: "SWE",
        target: "FIN",
        type: "commercial",
        score: 0.65
    },
    {
        source: "SWE",
        target: "DNK",
        type: "commercial",
        score: 0.65
    },
    {
        source: "NOR",
        target: "DNK",
        type: "commercial",
        score: 0.55
    },
    {
        source: "FIN",
        target: "EST",
        type: "commercial",
        score: 0.55,
        note: "cross-Baltic digital trade"
    },
    // Benelux
    {
        source: "BEL",
        target: "NLD",
        type: "commercial",
        score: 0.75,
        note: "Benelux union"
    },
    {
        source: "BEL",
        target: "LUX",
        type: "commercial",
        score: 0.55,
        note: "Benelux union"
    },
    // Central Europe
    {
        source: "AUT",
        target: "HUN",
        type: "commercial",
        score: 0.5
    },
    {
        source: "CZE",
        target: "SVK",
        type: "commercial",
        score: 0.65,
        note: "post-Czechoslovakia integration"
    },
    {
        source: "CZE",
        target: "POL",
        type: "commercial",
        score: 0.55
    },
    {
        source: "SVN",
        target: "HRV",
        type: "commercial",
        score: 0.5
    },
    {
        source: "POL",
        target: "SVK",
        type: "commercial",
        score: 0.45
    },
    // Western Balkans
    {
        source: "SRB",
        target: "BIH",
        type: "commercial",
        score: 0.4
    },
    {
        source: "SRB",
        target: "MNE",
        type: "commercial",
        score: 0.35
    },
    {
        source: "MKD",
        target: "GRC",
        type: "commercial",
        score: 0.35
    },
    {
        source: "ALB",
        target: "ITA",
        type: "commercial",
        score: 0.35
    },
    {
        source: "ALB",
        target: "GRC",
        type: "commercial",
        score: 0.3
    },
    // Ukraine wartime trade
    {
        source: "POL",
        target: "UKR",
        type: "commercial",
        score: 0.55,
        note: "wartime solidarity trade corridor"
    },
    {
        source: "ROU",
        target: "UKR",
        type: "commercial",
        score: 0.35,
        note: "Danube grain corridor"
    },
    {
        source: "ROU",
        target: "MDA",
        type: "commercial",
        score: 0.4
    },
    // Turkey
    {
        source: "TUR",
        target: "BGR",
        type: "commercial",
        score: 0.4
    },
    {
        source: "TUR",
        target: "GRC",
        type: "commercial",
        score: 0.35,
        note: "bilateral trade despite tensions"
    },
    {
        source: "TUR",
        target: "ROU",
        type: "commercial",
        score: 0.35
    },
    // Greece & Cyprus
    {
        source: "GRC",
        target: "CYP",
        type: "commercial",
        score: 0.5
    },
    {
        source: "GRC",
        target: "BGR",
        type: "commercial",
        score: 0.4
    },
    // SANCTIONS — Russia & Belarus
    {
        source: "RUS",
        target: "DEU",
        type: "commercial",
        score: -0.8,
        note: "sanctions; Nord Stream ended"
    },
    {
        source: "RUS",
        target: "FRA",
        type: "commercial",
        score: -0.7,
        note: "EU sanctions"
    },
    {
        source: "RUS",
        target: "ITA",
        type: "commercial",
        score: -0.7,
        note: "EU sanctions; former energy ties"
    },
    {
        source: "RUS",
        target: "NLD",
        type: "commercial",
        score: -0.7,
        note: "EU sanctions"
    },
    {
        source: "RUS",
        target: "POL",
        type: "commercial",
        score: -0.9,
        note: "full energy cutoff + sanctions"
    },
    {
        source: "RUS",
        target: "GBR",
        type: "commercial",
        score: -0.8,
        note: "heavy sanctions"
    },
    {
        source: "RUS",
        target: "FIN",
        type: "commercial",
        score: -0.8,
        note: "trade collapsed post-2022"
    },
    {
        source: "RUS",
        target: "EST",
        type: "commercial",
        score: -0.85,
        note: "sanctions"
    },
    {
        source: "RUS",
        target: "LVA",
        type: "commercial",
        score: -0.85,
        note: "sanctions"
    },
    {
        source: "RUS",
        target: "LTU",
        type: "commercial",
        score: -0.85,
        note: "sanctions; Kaliningrad transit row"
    },
    {
        source: "RUS",
        target: "NOR",
        type: "commercial",
        score: -0.6,
        note: "sanctions; Arctic cooperation ended"
    },
    {
        source: "RUS",
        target: "CHE",
        type: "commercial",
        score: -0.5,
        note: "Swiss adopted EU sanctions"
    },
    {
        source: "RUS",
        target: "SWE",
        type: "commercial",
        score: -0.7,
        note: "sanctions"
    },
    {
        source: "RUS",
        target: "BLR",
        type: "commercial",
        score: 0.7,
        note: "economic union; Russia is key partner"
    },
    {
        source: "RUS",
        target: "TUR",
        type: "commercial",
        score: 0.3,
        note: "Turkey did not join sanctions; energy trade"
    },
    {
        source: "RUS",
        target: "SRB",
        type: "commercial",
        score: 0.3,
        note: "Serbia did not sanction Russia"
    },
    {
        source: "RUS",
        target: "HUN",
        type: "commercial",
        score: -0.2,
        note: "EU sanctions apply but Orbán resists"
    },
    {
        source: "UKR",
        target: "RUS",
        type: "commercial",
        score: -1,
        note: "trade severed by war"
    },
    {
        source: "BLR",
        target: "POL",
        type: "commercial",
        score: -0.7,
        note: "sanctions; border crisis"
    },
    {
        source: "BLR",
        target: "LTU",
        type: "commercial",
        score: -0.7,
        note: "sanctions; border sealed"
    },
    {
        source: "BLR",
        target: "LVA",
        type: "commercial",
        score: -0.65,
        note: "sanctions"
    },
    {
        source: "BLR",
        target: "DEU",
        type: "commercial",
        score: -0.6,
        note: "EU sanctions"
    },
    // ═══════════════════════════════════════════════════════════════════════════
    // DIPLOMATIC — alliances, EU/NATO alignment, tensions
    // ═══════════════════════════════════════════════════════════════════════════
    // Franco-German axis (EU engine)
    {
        source: "FRA",
        target: "DEU",
        type: "diplomatic",
        score: 0.85,
        note: "EU founding axis; Élysée Treaty"
    },
    {
        source: "FRA",
        target: "ITA",
        type: "diplomatic",
        score: 0.7,
        note: "Quirinal Treaty 2021"
    },
    {
        source: "FRA",
        target: "ESP",
        type: "diplomatic",
        score: 0.7,
        note: "EU Southern partners"
    },
    {
        source: "FRA",
        target: "BEL",
        type: "diplomatic",
        score: 0.75,
        note: "Francophonie; EU founding"
    },
    {
        source: "FRA",
        target: "GBR",
        type: "diplomatic",
        score: 0.65,
        note: "post-Brexit tensions but close allies"
    },
    {
        source: "FRA",
        target: "POL",
        type: "diplomatic",
        score: 0.6,
        note: "Weimar Triangle"
    },
    {
        source: "FRA",
        target: "UKR",
        type: "diplomatic",
        score: 0.7,
        note: "strong support for Ukraine"
    },
    // Germany
    {
        source: "DEU",
        target: "POL",
        type: "diplomatic",
        score: 0.6,
        note: "Weimar Triangle; historical baggage"
    },
    {
        source: "DEU",
        target: "NLD",
        type: "diplomatic",
        score: 0.75,
        note: "like-minded on fiscal policy"
    },
    {
        source: "DEU",
        target: "AUT",
        type: "diplomatic",
        score: 0.7,
        note: "German-speaking affinity"
    },
    {
        source: "DEU",
        target: "CZE",
        type: "diplomatic",
        score: 0.6
    },
    {
        source: "DEU",
        target: "UKR",
        type: "diplomatic",
        score: 0.6,
        note: "Zeitenwende support"
    },
    {
        source: "DEU",
        target: "GBR",
        type: "diplomatic",
        score: 0.6
    },
    {
        source: "DEU",
        target: "CHE",
        type: "diplomatic",
        score: 0.65
    },
    // UK
    {
        source: "GBR",
        target: "IRL",
        type: "diplomatic",
        score: 0.55,
        note: "close but Northern Ireland strains"
    },
    {
        source: "GBR",
        target: "UKR",
        type: "diplomatic",
        score: 0.8,
        note: "early and strong Ukraine supporter"
    },
    {
        source: "GBR",
        target: "NOR",
        type: "diplomatic",
        score: 0.65,
        note: "North Sea cooperation"
    },
    // Nordics (Nordic Council)
    {
        source: "SWE",
        target: "FIN",
        type: "diplomatic",
        score: 0.9,
        note: "joined NATO together"
    },
    {
        source: "SWE",
        target: "NOR",
        type: "diplomatic",
        score: 0.85,
        note: "Nordic brothers"
    },
    {
        source: "SWE",
        target: "DNK",
        type: "diplomatic",
        score: 0.8,
        note: "Nordic Council"
    },
    {
        source: "NOR",
        target: "DNK",
        type: "diplomatic",
        score: 0.8
    },
    {
        source: "NOR",
        target: "FIN",
        type: "diplomatic",
        score: 0.8
    },
    {
        source: "NOR",
        target: "ISL",
        type: "diplomatic",
        score: 0.75,
        note: "Nordic Council"
    },
    {
        source: "FIN",
        target: "EST",
        type: "diplomatic",
        score: 0.8,
        note: "Finno-Ugric; close Baltic ally"
    },
    {
        source: "FIN",
        target: "UKR",
        type: "diplomatic",
        score: 0.65
    },
    // Baltics (tight trilateral cooperation)
    {
        source: "EST",
        target: "LVA",
        type: "diplomatic",
        score: 0.85,
        note: "Baltic cooperation"
    },
    {
        source: "EST",
        target: "LTU",
        type: "diplomatic",
        score: 0.85,
        note: "Baltic cooperation"
    },
    {
        source: "LVA",
        target: "LTU",
        type: "diplomatic",
        score: 0.85,
        note: "Baltic cooperation"
    },
    {
        source: "POL",
        target: "LTU",
        type: "diplomatic",
        score: 0.8,
        note: "Lublin Triangle"
    },
    {
        source: "POL",
        target: "UKR",
        type: "diplomatic",
        score: 0.85,
        note: "strongest Ukraine advocate in NATO"
    },
    {
        source: "LTU",
        target: "UKR",
        type: "diplomatic",
        score: 0.8,
        note: "Lublin Triangle"
    },
    {
        source: "EST",
        target: "UKR",
        type: "diplomatic",
        score: 0.75,
        note: "highest per-capita Ukraine support"
    },
    {
        source: "LVA",
        target: "UKR",
        type: "diplomatic",
        score: 0.7
    },
    // Visegrád group (fractured)
    {
        source: "CZE",
        target: "SVK",
        type: "diplomatic",
        score: 0.7,
        note: "close post-Czechoslovakia"
    },
    {
        source: "POL",
        target: "HUN",
        type: "diplomatic",
        score: 0.3,
        note: "Visegrád strained; Ukraine split"
    },
    {
        source: "CZE",
        target: "POL",
        type: "diplomatic",
        score: 0.6
    },
    {
        source: "HUN",
        target: "SVK",
        type: "diplomatic",
        score: 0.45,
        note: "Hungarian minority issues occasional friction"
    },
    // Hungary — EU outlier
    {
        source: "HUN",
        target: "RUS",
        type: "diplomatic",
        score: 0.2,
        note: "Orbán's Russia-friendly stance"
    },
    {
        source: "HUN",
        target: "DEU",
        type: "diplomatic",
        score: 0.3,
        note: "EU rule-of-law tensions"
    },
    {
        source: "HUN",
        target: "UKR",
        type: "diplomatic",
        score: -0.3,
        note: "Hungarian minority; aid blocking"
    },
    // Greece & Cyprus
    {
        source: "GRC",
        target: "CYP",
        type: "diplomatic",
        score: 0.95,
        note: "near-unified diplomatic stance"
    },
    {
        source: "GRC",
        target: "FRA",
        type: "diplomatic",
        score: 0.6,
        note: "defense pact 2021"
    },
    {
        source: "GRC",
        target: "ITA",
        type: "diplomatic",
        score: 0.55,
        note: "Mediterranean partners"
    },
    // Turkey — complicated NATO member
    {
        source: "TUR",
        target: "GRC",
        type: "diplomatic",
        score: -0.5,
        note: "Aegean/Cyprus/maritime disputes"
    },
    {
        source: "TUR",
        target: "CYP",
        type: "diplomatic",
        score: -0.7,
        note: "Northern Cyprus occupation"
    },
    {
        source: "TUR",
        target: "DEU",
        type: "diplomatic",
        score: 0.3,
        note: "large diaspora; trade; frictions"
    },
    {
        source: "TUR",
        target: "GBR",
        type: "diplomatic",
        score: 0.4
    },
    {
        source: "TUR",
        target: "UKR",
        type: "diplomatic",
        score: 0.5,
        note: "Bayraktar drones; Black Sea interests"
    },
    {
        source: "TUR",
        target: "RUS",
        type: "diplomatic",
        score: 0.15,
        note: "balancing act; grain deal mediator"
    },
    {
        source: "TUR",
        target: "SWE",
        type: "diplomatic",
        score: 0.3,
        note: "improved after NATO accession deal"
    },
    {
        source: "TUR",
        target: "BGR",
        type: "diplomatic",
        score: 0.4
    },
    // Western Balkans & EU aspiration
    {
        source: "SRB",
        target: "RUS",
        type: "diplomatic",
        score: 0.5,
        note: "historic Slavic ally; no sanctions on Russia"
    },
    {
        source: "SRB",
        target: "KOS",
        type: "diplomatic",
        score: -0.9,
        note: "Serbia does not recognize Kosovo"
    },
    {
        source: "SRB",
        target: "FRA",
        type: "diplomatic",
        score: 0.2,
        note: "EU accession dialogue"
    },
    {
        source: "SRB",
        target: "DEU",
        type: "diplomatic",
        score: 0.3,
        note: "EU accession pathway"
    },
    {
        source: "SRB",
        target: "HUN",
        type: "diplomatic",
        score: 0.5,
        note: "Orbán-Vučić axis"
    },
    {
        source: "SRB",
        target: "HRV",
        type: "diplomatic",
        score: -0.2,
        note: "post-Yugoslav tensions"
    },
    {
        source: "SRB",
        target: "BIH",
        type: "diplomatic",
        score: -0.1,
        note: "Republika Srpska entity tensions"
    },
    {
        source: "MNE",
        target: "SRB",
        type: "diplomatic",
        score: 0.3
    },
    {
        source: "MKD",
        target: "GRC",
        type: "diplomatic",
        score: 0.4,
        note: "improved after Prespa Agreement"
    },
    {
        source: "MKD",
        target: "BGR",
        type: "diplomatic",
        score: -0.3,
        note: "language/identity dispute blocks EU progress"
    },
    {
        source: "ALB",
        target: "KOS",
        type: "diplomatic",
        score: 0.85,
        note: "ethnic Albanian affinity"
    },
    {
        source: "ALB",
        target: "MKD",
        type: "diplomatic",
        score: 0.5
    },
    {
        source: "KOS",
        target: "GBR",
        type: "diplomatic",
        score: 0.6,
        note: "UK recognizes Kosovo"
    },
    {
        source: "KOS",
        target: "DEU",
        type: "diplomatic",
        score: 0.5,
        note: "Germany recognizes Kosovo"
    },
    {
        source: "KOS",
        target: "FRA",
        type: "diplomatic",
        score: 0.5,
        note: "France recognizes Kosovo"
    },
    // Moldova & Eastern neighborhood
    {
        source: "MDA",
        target: "ROU",
        type: "diplomatic",
        score: 0.8,
        note: "shared language/culture; EU candidacy"
    },
    {
        source: "MDA",
        target: "UKR",
        type: "diplomatic",
        score: 0.6,
        note: "Transnistria shared concern"
    },
    {
        source: "MDA",
        target: "RUS",
        type: "diplomatic",
        score: -0.5,
        note: "Transnistria; Russian interference"
    },
    // Russia & Belarus — diplomatic isolation
    {
        source: "BLR",
        target: "RUS",
        type: "diplomatic",
        score: 0.9,
        note: "Union State; Lukashenko depends on Putin"
    },
    {
        source: "RUS",
        target: "FRA",
        type: "diplomatic",
        score: -0.7,
        note: "frozen since 2022 invasion"
    },
    {
        source: "RUS",
        target: "DEU",
        type: "diplomatic",
        score: -0.7,
        note: "frozen since 2022 invasion"
    },
    {
        source: "RUS",
        target: "GBR",
        type: "diplomatic",
        score: -0.85,
        note: "deeply hostile; Salisbury, war"
    },
    {
        source: "RUS",
        target: "POL",
        type: "diplomatic",
        score: -0.9,
        note: "historically adversarial; NATO frontline"
    },
    {
        source: "RUS",
        target: "EST",
        type: "diplomatic",
        score: -0.8,
        note: "perceived Russian threat"
    },
    {
        source: "RUS",
        target: "LVA",
        type: "diplomatic",
        score: -0.8
    },
    {
        source: "RUS",
        target: "LTU",
        type: "diplomatic",
        score: -0.8
    },
    {
        source: "RUS",
        target: "FIN",
        type: "diplomatic",
        score: -0.7,
        note: "border sealed; NATO accession 2023"
    },
    {
        source: "RUS",
        target: "SWE",
        type: "diplomatic",
        score: -0.6,
        note: "NATO accession 2024"
    },
    {
        source: "RUS",
        target: "NOR",
        type: "diplomatic",
        score: -0.6,
        note: "Arctic tensions"
    },
    {
        source: "RUS",
        target: "UKR",
        type: "diplomatic",
        score: -1,
        note: "full-scale war since Feb 2022"
    },
    {
        source: "BLR",
        target: "POL",
        type: "diplomatic",
        score: -0.8,
        note: "migrant weaponization; hostility"
    },
    {
        source: "BLR",
        target: "LTU",
        type: "diplomatic",
        score: -0.75,
        note: "border tensions"
    },
    {
        source: "BLR",
        target: "UKR",
        type: "diplomatic",
        score: -0.7,
        note: "invasion staging ground"
    },
    // Benelux
    {
        source: "BEL",
        target: "NLD",
        type: "diplomatic",
        score: 0.8,
        note: "Benelux; EU founding"
    },
    {
        source: "BEL",
        target: "LUX",
        type: "diplomatic",
        score: 0.8,
        note: "Benelux; EU founding"
    },
    {
        source: "NLD",
        target: "LUX",
        type: "diplomatic",
        score: 0.75
    },
    // Other
    {
        source: "ROU",
        target: "BGR",
        type: "diplomatic",
        score: 0.55,
        note: "Schengen accession together"
    },
    {
        source: "ROU",
        target: "POL",
        type: "diplomatic",
        score: 0.6,
        note: "Bucharest Nine; eastern flank"
    },
    {
        source: "ROU",
        target: "UKR",
        type: "diplomatic",
        score: 0.55,
        note: "grain corridor; Black Sea"
    },
    {
        source: "IRL",
        target: "GBR",
        type: "diplomatic",
        score: 0.55,
        note: "Common Travel Area"
    },
    {
        source: "CHE",
        target: "FRA",
        type: "diplomatic",
        score: 0.6
    },
    {
        source: "SVN",
        target: "HRV",
        type: "diplomatic",
        score: 0.5,
        note: "EU neighbors; border dispute resolved"
    },
    {
        source: "ISL",
        target: "DNK",
        type: "diplomatic",
        score: 0.7,
        note: "Nordic Council"
    },
    // ═══════════════════════════════════════════════════════════════════════════
    // MILITARY — NATO cooperation, defense pacts, conflicts, arms supply
    // ═══════════════════════════════════════════════════════════════════════════
    // NATO core cooperation
    {
        source: "FRA",
        target: "DEU",
        type: "military",
        score: 0.65,
        note: "Franco-German Brigade; FCAS project"
    },
    {
        source: "FRA",
        target: "GBR",
        type: "military",
        score: 0.75,
        note: "Lancaster House Treaties; nuclear powers"
    },
    {
        source: "DEU",
        target: "NLD",
        type: "military",
        score: 0.7,
        note: "integrated army corps"
    },
    {
        source: "DEU",
        target: "NOR",
        type: "military",
        score: 0.55
    },
    {
        source: "DEU",
        target: "POL",
        type: "military",
        score: 0.65,
        note: "NATO eastern flank"
    },
    {
        source: "GBR",
        target: "NOR",
        type: "military",
        score: 0.65,
        note: "JEF; North Sea/Arctic"
    },
    {
        source: "GBR",
        target: "EST",
        type: "military",
        score: 0.7,
        note: "UK leads NATO battlegroup in Estonia"
    },
    {
        source: "GBR",
        target: "POL",
        type: "military",
        score: 0.65
    },
    // Ukraine military support (key suppliers)
    {
        source: "POL",
        target: "UKR",
        type: "military",
        score: 0.9,
        note: "largest European arms/logistics hub"
    },
    {
        source: "GBR",
        target: "UKR",
        type: "military",
        score: 0.85,
        note: "early NLAW/Storm Shadow; training"
    },
    {
        source: "FRA",
        target: "UKR",
        type: "military",
        score: 0.65,
        note: "CAESAR howitzers; AMX-10; SCALP"
    },
    {
        source: "DEU",
        target: "UKR",
        type: "military",
        score: 0.6,
        note: "Leopard 2; IRIS-T; Gepard"
    },
    {
        source: "NOR",
        target: "UKR",
        type: "military",
        score: 0.55,
        note: "NASAMS; financial aid"
    },
    {
        source: "DNK",
        target: "UKR",
        type: "military",
        score: 0.55,
        note: "F-16 donation"
    },
    {
        source: "NLD",
        target: "UKR",
        type: "military",
        score: 0.6,
        note: "F-16 donation; Patriot"
    },
    {
        source: "SWE",
        target: "UKR",
        type: "military",
        score: 0.55,
        note: "CV90; Archer artillery"
    },
    {
        source: "FIN",
        target: "UKR",
        type: "military",
        score: 0.5,
        note: "artillery; defense packages"
    },
    {
        source: "EST",
        target: "UKR",
        type: "military",
        score: 0.7,
        note: "highest per-capita military aid"
    },
    {
        source: "LVA",
        target: "UKR",
        type: "military",
        score: 0.6
    },
    {
        source: "LTU",
        target: "UKR",
        type: "military",
        score: 0.65,
        note: "Lublin Triangle; drone coalition"
    },
    {
        source: "CZE",
        target: "UKR",
        type: "military",
        score: 0.6,
        note: "ammo initiative; T-72s"
    },
    {
        source: "TUR",
        target: "UKR",
        type: "military",
        score: 0.5,
        note: "Bayraktar TB2 drones"
    },
    {
        source: "ITA",
        target: "UKR",
        type: "military",
        score: 0.45,
        note: "SAMP/T air defense"
    },
    {
        source: "ESP",
        target: "UKR",
        type: "military",
        score: 0.35,
        note: "Leopard 2A4; Hawk"
    },
    {
        source: "ROU",
        target: "UKR",
        type: "military",
        score: 0.4,
        note: "logistics; training"
    },
    {
        source: "BGR",
        target: "UKR",
        type: "military",
        score: 0.3,
        note: "indirect support via ammo"
    },
    // Nordic defense (NORDEFCO)
    {
        source: "SWE",
        target: "FIN",
        type: "military",
        score: 0.8,
        note: "joint NATO accession; deep integration"
    },
    {
        source: "SWE",
        target: "NOR",
        type: "military",
        score: 0.7,
        note: "NORDEFCO"
    },
    {
        source: "SWE",
        target: "DNK",
        type: "military",
        score: 0.6
    },
    {
        source: "NOR",
        target: "FIN",
        type: "military",
        score: 0.65,
        note: "Arctic defense cooperation"
    },
    {
        source: "NOR",
        target: "DNK",
        type: "military",
        score: 0.6
    },
    // Baltic defense
    {
        source: "EST",
        target: "LVA",
        type: "military",
        score: 0.7,
        note: "Baltic trilateral defense"
    },
    {
        source: "EST",
        target: "LTU",
        type: "military",
        score: 0.7
    },
    {
        source: "LVA",
        target: "LTU",
        type: "military",
        score: 0.7
    },
    {
        source: "EST",
        target: "FIN",
        type: "military",
        score: 0.65,
        note: "Gulf of Finland control"
    },
    // Eastern flank buildup
    {
        source: "POL",
        target: "ROU",
        type: "military",
        score: 0.55,
        note: "Bucharest Nine; NATO eastern flank"
    },
    {
        source: "ROU",
        target: "BGR",
        type: "military",
        score: 0.45,
        note: "Black Sea NATO cooperation"
    },
    {
        source: "FRA",
        target: "GRC",
        type: "military",
        score: 0.6,
        note: "defense pact 2021; Rafale sale"
    },
    {
        source: "FRA",
        target: "ROU",
        type: "military",
        score: 0.45
    },
    {
        source: "ITA",
        target: "GRC",
        type: "military",
        score: 0.45,
        note: "Mediterranean security"
    },
    // Russia — military threats & war
    {
        source: "RUS",
        target: "UKR",
        type: "military",
        score: -1,
        note: "full-scale invasion since Feb 2022"
    },
    {
        source: "RUS",
        target: "POL",
        type: "military",
        score: -0.8,
        note: "NATO frontline; missile incidents"
    },
    {
        source: "RUS",
        target: "EST",
        type: "military",
        score: -0.8,
        note: "Baltic air/sea provocations"
    },
    {
        source: "RUS",
        target: "LVA",
        type: "military",
        score: -0.8,
        note: "Baltic threats"
    },
    {
        source: "RUS",
        target: "LTU",
        type: "military",
        score: -0.8,
        note: "Kaliningrad; Suwałki Gap"
    },
    {
        source: "RUS",
        target: "FIN",
        type: "military",
        score: -0.7,
        note: "1,340km border; NATO since 2023"
    },
    {
        source: "RUS",
        target: "NOR",
        type: "military",
        score: -0.6,
        note: "Arctic; submarine threat"
    },
    {
        source: "RUS",
        target: "GBR",
        type: "military",
        score: -0.8,
        note: "nuclear rhetoric; deep hostility"
    },
    {
        source: "RUS",
        target: "FRA",
        type: "military",
        score: -0.6
    },
    {
        source: "RUS",
        target: "DEU",
        type: "military",
        score: -0.6
    },
    {
        source: "RUS",
        target: "SWE",
        type: "military",
        score: -0.6,
        note: "Gotland; Baltic Sea standoff"
    },
    {
        source: "RUS",
        target: "ROU",
        type: "military",
        score: -0.55,
        note: "Black Sea drone incidents"
    },
    // Belarus — Russian military proxy
    {
        source: "BLR",
        target: "RUS",
        type: "military",
        score: 0.9,
        note: "joint drills; tactical nukes deployed"
    },
    {
        source: "BLR",
        target: "POL",
        type: "military",
        score: -0.7,
        note: "border military buildup"
    },
    {
        source: "BLR",
        target: "LTU",
        type: "military",
        score: -0.65,
        note: "border provocations"
    },
    {
        source: "BLR",
        target: "UKR",
        type: "military",
        score: -0.8,
        note: "invasion staging ground 2022"
    },
    // Turkey-Greece-Cyprus triangle
    {
        source: "TUR",
        target: "GRC",
        type: "military",
        score: -0.4,
        note: "Aegean dogfights; island disputes"
    },
    {
        source: "TUR",
        target: "CYP",
        type: "military",
        score: -0.6,
        note: "Northern Cyprus; drilling disputes"
    },
    {
        source: "GRC",
        target: "CYP",
        type: "military",
        score: 0.75,
        note: "Greek troops in Cyprus; joint exercises"
    },
    {
        source: "TUR",
        target: "RUS",
        type: "military",
        score: 0.2,
        note: "S-400 purchase; uneasy coexistence"
    },
    // Serbia — non-NATO
    {
        source: "SRB",
        target: "RUS",
        type: "military",
        score: 0.4,
        note: "BARS cooperation; no NATO membership"
    },
    {
        source: "SRB",
        target: "FRA",
        type: "military",
        score: 0.2,
        note: "Rafale acquisition discussions"
    },
    // Other NATO cooperation
    {
        source: "DEU",
        target: "FRA",
        type: "military",
        score: 0.65
    },
    {
        source: "DEU",
        target: "GBR",
        type: "military",
        score: 0.55
    },
    {
        source: "FRA",
        target: "ITA",
        type: "military",
        score: 0.5
    },
    {
        source: "FRA",
        target: "ESP",
        type: "military",
        score: 0.5
    },
    {
        source: "GBR",
        target: "DNK",
        type: "military",
        score: 0.55,
        note: "JEF member"
    },
    {
        source: "GBR",
        target: "NLD",
        type: "military",
        score: 0.6,
        note: "JEF; UK-NL Amphibious Force"
    },
    {
        source: "ITA",
        target: "ESP",
        type: "military",
        score: 0.4
    },
    {
        source: "ITA",
        target: "TUR",
        type: "military",
        score: 0.35,
        note: "NATO allies; Mediterranean"
    },
    {
        source: "POL",
        target: "LTU",
        type: "military",
        score: 0.7,
        note: "Suwałki Gap defense"
    },
    {
        source: "CHE",
        target: "AUT",
        type: "military",
        score: 0.3,
        note: "both neutral; limited cooperation"
    }
];
}),
"[project]/Desktop/geopolitix-graph/src/lib/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLinkId",
    ()=>getLinkId,
    "useFilteredLinks",
    ()=>useFilteredLinks,
    "useLinkScales",
    ()=>useLinkScales,
    "useNodesWithSize",
    ()=>useNodesWithSize,
    "useVisibleCountries",
    ()=>useVisibleCountries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/d3/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/d3-scale/src/pow.js [app-ssr] (ecmascript) <export sqrt as scaleSqrt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/d3-scale/src/linear.js [app-ssr] (ecmascript) <export default as scaleLinear>");
"use client";
;
;
function getLinkId(endpoint) {
    if (typeof endpoint === "string") return endpoint;
    return endpoint?.id ?? "";
}
function useFilteredLinks(links, relationType, selectedCountry) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = links.filter((l)=>l.type === relationType);
        if (selectedCountry) {
            filtered = filtered.filter((l)=>getLinkId(l.source) === selectedCountry || getLinkId(l.target) === selectedCountry);
        }
        return filtered;
    }, [
        links,
        relationType,
        selectedCountry
    ]);
}
function useVisibleCountries(filteredLinks, selectedCountry) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedCountry) {
            const countries = new Set();
            filteredLinks.forEach((l)=>{
                countries.add(getLinkId(l.source));
                countries.add(getLinkId(l.target));
            });
            return countries;
        }
        const hasConnections = filteredLinks.some((l)=>getLinkId(l.source) === selectedCountry || getLinkId(l.target) === selectedCountry);
        if (!hasConnections) return new Set();
        const countries = new Set([
            selectedCountry
        ]);
        filteredLinks.forEach((l)=>{
            if (getLinkId(l.source) === selectedCountry) countries.add(getLinkId(l.target));
            if (getLinkId(l.target) === selectedCountry) countries.add(getLinkId(l.source));
        });
        return countries;
    }, [
        selectedCountry,
        filteredLinks
    ]);
}
function useNodesWithSize(allCountries, visibleCountries, relationType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const metricKey = relationType === "geographic" ? "areaKm2" : relationType === "commercial" ? "gdpBillionUsd" : relationType === "military" ? "armyThousand" : undefined;
        const filteredNodes = allCountries.filter((n)=>visibleCountries.has(n.id));
        if (!metricKey) return filteredNodes.map((n)=>({
                ...n,
                val: 1
            }));
        const values = allCountries.map((n)=>n[metricKey]).filter((v)=>typeof v === "number");
        const min = Math.min(...values);
        const max = Math.max(...values);
        const scale = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__["scaleSqrt"]().domain([
            min,
            max
        ]).range([
            1,
            12
        ]);
        return filteredNodes.map((n)=>{
            const value = n[metricKey];
            const numeric = typeof value === "number" ? value : undefined;
            return {
                ...n,
                val: numeric !== undefined ? scale(numeric) : 1
            };
        });
    }, [
        allCountries,
        visibleCountries,
        relationType
    ]);
}
function useLinkScales() {
    const colorScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"]().domain([
            -1,
            0,
            1
        ]).range([
            "#e11d48",
            "#9ca3af",
            "#2563eb"
        ]), []);
    const widthScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__sqrt__as__scaleSqrt$3e$__["scaleSqrt"]().domain([
            0,
            1
        ]).range([
            0.5,
            6
        ]), []);
    return {
        colorScale,
        widthScale
    };
}
}),
"[project]/Desktop/geopolitix-graph/src/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RELATION_COLORS",
    ()=>RELATION_COLORS,
    "RELATION_LABELS",
    ()=>RELATION_LABELS
]);
const RELATION_LABELS = {
    geographic: "Geographic (borders)",
    commercial: "Commercial",
    diplomatic: "Diplomatic",
    military: "Military"
};
const RELATION_COLORS = {
    geographic: "#6b7280",
    commercial: "#059669",
    diplomatic: "#2563eb",
    military: "#dc2626"
};
}),
"[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ControlPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/earth.js [app-ssr] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/hand-coins.js [app-ssr] (ecmascript) <export default as HandCoins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/handshake.js [app-ssr] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/lib/types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const RELATION_ICONS = {
    geographic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
        lineNumber: 18,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    commercial: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__["HandCoins"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
        lineNumber: 19,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    diplomatic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
        lineNumber: 20,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    military: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
        lineNumber: 21,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))
};
function ControlPanel({ relationType, onRelationChange, selectedCountry, onCountryChange, countries }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchQuery) return countries;
        const q = searchQuery.toLowerCase();
        return countries.filter((c)=>c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q));
    }, [
        countries,
        searchQuery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: -20,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        transition: {
            duration: 0.3,
            ease: "easeOut"
        },
        className: "absolute left-3 top-3 z-10 w-72 rounded-xl border border-white/10 bg-gray-900/95 p-4 shadow-2xl backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                        className: "text-blue-400",
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-bold tracking-tight text-white",
                        children: "GeopolitixGraph"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 text-xs font-medium uppercase tracking-wider text-gray-400",
                children: "Relationship"
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 grid grid-cols-2 gap-1.5",
                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RELATION_LABELS"]).map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onRelationChange(type),
                        className: `flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${relationType === type ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-white/5 text-gray-300 hover:bg-white/10"}`,
                        children: [
                            RELATION_ICONS[type],
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RELATION_LABELS"][type].split(" (")[0]
                        ]
                    }, type, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 text-xs font-medium uppercase tracking-wider text-gray-400",
                children: "Focus Country"
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500",
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search countries...",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        className: "w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-8 pr-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500",
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500",
                        value: selectedCountry || "",
                        onChange: (e)=>onCountryChange(e.target.value || null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                className: "bg-gray-900",
                                children: "All Countries"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            filteredCountries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: c.id,
                                    className: "bg-gray-900",
                                    children: c.name
                                }, c.id, false, {
                                    fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            selectedCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                onClick: ()=>{
                    onCountryChange(null);
                    setSearchQuery("");
                },
                className: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-1.5 text-xs text-gray-300 hover:bg-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    " Clear selection"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/geopolitix-graph/src/components/Legend.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Legend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const NODE_SIZE_LABELS = {
    geographic: "Area (km²)",
    commercial: "GDP (billion USD)",
    military: "Active force (thousands)",
    diplomatic: "Uniform size"
};
function Legend({ relationType }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.3,
            delay: 0.1
        },
        className: "absolute bottom-3 left-3 z-10 rounded-xl border border-white/10 bg-gray-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-xs font-medium uppercase tracking-wider text-gray-400",
                children: "Legend"
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] text-gray-400 w-10",
                        children: "Score"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 w-28 rounded-full",
                        style: {
                            background: "linear-gradient(90deg, #e11d48, #9ca3af, #2563eb)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-16 justify-between text-[10px] text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "-1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] text-gray-400 w-10",
                        children: "Width"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] w-8 bg-gray-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[4px] w-8 bg-gray-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-500",
                        children: "= stronger magnitude"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] text-gray-400 w-10",
                        children: "Nodes"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-500",
                        children: [
                            "scaled by ",
                            NODE_SIZE_LABELS[relationType]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/Legend.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/lib/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/lib/hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function StatsPanel({ nodes, filteredLinks, selectedCountry, relationType, allCountries, onCountryChange }) {
    const country = allCountries.find((c)=>c.id === selectedCountry);
    const countryLinks = filteredLinks.filter((l)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(l.source) === selectedCountry || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(l.target) === selectedCountry);
    const positiveCount = countryLinks.filter((l)=>l.score > 0).length;
    const negativeCount = countryLinks.filter((l)=>l.score < 0).length;
    // Top connections for selected country
    const topConnections = [
        ...countryLinks
    ].sort((a, b)=>Math.abs(b.score) - Math.abs(a.score)).slice(0, 5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: 20,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        transition: {
            duration: 0.3,
            delay: 0.1
        },
        className: "absolute right-3 top-3 z-10 w-64 rounded-xl border border-white/10 bg-gray-900/95 p-4 shadow-2xl backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                        className: "text-blue-400",
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-white",
                        children: "Statistics"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 text-xs text-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Visible countries"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: nodes.length
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Active relationships"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: filteredLinks.length
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Layer"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "capitalize",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RELATION_LABELS"][relationType].split(" (")[0]
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedCountry && country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 border-t border-white/10 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: country.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onCountryChange(null),
                                        className: "rounded-md p-0.5 text-gray-500 hover:bg-white/10 hover:text-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 space-y-1 text-xs text-gray-400",
                                children: [
                                    country.areaKm2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Area"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: [
                                                    country.areaKm2.toLocaleString(),
                                                    " km²"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    country.gdpBillionUsd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "GDP"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: [
                                                    "$",
                                                    country.gdpBillionUsd.toLocaleString(),
                                                    "B"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this),
                                    country.armyThousand !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Military"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: [
                                                    country.armyThousand.toLocaleString(),
                                                    "k personnel"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                size: 12,
                                                className: "text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-emerald-300",
                                                children: [
                                                    positiveCount,
                                                    " positive"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 items-center gap-1 rounded-md bg-rose-500/10 px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                size: 12,
                                                className: "text-rose-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-rose-300",
                                                children: [
                                                    negativeCount,
                                                    " negative"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            topConnections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-500",
                                        children: "Strongest connections"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: topConnections.map((link, i)=>{
                                            const partnerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(link.source) === selectedCountry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(link.target) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(link.source);
                                            const partner = allCountries.find((c)=>c.id === partnerId);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onCountryChange(partnerId),
                                                className: "flex w-full items-center justify-between rounded-md px-2 py-1 text-xs hover:bg-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 10,
                                                                className: "text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 29
                                                            }, this),
                                                            partner?.name ?? partnerId
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono ${link.score > 0 ? "text-emerald-400" : link.score < 0 ? "text-rose-400" : "text-gray-400"}`,
                                                        children: [
                                                            link.score > 0 ? "+" : "",
                                                            link.score.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 144,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this),
                                    topConnections.some((l)=>l.note) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 space-y-1",
                                        children: topConnections.filter((l)=>l.note).map((l, i)=>{
                                            const partnerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(l.source) === selectedCountry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(l.target) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(l.source);
                                            const partner = allCountries.find((c)=>c.id === partnerId);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded bg-white/5 px-2 py-1 text-[10px] text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: [
                                                            partner?.name,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 31
                                                    }, this),
                                                    " ",
                                                    l.note
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                                lineNumber: 182,
                                                columnNumber: 29
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                        lineNumber: 170,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                                lineNumber: 130,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/geopolitix-graph/src/components/GraphCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GraphCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/lib/hooks.ts [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
const ForceGraph2D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/Desktop/geopolitix-graph/node_modules/react-force-graph-2d/dist/react-force-graph-2d.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function GraphCanvas({ nodes, links, allCountries, onNodeClick }) {
    const [hoveredNode, setHoveredNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const graphRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { colorScale, widthScale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLinkScales"])();
    // Configure d3 forces for more spacing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fg = graphRef.current;
        if (!fg) return;
        fg.d3Force("charge")?.strength(-250); // stronger repulsion (default ~ -30)
        fg.d3Force("link")?.distance(120); // longer resting link distance
        fg.d3Force("center")?.strength(0.05); // gentler centering pull
        fg.d3ReheatSimulation();
    }, [
        nodes,
        links
    ]);
    const nodeValAccessor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((n)=>n.val ?? 1, []);
    const linkColorAccessor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((l)=>colorScale(l.score), [
        colorScale
    ]);
    const linkWidthAccessor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((l)=>widthScale(Math.abs(l.score)), [
        widthScale
    ]);
    const getNodeTooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((n)=>{
        const node = n;
        const connections = links.filter((l)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(l.source) === node.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(l.target) === node.id);
        const stats = [
            node.areaKm2 ? `Area: ${node.areaKm2.toLocaleString()} km²` : "",
            node.gdpBillionUsd ? `GDP: $${node.gdpBillionUsd.toLocaleString()}B` : "",
            node.armyThousand ? `Military: ${node.armyThousand.toLocaleString()}k personnel` : ""
        ].filter(Boolean).join("\n");
        return `${node.name}\n${stats}\n\nConnections: ${connections.length}`;
    }, [
        links
    ]);
    const getLinkTooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((l)=>{
        const link = l;
        const sourceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(link.source);
        const targetId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkId"])(link.target);
        const source = allCountries.find((c)=>c.id === sourceId)?.name;
        const target = allCountries.find((c)=>c.id === targetId)?.name;
        const score = link.score;
        const relationship = score > 0.7 ? "Strong positive" : score > 0.3 ? "Positive" : score > -0.3 ? "Neutral" : score > -0.7 ? "Negative" : "Strong negative";
        return `${source} ↔ ${target}\n${relationship} (${score.toFixed(2)})${link.note ? "\n" + link.note : ""}`;
    }, [
        allCountries
    ]);
    const nodeCanvasObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node, ctx, globalScale)=>{
        const x = node.x;
        const y = node.y;
        if (x == null || y == null || !isFinite(x) || !isFinite(y)) return;
        const label = node.name;
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
        const gradient = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
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
    }, [
        hoveredNode,
        nodeValAccessor
    ]);
    const nodePointerAreaPaint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node, color, ctx)=>{
        const x = node.x;
        const y = node.y;
        if (x == null || y == null || !isFinite(x) || !isFinite(y)) return;
        ctx.fillStyle = color;
        const radius = Math.sqrt(nodeValAccessor(node)) * 6;
        ctx.beginPath();
        ctx.arc(x, y, radius + 4, 0, 2 * Math.PI);
        ctx.fill();
    }, [
        nodeValAccessor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ForceGraph2D, {
        ref: graphRef,
        graphData: {
            nodes,
            links
        },
        nodeLabel: getNodeTooltip,
        linkLabel: getLinkTooltip,
        nodeVal: nodeValAccessor,
        nodeRelSize: 6,
        linkColor: linkColorAccessor,
        linkWidth: linkWidthAccessor,
        backgroundColor: "#0f172a",
        nodeCanvasObject: nodeCanvasObject,
        nodePointerAreaPaint: nodePointerAreaPaint,
        onNodeHover: (node)=>{
            if (hoveredNode !== (node || null)) {
                setHoveredNode(node || null);
            }
        },
        onNodeClick: (node)=>{
            if (node) onNodeClick(node.id);
        },
        linkDirectionalParticles: 2,
        linkDirectionalParticleWidth: 2,
        linkDirectionalParticleSpeed: 0.005,
        linkDirectionalParticleColor: linkColorAccessor
    }, void 0, false, {
        fileName: "[project]/Desktop/geopolitix-graph/src/components/GraphCanvas.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/geopolitix-graph/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$data$2f$europe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/data/europe.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/lib/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/components/ControlPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$Legend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/components/Legend.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/components/StatsPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$GraphCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/src/components/GraphCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/geopolitix-graph/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function GraphApp() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [relationType, setRelationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("geographic");
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize from URL on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const typeParam = (searchParams.get("type") || "").toLowerCase();
        const countryParam = searchParams.get("country");
        const valid = [
            "geographic",
            "commercial",
            "diplomatic",
            "military"
        ];
        if (valid.includes(typeParam)) {
            setRelationType(typeParam);
        }
        if (countryParam) {
            setSelectedCountry(countryParam);
        }
        setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Sync state changes to URL (without reloading!)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isReady) return;
        const params = new URLSearchParams();
        params.set("type", relationType);
        if (selectedCountry) params.set("country", selectedCountry);
        router.replace(`/?${params.toString()}`, {
            scroll: false
        });
    }, [
        relationType,
        selectedCountry,
        router,
        isReady
    ]);
    // Derived data
    const filteredLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFilteredLinks"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$data$2f$europe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["europeLinks"], relationType, selectedCountry);
    const visibleCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVisibleCountries"])(filteredLinks, selectedCountry);
    const nodesWithSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNodesWithSize"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$data$2f$europe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["europeCountries"], visibleCountries, relationType);
    const handleRelationChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((type)=>{
        setRelationType(type);
    }, []);
    const handleCountryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSelectedCountry(id);
    }, []);
    const handleNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSelectedCountry((prev)=>prev === id ? null : id);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative w-screen h-screen bg-slate-950 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: !isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "absolute inset-0 z-50 flex items-center justify-center bg-slate-950",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "animate-spin text-blue-400",
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: "Loading graph…"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                relationType: relationType,
                onRelationChange: handleRelationChange,
                selectedCountry: selectedCountry,
                onCountryChange: handleCountryChange,
                countries: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$data$2f$europe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["europeCountries"]
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                nodes: nodesWithSize,
                filteredLinks: filteredLinks,
                selectedCountry: selectedCountry,
                relationType: relationType,
                allCountries: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$data$2f$europe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["europeCountries"],
                onCountryChange: handleCountryChange
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$Legend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                relationType: relationType
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 right-3 z-10 rounded-lg border border-white/5 bg-gray-900/60 px-3 py-1.5 text-[10px] text-gray-600 backdrop-blur-sm",
                children: "Click a node to focus · Click again to deselect"
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$components$2f$GraphCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                nodes: nodesWithSize,
                links: filteredLinks,
                allCountries: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$src$2f$data$2f$europe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["europeCountries"],
                onNodeClick: handleNodeClick
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-screen items-center justify-center bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "animate-spin text-blue-400",
                size: 32
            }, void 0, false, {
                fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
                lineNumber: 142,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
            lineNumber: 141,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$geopolitix$2d$graph$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphApp, {}, void 0, false, {
            fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/geopolitix-graph/src/app/page.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_geopolitix-graph_src_22ac1729._.js.map