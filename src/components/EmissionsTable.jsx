import { emissions } from '../data/emissions.js'

function EmissionsTable() {
  return (
    <section id="daten">
      <h2>CO₂-Emissionsdaten</h2>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Land</th>
              <th>Unternehmen</th>
              <th>Sektor</th>
              <th className="num">CO₂ (Mt/Jahr)</th>
              <th className="num">Jahr</th>
            </tr>
          </thead>
          <tbody>
            {emissions.map((row) => (
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
