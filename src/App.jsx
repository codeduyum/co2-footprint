import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <p>Hier entsteht die Übersicht der CO₂-Emissionen.</p>
      </main>

      <Footer />
    </div>
  )
}

export default App