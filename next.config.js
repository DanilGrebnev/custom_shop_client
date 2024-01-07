/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: process.env.PROTOCOL,
                hostname: process.env.HOSTNAME,
                port: process.env.BACKEND_PORT,
                pathname: process.env.IMG_PATHNAME,
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })
        return config
    },
}

module.exports = nextConfig
