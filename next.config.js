/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // The external domain for Google images
        port: "", // Leave this empty unless you are using a non-standard port
        pathname: "/**", // Allows all paths
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com", // The external domain for PNGTree images
        port: "", // Allows standard port
        pathname: "/**", // Allows all paths
      },
    ],
  },
};

module.exports = nextConfig;
