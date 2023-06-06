/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: "akamai",
        path: "/",
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig
