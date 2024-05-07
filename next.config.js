const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://lrmn.is-a.dev/',
        permanent: true,
      },
      {
        source: '/virtualphotography',
        destination: 'https://lrmn-vp.site/',
        permanent: true,
      },
      {
        source: '/ohclips',
        destination: 'https://ohclips.vercel.app/',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://ohbot.is-a.fun/',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/romanroman.nya',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/lrmn7',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/31urnjrljaimmmf52sealktmdz3i/',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://id.pinterest.com/romanromannya',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://www.patreon.com/mewwme',
        permanent: true,
      },
      {
        source: '/madebytragic',
        destination: 'https://discord.gg/6EXgrmtkPX',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: true // Tambahkan opsi trailingSlash di sini
}; 
