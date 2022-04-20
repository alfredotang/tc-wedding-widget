const composePlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = composePlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
  ],
  nextConfig
)
