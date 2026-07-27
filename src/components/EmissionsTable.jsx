import { useState } from 'react'
import { emissions } from '../data/emissions.js'

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

  // Kopie sortieren, damit die Originaldaten unverändert bleiben
  const sortedRows = [...emissions].sort((a, b) => {
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
            {sortedRows.map((row) => (
              <tr key={row.id}>
                <td>{row.country}</td>
                <td>{row.company}</td>
                <td>{row.sector}</td>
                <td className="num">{row.emissions}</td>
                <td className="num">{row.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default EmissionsTable
