/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b460243fb04d4901a11b65f9f5c04bb6.r2.dev",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
