import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Denkraum KI",
};

export default function ImpressumPage() {
  return (
    <section className="py-20 bg-[#f0f6fd]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#0D47A1] mb-8">Impressum</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-700 mb-6">
            Hanno Bender<br />
            Denkraum KI<br />
            [Straße und Hausnummer]<br />
            57555 Mudersbach
          </p>

          <h2 className="text-lg font-bold text-gray-900 mb-2">Kontakt</h2>
          <p className="text-gray-700 mb-6">
            E-Mail: <a href="mailto:info@denkraum-ki.com" className="text-[#1E88E5] hover:underline">info@denkraum-ki.com</a>
          </p>

          <h2 className="text-lg font-bold text-gray-900 mb-2">Umsatzsteuer-ID</h2>
          <p className="text-gray-700 mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            [Ihre USt-IdNr., falls vorhanden]
          </p>

          <h2 className="text-lg font-bold text-gray-900 mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-gray-700 mb-6">
            Berufsbezeichnung: KI-Berater<br />
            Zuständige Kammer: [ggf. IHK Siegen]
          </p>

          <h2 className="text-lg font-bold text-gray-900 mb-2">Redaktionell verantwortlich</h2>
          <p className="text-gray-700 mb-6">
            Hanno Bender, Mudersbach
          </p>

          <h2 className="text-lg font-bold text-gray-900 mb-2">Haftung für Inhalte</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mb-2">Haftung für Links</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mb-2">Urheberrecht</h2>
          <p className="text-gray-700 text-sm">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </section>
  );
}
