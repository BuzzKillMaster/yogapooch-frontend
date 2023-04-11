/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "fakeimg.pl",
            "img.logoipsum.com"
        ],
    },
}

module.exports = nextConfig
