import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== this is what enables static exports
  reactStrictMode: true,
};

export default nextConfig;
