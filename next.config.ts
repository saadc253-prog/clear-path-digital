import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three', 'vanta', '@splinetool/react-spline', '@splinetool/runtime'],
};

export default nextConfig;
