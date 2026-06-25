import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Q Flow Systems | Precision Mechanical Seals for Industrial Applications",
  description: "Q Flow Systems manufactures and supplies high-quality mechanical seals for water treatment, chemical processing, oil & gas, food processing, pharmaceuticals, and manufacturing industries.",
  keywords: "mechanical seals, cartridge seals, metal bellows seals, industrial seals, Q Flow Systems",
  openGraph: {
    title: "Q Flow Systems | Precision Mechanical Seals",
    description: "Engineered for reliability, efficiency, and performance across critical industrial applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
