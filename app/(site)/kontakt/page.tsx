import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Denkraum KI",
  description: "Nehmen Sie Kontakt mit Hanno Bender auf. Kostenloses Erstgespräch zur KI-Beratung für Ihr Unternehmen.",
};

export default function KontaktPage() {
  return (
    <section className="py-20 bg-[#f0f6fd]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0D47A1] mb-4">Kontakt aufnehmen</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Schreiben Sie mir – ich melde mich innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <form
            action="https://formsubmit.co/info@denkraum-ki.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Neue Kontaktanfrage – Denkraum KI" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://denkraum-ki.com/kontakt?gesendet=true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Max Mustermann"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-shadow text-sm"
                />
              </div>
              <div>
                <label htmlFor="unternehmen" className="block text-sm font-semibold text-gray-700 mb-1">
                  Unternehmen
                </label>
                <input
                  id="unternehmen"
                  name="unternehmen"
                  type="text"
                  autoComplete="organization"
                  placeholder="Musterfirma GmbH"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-shadow text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                E-Mail <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="max@musterfirma.de"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-shadow text-sm"
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700 mb-1">
                Telefon
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                autoComplete="tel"
                placeholder="+49 271 ..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-shadow text-sm"
              />
            </div>

            <div>
              <label htmlFor="interesse" className="block text-sm font-semibold text-gray-700 mb-1">
                Interesse
              </label>
              <select
                id="interesse"
                name="interesse"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-shadow text-sm bg-white cursor-pointer"
              >
                <option value="">Bitte wählen ...</option>
                <option value="ki-strategie">KI-Strategie & Potenzialanalyse</option>
                <option value="prozessautomatisierung">Prozessautomatisierung mit KI</option>
                <option value="workshop">KI-Workshop & Mitarbeiterschulung</option>
                <option value="laufende-beratung">Laufende KI-Beratung</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="nachricht" className="block text-sm font-semibold text-gray-700 mb-1">
                Nachricht <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                required
                rows={5}
                placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Situation ..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-shadow text-sm resize-none"
              />
            </div>

            <p className="text-xs text-gray-500">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
              <a href="/datenschutz" className="text-[#1E88E5] hover:underline cursor-pointer">Datenschutzerklärung</a> zu.
            </p>

            <button
              type="submit"
              className="w-full bg-[#0D47A1] hover:bg-[#1E88E5] text-white font-bold py-4 rounded-lg transition-colors duration-200 cursor-pointer text-base shadow-sm"
            >
              Nachricht senden
            </button>
          </form>
        </div>

        {/* Direkte Kontaktdaten */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <svg className="w-6 h-6 text-[#1E88E5] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-gray-500 mb-1">E-Mail</p>
            <a href="mailto:info@denkraum-ki.com" className="font-semibold text-[#0D47A1] hover:text-[#1E88E5] transition-colors cursor-pointer text-sm">
              info@denkraum-ki.com
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <svg className="w-6 h-6 text-[#1E88E5] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-gray-500 mb-1">Standort</p>
            <p className="font-semibold text-[#0D47A1] text-sm">Mudersbach, Region Siegen/NRW</p>
          </div>
        </div>
      </div>
    </section>
  );
}
