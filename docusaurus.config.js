const path = require('path');

module.exports = {
  title: 'SITE_NAME',
  tagline: 'SITE_TAGLINE',
  url: 'https://your-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ORG_NAME', // Usually your GitHub org/user name.
  projectName: 'PROJECT_NAME', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SITE_NAME',
      logo: {
        alt: 'PROJECT_NAME',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      path.resolve(__dirname, '/Users/huijing/Sites/docusaurus-preset-kosong'),
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/YOUR_USER_NAME/YOUR_REPO',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
