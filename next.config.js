/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

// module.exports = () => {

//   if(phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//   env: {
//     mongodb_username: "Sam",
//     mongodb_password: "U00nqTFk3mNhBKFP",
//     mongodb_clustername: "my-blog",
//     mongodb_database: "my-next-blog",
//   },
// }
// };

//   return {
//   env: {
//     mongodb_username: "Sam",
//     mongodb_password: "U00nqTFk3mNhBKFP",
//     mongodb_clustername: "my-blog",
//     mongodb_database: "my-next-blog",
//   },
// }
// }
