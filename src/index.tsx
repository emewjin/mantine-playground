import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily:
          'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif',
        colors: {
          brand: [
            '#00C471',
            '#00C471',
            '#00C471',
            '#00C471',
            '#00C471',
            '#00C471',
            '#00C471',
            '#00C471',
            '#00C471',
            '#00C471',
          ],
          primary: [
            '#EBFFF7',
            '#D5F5EB',
            '#B7EFD7',
            '#8BE4BE',
            '#00C471',
            '#00a65f',
            '#028c52',
            '#006a3d',
            '#07362A',
          ],
        },
        primaryColor: 'primary',
        primaryShade: { light: 4, dark: 8 },
      }}
      styles={{
        Button: (theme, params) => {
          if (params.size === 'lg') {
            return {
              root: { height: 42, padding: '0 30px' },
            };
          }
          if (params.size === 'sm') {
            return {
              root: { height: 22, padding: '0 30px' },
            };
          }
          return {
            root: { height: 30, padding: '0 30px' },
          };
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
