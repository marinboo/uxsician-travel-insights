/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/ip/:path*",
        destination: "http://ip-api.com/:path*",
      },
      {
        source: "/restcountries/:path*",
        destination: "https://restcountries.com/v3.1/:path*",
      },
      {
        source: "/freecurrencyapi/:path*",
        destination: "https://freecurrencyapi.net/api/v2/:path*",
      },
      {
        source: "/nager/:path*",
        destination: "https://date.nager.at/api/v3/:path*",
      },
    ];
  },
  reactStrictMode: true,
};
