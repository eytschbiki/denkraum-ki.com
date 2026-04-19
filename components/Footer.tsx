import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D47A1] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo.svg" alt="Denkraum KI" width={140} height={36} className="mb-3 rounded-lg" />
            <p className="text-blue-200 text-sm leading-relaxed">
              KI-Beratung für den Mittelstand.<br />
              Region Siegen/NRW.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Navigation</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/#leistungen" className="hover:text-white transition-colors cursor-pointer">Leistungen</Link></li>
              <li><Link href="/#ueber-mich" className="hover:text-white transition-colors cursor-pointer">Über mich</Link></li>
              <li><Link href="/#vorgehen" className="hover:text-white transition-colors cursor-pointer">Vorgehen</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors cursor-pointer">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/impressum" className="hover:text-white transition-colors cursor-pointer">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors cursor-pointer">Datenschutz</Link></li>
            </ul>
            <div className="mt-4 text-sm text-blue-200">
              <a href="mailto:info@denkraum-ki.com" className="hover:text-white transition-colors cursor-pointer">info@denkraum-ki.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-xs text-blue-300">
          © {new Date().getFullYear()} Denkraum KI – Hanno Bender. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
