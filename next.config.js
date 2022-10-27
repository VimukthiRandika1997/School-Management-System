/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MONGO_URI:
      "mongodb+srv://SMS:sms123@sms-1.xsfh5gt.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
