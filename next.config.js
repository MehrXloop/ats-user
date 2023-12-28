/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    optimizeFonts:true,
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"platform-lookaside.fbsbx.com"
            },
            {
                protocol:"https",
                hostname:"lh3.googleusercontent.com"
            },
            {
                protocol:"https",
                hostname:"media.licdn.com"
            }
        ],
        domains :["e7.pngegg.com"],
    }
}

module.exports = nextConfig