import { useState } from 'react'
import { emissions, countries, companies } from '../data/emissions.js'

const columns = [
  { key: 'country', label: 'Land', numeric: false },
  { key: 'company', label: 'Unternehmen', numeric: false },
  { key: 'sector', label: 'Sektor', numeric: false },
  { key: 'emissions', label: 'CO₂ (Mt/Jahr)', numeric: true },
  { key: 'year', label: 'Jahr', numeric: true },
]

function EmissionsTable() {
  const [sortKey, setSortKey] = useState('emissions')
  const [sortDir, setSortDir] = useState('desc')

  const [search, setSearch] = useState('')
  const [countryFilter, setCountryFilter] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')

  // Klick auf Spaltenkopf
  function toggleSort(key) {
    if (key === sortKey) {
      // gleiche Spalte -> Richtung umkehren
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      // neue Spalte und danach sortieren, aufsteigend beginnen
      setSortKey(key)
      setSortDir('asc')
    }
  }

  function resetFilters() {
    setSearch('')
    setCountryFilter('')
    setCompanyFilter('')
  }

  const visibleRows = [...emissions]
    .filter((row) => {
      const term = search.trim().toLowerCase()

      const matchesSearch =
        term === '' ||
        row.country.toLowerCase().includes(term) ||
        row.company.toLowerCase().includes(term)

      const matchesCountry = countryFilter === '' || row.country === countryFilter
      const matchesCompany = companyFilter === '' || row.company === companyFilter

      return matchesSearch && matchesCountry && matchesCompany
    })
    .sort((a, b) => {
      const valueA = a[sortKey]
      const valueB = b[sortKey]

      let result
      if (typeof valueA === 'number') {
        result = valueA - valueB
      } else {
        result = valueA.localeCompare(valueB, 'de')
      }

      return sortDir === 'asc' ? result : -result
    })

  return (
    <section id="daten">
      <h2>CO₂-Emissionsdaten</h2>

      <div className="filters">
        <div className="filters__field">
          <label htmlFor="search">Suche</label>
          <input
            id="search"
            type="text"
            autoComplete="off"
            maxLength={100}
            placeholder="Land oder Unternehmen …"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="filters__field">
          <label htmlFor="country-filter">Land</label>
          <select
            id="country-filter"
            value={countryFilter}
            onChange={(event) => setCountryFilter(event.target.value)}
          >
            <option value="">Alle Länder</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="filters__field">
          <label htmlFor="company-filter">Unternehmen</label>
          <select
            id="company-filter"
            value={companyFilter}
            onChange={(event) => setCompanyFilter(event.target.value)}
          >
            <option value="">Alle Unternehmen</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <button type="button" className="btn-reset" onClick={resetFilters}>
          Filter zurücksetzen
        </button>
      </div>

      <p className="results-count" aria-live="polite">
        {visibleRows.length} Treffer
      </p>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={column.numeric ? 'num' : ''}
                  aria-sort={
                    sortKey === column.key
                      ? sortDir === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : 'none'
                  }
                >
                  <button
                    className="sort-btn"
                    onClick={() => toggleSort(column.key)}
                  >
                    {column.label}
                    {sortKey === column.key && (
                      <span aria-hidden="true">
                        {sortDir === 'asc' ? ' ▲' : ' ▼'}
                      </span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="no-results">
                  Keine Einträge gefunden.
                </td>
              </tr>
            ) : (
              visibleRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.country}</td>
                  <td>{row.company}</td>
                  <td>{row.sector}</td>
                  <td className="num">{row.emissions}</td>
                  <td className="num">{row.year}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default EmissionsTable
