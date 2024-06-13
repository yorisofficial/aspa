/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/academy",
  //       destination: "/",
  //       permanent: true,
  //     },
  //     {
  //       source: "/program",
  //       destination: "/",
  //       permanent: true,
  //     },
  //     {
  //       source: "/team",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
