import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
    font-weight: 600
  }

  p {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .ant-card-extra {
    padding: 12px 0;
  }

  .ant-tabs-ink-bar {
    background: #ffc329;
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    color: #ffc329;
  }
`;

export const theme = {
  colors: {
    dark: '#000',
    white: '#fff',
    gold: '#ffc329',
    green: '#7d7d7d',
  },
  spacing: 8,
};
