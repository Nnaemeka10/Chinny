import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";



export const metadata: Metadata = {
  title: "ChiniPhotos Eye Consult",
  description: "Eye Care, Therapy  Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="relative overflow-hidden hide-scrollbar">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        
        <Footer />
      
      </body>
    </html>
  );
}
