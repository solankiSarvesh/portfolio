import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELITE | Full-Stack Architect & AI Systems Engineer Portfolio",
  description: "Explore the premium dark-tech portfolio of a elite developer showcasing cutting-edge AI products, high-performance dashboards, and responsive cybersecurity apps.",
  keywords: [
    "Next.js Portfolio",
    "Futuristic Web Design",
    "Framer Motion Portfolio",
    "Tailwind CSS Dark Mode",
    "AI Developer Portfolio",
    "Elite Engineering Dashboard",
  ],
  authors: [{ name: "Elite Developer" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} dark`} style={{ colorScheme: 'dark' }}>
      <body className="font-sans antialiased bg-cyber-black text-white bg-grid-pattern min-h-screen relative selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
