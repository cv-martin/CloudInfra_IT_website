import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cloudinfrait.com"),
  title: {
    default: "CloudInfra IT | IT & Healthcare Staffing — USA",
    template: "%s | CloudInfra IT",
  },
  description:
    "CloudInfra IT places IT engineers, Healthcare professionals, and specialists across all major US industries. Permanent, Contract, Temp-to-Hire. Farmers Branch, TX.",
  keywords: [
    "IT staffing", "healthcare staffing", "cloud engineer jobs", "DevOps recruiter",
    "H-1B staffing", "engineering jobs USA", "contract IT jobs", "tech recruiter Texas",
    "CloudInfra IT", "staffing agency Farmers Branch",
  ],
  authors: [{ name: "CloudInfra IT", url: "https://www.cloudinfrait.com" }],
  creator: "CloudInfra IT",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cloudinfrait.com",
    siteName: "CloudInfra IT",
    title: "CloudInfra IT | IT & Healthcare Staffing — USA",
    description:
      "Domain-specialist staffing for IT, Healthcare, Engineering, and more. US-based. 48-hour shortlist SLA. Work-auth verified on every candidate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudInfra IT | IT & Healthcare Staffing",
    description: "Elite staffing for IT, Healthcare, and Engineering professionals across the USA.",
    creator: "@cloudinfrait",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
