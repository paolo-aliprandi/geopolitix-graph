import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set basePath if your repo is NOT <username>.github.io
  basePath: "/geopolitix-graph"
};

export default nextConfig;

