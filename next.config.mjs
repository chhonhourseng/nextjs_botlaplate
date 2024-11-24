/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: false,
    images: {
        remotePatterns: [ 
            {
                hostname: "*",
                protocol: "http"
            },
            {
                hostname: "*",
                protocol: "https"
            }
        ]
    },
};

export default nextConfig;
