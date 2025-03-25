import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";



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
        </main>
        
        <Footer />
      
      </body>
    </html>
  );
}
