// gitprofile.config.js

const config = {
  github: {
    username: 'azka1415', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Azka Rafif Zaydan',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://azka1415.github.io',
    phone: '',
    email: 'rafifzaydan4@gmail.com',
  },
  skills: [
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Git',
    'Docker',
    'Tailwind',
    'Typescript',
  ],
  experiences: [
    {
      company: 'Teleakses Solusindo',
      position: 'Backend Engineer',
      from: 'February 2022',
      to: 'June 2022',
    },
    {
      company: 'PT eBdesk Teknologi',
      position: 'Backend Engineer',
      from: 'June 2022',
      to: 'present',
    },
  ],
  education: [
    {
      institution: 'SMKN 69 Jakarta',
      from: '2019',
      to: '2023',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
