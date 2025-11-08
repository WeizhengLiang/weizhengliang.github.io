export default defineAppConfig({
  global: {
    picture: {
      dark: '/img/profile.png',
      light: '/img/profile.png',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'weizhengliang@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-gmail',
        'to': '',
        'account': 'weizhengliang@gmail.com',
        'target': '_blank',
        'aria-label': 'Gmail address'
      },
      {
        'icon': 'i-el:linkedin',
        'to': 'https://www.linkedin.com/in/weizhengliang/',
        'target': '_blank',
        'aria-label': 'Linkedin address'
      },
      {
        'icon': 'i-el:phone',
        'to': '',
        'account': '305-505-8689',
        'target': '',
        'aria-label': 'Phone Number'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/weizhengliang',
        'target': '_blank',
        'aria-label': 'GitHub address'
      }
    ]
  }
})
