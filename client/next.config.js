/** @type {import('next').NextConfig} */
const { i18n } = require ('./next-i18next.config'); 

const nextConfig = {
	reactStrictMode: true,
	i18n,
}

module.exports = nextConfig


// module.exports = (phase, { defaultConfig }) => {
// 	return {
// 	  ...defaultConfig,
  
// 	  webpack: (config) => {
// 		config.resolve = {
// 		  ...config.resolve,
// 		  fallback: {
// 			"fs": false,
// 			"path": false,
// 			"os": false,
// 		  }
// 		}
// 		return config
// 	  },
// 	}
//   }