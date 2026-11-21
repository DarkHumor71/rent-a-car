import { loadEnvConfig } from "@next/env";
import type { NextConfig } from "next";
import { resolve } from "node:path";

loadEnvConfig(resolve(process.cwd(), "../.."));

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath: siteBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.localhost",
    "*.local",
  ],
};

export default nextConfig;
