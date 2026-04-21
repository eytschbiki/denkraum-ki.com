import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Denkraum KI",
};

export default function DatenschutzPage() {
  return (
    <section className="py-20 bg-[#f0f6fd]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#0D47A1] mb-8">Datenschutzerklärung</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-gray-800 mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Verantwortlicher</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Hanno Bender – Denkraum KI<br />
              [Straße und Hausnummer]<br />
              57555 Mudersbach<br />
              E-Mail: <a href="mailto:info@denkraum-ki.com" className="text-[#1E88E5] hover:underline">info@denkraum-ki.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold text-gray-800 mb-2">Kontaktformular</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung/vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Server-Log-Dateien</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Ihre Rechte</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Sie haben jederzeit das Recht auf:
            </p>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="text-gray-700 text-sm mt-3">
              Wenden Sie sich dazu an: <a href="mailto:info@denkraum-ki.com" className="text-[#1E88E5] hover:underline">info@denkraum-ki.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Beschwerderecht</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig für NRW ist der Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
            </p>
          </div>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">Stand: April 2026</p>
        </div>
      </div>
    </section>
  );
}
