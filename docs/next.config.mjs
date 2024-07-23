/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: (process.env.NODE_ENV === "production" ? "/dummyNodeProj" : undefined),
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;
