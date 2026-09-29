import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { TranslationProvider } from "@/context/TranslationContext";
import { AshokaEmblem } from "@/components/AshokaEmblem";

export const metadata: Metadata = {
  title: "ProcSync • Government Innovation Procurement Portal",
  description: "ProcSync — Government Innovation Procurement Portal. Don't repeat the pilot. Reuse the evidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#FAF8F6] text-[#1E2D2A] antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F6] text-[#1E2D2A] relative overflow-x-hidden selection:bg-[#D2B48C]/30 selection:text-[#1E2D2A]">
        <AppProvider>
          <TranslationProvider>
            {/* Subtle Institutional Ashoka Stambh Watermark (Fixed Background, 3-5% opacity) */}
            <AshokaEmblem watermark={true} size={540} />

            {children}

          </TranslationProvider>
        </AppProvider>
      </body>
    </html>
  );
}