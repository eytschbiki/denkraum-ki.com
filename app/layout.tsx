import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
