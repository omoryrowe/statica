/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about/our-story", destination: "/about", permanent: true },
      { source: "/about/behind-statica", destination: "/about", permanent: true },
      { source: "/portfolios/web-software", destination: "/work", permanent: true },
      { source: "/portfolios/web-software/:path*", destination: "/work", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/portfolios/graphic-design",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/portfolios/graphic-design/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

module.exports = nextConfig;
