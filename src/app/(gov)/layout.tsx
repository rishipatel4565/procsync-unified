import { Header } from "@/components/Header";
import { Suspense } from "react";

export default function GovLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div className="h-18 bg-white border-b border-[#EBDDDA]" />}>
        <Header />
      </Suspense>

      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        {children}
      </main>
    </>
  );
}