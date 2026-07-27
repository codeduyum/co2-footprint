import { useState } from 'react'
import { emissions, countries, companies } from '../data/emissions.js'
import { sanitizeText } from '../utils/sanitize.js'
import { useLanguage } from '../i18n/useLanguage.js'

function EmissionsTable() {
  const [sortKey, setSortKey] = useState('emissions')
  const [sortDir, setSortDir] = useState('desc')

  const [search, setSearch] = useState('')
  const [countryFilter, setCountryFilter] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')

  const { t, tData, lang } = useLanguage()

  const columns = [
    { key: 'country', label: t('colCountry'), numeric: false },
    { key: 'company', label: t('colCompany'), numeric: false },
    { key: 'sector', label: t('colSector'), numeric: false },
    { key: 'emissions', label: t('colEmissions'), numeric: true },
    { key: 'year', label: t('colYear'), numeric: true },
  ]

  const visibleRows = [...emissions]
    .filter((row) => {
      const term = search.trim().toLowerCase()

      const matchesSearch =
        term === '' ||
        tData(row.country).toLowerCase().includes(term) || 
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
        result = tData(valueA).localeCompare(tData(valueB), lang)
      }

      return sortDir === 'asc' ? result : -result
    })

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

  return (
    <section id="daten">
      <h2>{t('tableHeading')}</h2>

      <div className="filters">
        <div className="filters__field">
          <label htmlFor="search">{t('filterSearch')}</label>
          <input
            id="search"
            type="text"
            autoComplete="off"
            maxLength={100}
            placeholder={t('filterPlaceholder')}
            value={search}
            onChange={(event) => setSearch(sanitizeText(event.target.value))}
          />
        </div>

        <div className="filters__field">
          <label htmlFor="country-filter">{t('colCountry')}</label>
          <select
            id="country-filter"
            value={countryFilter}
            onChange={(event) => setCountryFilter(event.target.value)}
          >
            <option value="">{t('allCountries')}</option>
            {countries.map((country) => (
                <option key={country} value={country}>
                    {tData(country)}
                </option>
            ))}
          </select>
        </div>

        <div className="filters__field">
          <label htmlFor="company-filter">{t('colCompany')}</label>
          <select
            id="company-filter"
            value={companyFilter}
            onChange={(event) => setCompanyFilter(event.target.value)}
          >
            <option value="">{t('allCompanies')}</option>
            {companies.map((company) => (
                <option key={company} value={company}>
                    {tData(company)}
                </option>
            ))}
          </select>
        </div>

        <button type="button" className="btn-reset" onClick={resetFilters}>
          {t('reset')}
        </button>
      </div>

      <p className="results-count" aria-live="polite">
        {visibleRows.length} {t('results')}
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
                  {t('noResults')}
                </td>
              </tr>
            ) : (
              visibleRows.map((row) => (
                <tr key={row.id}>
                  <td>{tData(row.country)}</td>
                  <td>{row.company}</td>
                  <td>{tData(row.sector)}</td>
                  <td className="num">
                    {row.emissions.toLocaleString(lang, { minimumFractionDigits: 1 })}
                    </td>
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
