"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F6]">
      <div className="text-center">
        <div className="text-xl font-bold text-[#1E2D2A]">Redirecting to Login...</div>
      </div>
    </div>
  );
}