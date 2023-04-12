/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "fakeimg.pl",
            "img.logoipsum.com",
            "127.0.0.1"
        ],
    },
}

module.exports = nextConfig
