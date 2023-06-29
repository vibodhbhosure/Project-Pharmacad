/** @type {import('next').NextConfig} */
import { WithPWA } from 'next-pwa';

module.exports = WithPWA({
    trailingSlash: true,
    output: "export",
    images: {
        unoptimized: true,
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
})
