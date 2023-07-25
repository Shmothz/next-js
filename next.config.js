/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePath: [path.join(__dirname), 'styles'],
    },
}

module.exports = nextConfig
