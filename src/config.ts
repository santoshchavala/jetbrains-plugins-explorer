import { Config } from 'types';

const config: Config = {
  socialShare: {
    text: 'JetBrains Plugins Explorer is available!',
    url: 'https://plugins-explorer.hsz.mobi',
    isCollapsed: false,
  },
  options: {
    yesNoAny: [
      { label: 'Any', value: 'any' },
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
    downloadsFilter: [
      { label: '1+', value: 1 },
      { label: '1 K+', value: 1000 },
      { label: '100 K+', value: 100000 },
      { label: '1 M+', value: 1000000 },
    ],
  },
};

export default config;
