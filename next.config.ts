import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "better-sqlite3"],
  logging: {
    browserToTerminal: true,
  },
};

export default nextConfig;
