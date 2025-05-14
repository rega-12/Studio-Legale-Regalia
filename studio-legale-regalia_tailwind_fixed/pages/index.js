
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Legale Regalia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 justify-center md:justify-start mb-4 md:mb-0">
                <Image
                  src="/logo.png"
                  alt="Logo Studio Legale Regalia"
                  width={64}
                  height={64}
                />
                <h1 className="text-2xl md:text-3xl font-bold bordeaux text-center md:text-left">
                  Studio Legale Regalia
                </h1>
              </div>
              <nav className="flex justify-center md:justify-end">
                <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm font-semibold text-center">
                  <li><a href="#chi-siamo" className="text-gray-700 hover:text-bordeaux">Chi siamo</a></li>
                  <li><a href="#aree" className="text-gray-700 hover:text-bordeaux">Aree di attività</a></li>
                  <li><a href="#contatti" className="text-gray-700 hover:text-bordeaux">Contatti</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <section className="relative bg-bordeaux pt-32 pb-16 text-white fade-in">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Competenza e Tutela Legale</h2>
            <p className="text-xl leading-relaxed">Dallo studio del caso alla difesa dei tuoi diritti.</p>
          </div>
        </section>

        <section className="bg-white py-8 text-center fade-in">
          <a href="#contatti" className="inline-block px-10 py-4 bg-bordeaux text-white font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-bordeaux border-2 border-bordeaux transition-all duration-300">
            Contattaci
          </a>
        </section>

        <section id="chi-siamo" className="py-8 bg-white fade-in">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-6 bordeaux text-center">Chi siamo</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Lo Studio Legale Regalia opera da anni con competenza e dedizione, offrendo consulenze legali specialistiche in molteplici settori. L'Avv. Alberto Regalia, titolare dello Studio, presta assistenza sia a privati sia ad imprese con approccio personalizzato e orientato alla risoluzione concreta delle problematiche.
            </p>
          </div>
        </section>

        <section id="aree" className="py-20 bg-gray-100 fade-in">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-10 bordeaux text-center">Aree di attività</h3>
            <div className="grid md:grid-cols-2 gap-10 text-lg justify-items-center text-center">
              <div>
                <ul className="space-y-4 text-gray-800">
                  <li><span className="font-bold">⚖️ Diritto Bancario</span></li>
                  <li><span className="font-bold">💼 Diritto del Lavoro</span></li>
                  <li><span className="font-bold">🏛️ Diritto Societario</span></li>
                  <li><span className="font-bold">📉 Diritto Concorsuale</span></li>
                  <li><span className="font-bold">🕵️ Normativa Whistleblowing e DPO</span></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-gray-800">
                  <li><span className="font-bold">🏢 Diritto Amministrativo</span></li>
                  <li><span className="font-bold">💰 Diritto Tributario e Fiscale</span></li>
                  <li><span className="font-bold">🖥️ Informatica e Nuove Tecnologie</span></li>
                  <li><span className="font-bold">🔍 Diritto Penale Commerciale</span></li>
                  <li><span className="font-bold">📸 Privacy, Immagine e Aste giudiziarie</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contatti" className="py-20 bg-white fade-in">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold mb-6 bordeaux">Contatti</h3>
            <p className="text-lg text-gray-800 mb-2">Email: <a href="mailto:alberto@studioregalia.org" className="text-bordeaux font-semibold">alberto@studioregalia.org</a></p>
            <p className="text-lg text-gray-800 mb-2">Telefono: <a href="tel:0332283950" className="text-bordeaux font-semibold">0332 283950</a></p>
            <p className="text-lg text-gray-800 mb-2">PEC: <a href="mailto:alberto.regalia@pec.it" className="text-bordeaux font-semibold">alberto.regalia@pec.it</a></p>
            <p className="text-lg text-gray-800 mb-6">P.IVA: 03896420126</p>
          </div>
        </section>

        <footer className="bg-bordeaux text-white text-center py-6 text-sm">
          <p>&copy; 2025 Studio Legale Regalia. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </>
  )
}
