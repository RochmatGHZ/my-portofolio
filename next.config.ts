import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anmjbpwsrvavwkbvcxmp.supabase.co",
      },
    ],
  },
};

export default nextConfig;