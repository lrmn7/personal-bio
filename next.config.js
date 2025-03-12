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
        port: '',
        pathname: '/**',
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
        destination: 'https://vp.lrmn.fun/',
        permanent: true,
      },
      {
        source: '/mewwme',
        destination: 'https://mewwme.is-a.fun/',
        permanent: true,
      },
      {
        source: '/somnia',
        destination: 'https://quest.somnia.network/referrals/0F6091D2',
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
      {
        source: '/gradientnetwork',
        destination: 'https://app.gradient.network/signup?code=6POEWC',
        permanent: true,
      },
      {
        source: '/blessnetwork',
        destination: 'https://bless.network/dashboard?ref=659RND',
        permanent: true,
      },
      {
        source: '/grass',
        destination: 'https://app.getgrass.io/register/?referralCode=mx1VtaZYLloZQ_b',
        permanent: true,
      },
      {
        source: '/nodepay',
        destination: 'https://app.nodepay.ai/register?ref=5yOkfU1ULNMBrvm',
        permanent: true,
      },
      {
        source: '/minionlab',
        destination: 'https://app.minionlab.ai/pc/instrumentPanels',
        permanent: true,
      },
      {
        source: '/dawn',
        destination: 'https://www.dawninternet.com/',
        permanent: true,
      },
      {
        source: '/teneoprotocol',
        destination: 'https://dashboard.teneo.pro/auth/signup',
        permanent: true,
      },
      {
        source: '/agnthub',
        destination: 'https://join.agnthub.ai/?ref=JGIP',
        permanent: true,
      },
      {
        source: '/distributeai',
        destination: 'https://r.distribute.ai/lrmn',
        permanent: true,
      },
      {
        source: '/kaisar',
        destination: 'https://zero.kaisar.io/register?ref=jfBRhT672',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: false // Tambahkan opsi trailingSlash di sini
}; 
