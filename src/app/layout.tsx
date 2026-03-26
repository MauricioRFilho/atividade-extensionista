import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inclusão Digital - Curitiba",
  description: "Plataforma acessível para capacitação digital de idosos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}
