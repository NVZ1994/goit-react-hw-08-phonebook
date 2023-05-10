class Theme {
  constructor({ header, main, footer }) {
    this.header = header ?? {
      backgroundColor: '#317CD1',
      textColor: 'white',
    };
    this.main = main ?? {};
    this.footer = footer ?? {
      backgroundColor: '#317CD1',
      textColor: 'white',
    };
  }
}

export const light = new Theme({});

export const dark = new Theme({
  header: {
    backgroundColor: '#10243A',
    textColor: '#FFFFFF',
  },
  footer: {
    backgroundColor: '#10243A',
    textColor: '#FFFFFF',
  },
});

export function themeChanging(theme) {
  switch (theme) {
    case 'light':
      theme = 'dark';
      break;
    case 'dark':
      theme = 'light';
      break;
    default:
  }
}
