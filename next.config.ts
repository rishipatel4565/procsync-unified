import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/pilots", destination: "/gov/pilot" },
      { source: "/evaluation", destination: "/gov/evaluator" },
      { source: "/challenges", destination: "/gov/challenge" },
      { source: "/passports", destination: "/gov/passport" },
      { source: "/replications", destination: "/gov/replication" },
    ];
  },
};

export default nextConfig;