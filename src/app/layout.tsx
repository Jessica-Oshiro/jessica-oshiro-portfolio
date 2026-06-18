import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessica Oshiro — Data & Process Automation Specialist",
  description:
    "I help businesses reduce manual work, eliminate bottlenecks, and turn raw data into clear decisions. 6+ years of experience in data analysis, process improvement, and automation.",
  openGraph: {
    title: "Jessica Oshiro — Data & Process Automation Specialist",
    description:
      "6+ years turning raw data into clear decisions and manual processes into automated systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
