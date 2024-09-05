/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://s3-sg-inventorymanagement.s3.ap-southeast-1.amazonaws.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
