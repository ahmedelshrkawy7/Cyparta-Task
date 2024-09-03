// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sadakatcdn.cyparta.com",
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
