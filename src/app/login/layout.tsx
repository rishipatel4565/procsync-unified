import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ProcSync • Unified Login Gateway",
  description: "Unified Login Gateway for Government Innovation Procurement Portal",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#FAF8F6] text-[#1E2D2A] antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F6] text-[#1E2D2A] relative overflow-x-hidden selection:bg-[#D2B48C]/30 selection:text-[#1E2D2A]">
        <Suspense fallback={<div className="p-3 bg-[#2F4541] text-white text-xs text-center font-mono">Loading ProcSync Login...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}