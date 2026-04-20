import Image from "next/image";
import Link from "next/link";

const leistungen = [
  {
    title: "KI-Strategie & Potenzialanalyse",
    description: "Wir analysieren Ihr Unternehmen systematisch auf KI-Potenziale und entwickeln eine maßgeschneiderte Roadmap – realistisch, umsetzbar und auf Ihre Ziele zugeschnitten.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Prozessautomatisierung mit KI",
    description: "Repetitive Aufgaben automatisieren, Fehler reduzieren und Ressourcen sinnvoller einsetzen. Von der Konzeption bis zur Implementierung begleite ich Sie Schritt für Schritt.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "KI-Workshops & Mitarbeiterschulungen",
    description: "Praxisnahe Workshops, die Ihr Team befähigen, KI-Tools sicher und effektiv einzusetzen – ohne Vorkenntnisse, direkt anwendbar im Arbeitsalltag.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Laufende KI-Beratung",
    description: "KI entwickelt sich schnell. Als dauerhafter Partner halte ich Sie auf dem aktuellen Stand, beobachte neue Werkzeuge und passe Ihre KI-Strategie kontinuierlich an.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const vorgehen = [
  { step: "01", title: "Erstgespräch", description: "Kostenloses Kennenlernen: Ihre Ziele, Herausforderungen und der aktuelle Stand Ihrer Digitalisierung." },
  { step: "02", title: "Analyse", description: "Systematische Bewertung Ihrer Prozesse und Identifikation konkreter KI-Potenziale mit messbarem Nutzen." },
  { step: "03", title: "Strategie", description: "Entwicklung eines klaren Fahrplans mit Prioritäten, Zeitplan und realistischen Erwartungen." },
  { step: "04", title: "Umsetzung", description: "Begleitung bei der Implementierung – von der Auswahl der richtigen Tools bis zur Schulung Ihres Teams." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0D47A1] to-[#1E88E5] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex items-center justify-between gap-8">
          <div className="max-w-2xl relative z-10">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
              KI-Beratung für den Mittelstand
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Künstliche Intelligenz –<br />
              <span className="text-blue-200">praktisch und verständlich</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Ich helfe KMU in der Region Siegen/NRW, KI sinnvoll einzusetzen:
              ohne Buzzwords, ohne Overengineering – mit echtem Mehrwert für Ihr Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="bg-white text-[#0D47A1] font-bold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-center cursor-pointer shadow-md"
              >
                Kostenloses Erstgespräch
              </Link>
              <Link
                href="/#leistungen"
                className="border-2 border-white/60 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 text-center cursor-pointer"
              >
                Leistungen entdecken
              </Link>
            </div>
          </div>
          <div className="hidden md:flex shrink-0 items-center justify-center">
            <Image
              src="/hero.png"
              alt=""
              width={340}
              height={340}
              className="opacity-80 mix-blend-screen select-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Vertrauen-Streifen */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { zahl: "20+", label: "Jahre Vertriebserfahrung" },
              { zahl: "KMU", label: "Fokus Mittelstand" },
              { zahl: "2026", label: "Zert. KI-Beauftragter (DEKRA)" },
              { zahl: "NRW", label: "Region Siegen" },
            ].map((item) => (
              <div key={item.label} className="py-2">
                <div className="text-2xl font-bold text-[#0D47A1]">{item.zahl}</div>
                <div className="text-sm text-gray-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-20 bg-[#f0f6fd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D47A1] mb-4">Meine Leistungen</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Von der ersten Idee bis zur laufenden Betreuung – praxisnah und auf Ihren Betrieb zugeschnitten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leistungen.map((l) => (
              <div
                key={l.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#1E88E5] transition-all duration-200 cursor-default"
              >
                <div className="w-12 h-12 bg-[#e8f1fb] rounded-lg flex items-center justify-center text-[#0D47A1] mb-4">
                  {l.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0D47A1] mb-2">{l.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{l.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-[#1E88E5] font-semibold text-sm uppercase tracking-wide">Über mich</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D47A1] mt-2 mb-5">Hanno Bender</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ich bin KI-Berater aus Mudersbach und bringe über 20 Jahre Erfahrung in Vertrieb und technischer Beratung mit. Diese Kombination erlaubt mir, KI-Lösungen nicht nur technisch zu verstehen, sondern sie auch betriebswirtschaftlich sinnvoll einzuordnen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Aktuell absolviere ich die Ausbildung zum zertifizierten KI-Beauftragten und schließe diese im Mai 2026 ab. Mein Fokus liegt auf dem Mittelstand – Unternehmen, die pragmatische Lösungen ohne unnötige Komplexität benötigen.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {["KI-Strategie", "Prozessautomatisierung", "Mittelstand", "20+ J. Erfahrung", "Region Siegen"].map((tag) => (
                  <span key={tag} className="bg-[#e8f1fb] text-[#0D47A1] text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/kontakt"
                className="inline-block bg-[#0D47A1] hover:bg-[#1E88E5] text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Kontakt aufnehmen
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-[#e8f1fb]">
                <Image
                  src="/foto.jpg"
                  alt="Hanno Bender – KI-Berater aus Mudersbach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorgehen */}
      <section id="vorgehen" className="py-20 bg-[#f0f6fd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D47A1] mb-4">Mein Vorgehen</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Strukturiert, transparent und auf Augenhöhe – so begleite ich Sie vom ersten Gespräch bis zur Umsetzung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorgehen.map((v) => (
              <div key={v.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 relative hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl font-black text-[#b8d0ef] mb-3 leading-none select-none">{v.step}</div>
                <h3 className="text-lg font-bold text-[#0D47A1] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D47A1] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bereit für den ersten Schritt?</h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">
            Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wo KI in Ihrem Unternehmen den größten Hebel hat.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-[#0D47A1] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer shadow-md text-lg"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
