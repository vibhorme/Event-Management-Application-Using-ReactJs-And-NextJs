import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primaryColor100: '#0368FF',
    light1: '#FAFBFD',
    light2: '#FFFFFF',
    light3: '#fbfbff',
    heidelbergRed100: '#EA3546',
  },
  gradient: {
    tealGreen: 'linear-gradient(99.32deg, #1EACB2 5.1%, #0DCCAA 98.86%)',
    primaryColor: 'linear-gradient(180deg, #1F1BF9 0%, #531DEB 100%)',
  },
  shadow: {
    elevation00: `inset 0px 0.5px 4px`,
    elevation01: `0px 1px 3px`,
    elevation02: `0px 1px 7px`,
    elevation03: `0px 2px 6px`,
    elevation04: `0px 3px 16px`,
    elevation05: `0px 16px 24px`,
    elevation06: `0px 7px 37px`,
    elevation07: `0px 3px 9px`,
  },
};

export default theme;
