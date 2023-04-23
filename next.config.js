/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "fakeimg.pl",
            "img.logoipsum.com",
            "127.0.0.1",
            "strapi-a0lw.onrender.com",
        ],
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig
