const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache.js');
const isProduction = process.env.NODE_ENV === 'production';
const env = {
  CLIENT_ID: 'my-value',
  CLIENT_SECRET: 'my-value',
};
 
const config = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },

  env: {
    GREETING: "Hello World",
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        // Adicione ou modifique seus aliases aqui
        '@': require('path').resolve(__dirname, 'src'),
      },
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    };
    return config;
  },
};

const nextConfig = withPWA({
  dest: 'public',
  disable: !isProduction,
  runtimeCaching
})(
  config
);
 
module.exports = nextConfig;
