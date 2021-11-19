/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/nager/:path*",
        destination: "https://date.nager.at/api/v3/:path*",
      },
    ];
  },
  reactStrictMode: true,
};
