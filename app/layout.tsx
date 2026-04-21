import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denkraum KI – KI-Beratung für den Mittelstand",
  description: "KI-Strategie, Prozessautomatisierung und Workshops für KMU in der Region Siegen/NRW. Hanno Bender, zertifizierter KI-Manager.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
