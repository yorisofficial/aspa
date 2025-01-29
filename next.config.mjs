/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "asiansurf.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "asiansurf.co",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
