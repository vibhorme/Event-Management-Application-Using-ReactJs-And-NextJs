import React from 'react';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../theme';

const MyApp: React.FC = ({ Component, pageProps }: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
