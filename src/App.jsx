import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import EmissionsTable from "./components/EmissionsTable.jsx"

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <EmissionsTable />
      </main>

      <Footer />
    </div>
  )
}

export default App