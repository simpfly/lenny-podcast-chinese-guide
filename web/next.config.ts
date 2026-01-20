import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/episode/:slug',
        destination: '/episodes/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
