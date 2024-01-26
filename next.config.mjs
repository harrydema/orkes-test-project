/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pinkvilla.com",
      },
    ],
  },
};

export default nextConfig;
