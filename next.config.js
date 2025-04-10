/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/works", // パス
        headers: [
          {
            key: "Basic-Auth",
            value: "13ba288l:a5RMseyk",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
