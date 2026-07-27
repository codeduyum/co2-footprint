// Fiktive CO2-Emissionsdaten
// ACHTUNG: Alle Werte sind frei erfunden und dienen nur der Demonstration.
// emissions = ausgestoßene Megatonnen CO2 pro Jahr

export const emissions = [
  { id: 1, country: 'Deutschland', company: 'RheinEnergie AG', sector: 'Energie', emissions: 82.4, year: 2024 },
  { id: 2, country: 'Deutschland', company: 'StahlWerk Nord GmbH', sector: 'Industrie', emissions: 45.1, year: 2024 },
  { id: 3, country: 'USA', company: 'Continental Oil Corp.', sector: 'Öl & Gas', emissions: 154.9, year: 2024 },
  { id: 4, country: 'USA', company: 'Prairie Power Inc.', sector: 'Energie', emissions: 121.3, year: 2023 },
  { id: 5, country: 'China', company: 'Yangtze Steel Group', sector: 'Industrie', emissions: 210.5, year: 2024 },
  { id: 6, country: 'China', company: 'Red Dragon Energy', sector: 'Energie', emissions: 198.0, year: 2024 },
  { id: 7, country: 'Indien', company: 'Ganges Power Ltd.', sector: 'Energie', emissions: 143.8, year: 2024 },
  { id: 8, country: 'Brasilien', company: 'Amazonia Agro S.A.', sector: 'Landwirtschaft', emissions: 64.9, year: 2024 },
  { id: 9, country: 'Russland', company: 'Sibir Gas OAO', sector: 'Öl & Gas', emissions: 188.7, year: 2024 },
  { id: 10, country: 'Japan', company: 'Nippon Power KK', sector: 'Energie', emissions: 88.1, year: 2024 },
  { id: 11, country: 'Frankreich', company: 'Loire Énergie SA', sector: 'Energie', emissions: 39.6, year: 2024 },
  { id: 12, country: 'Kanada', company: 'Maple Tar Sands Inc.', sector: 'Öl & Gas', emissions: 99.2, year: 2023 },
]

// Eindeutige, alphabetisch sortierte Listen für die Auswahlfelder
export const countries = [...new Set(emissions.map((row) => row.country))].sort(
  (a, b) => a.localeCompare(b, 'de'),
)

export const companies = [...new Set(emissions.map((row) => row.company))].sort(
  (a, b) => a.localeCompare(b, 'de'),
)