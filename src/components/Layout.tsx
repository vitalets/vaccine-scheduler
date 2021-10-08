import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import AppBar from './AppBar';
import Helmet from './Helmet';
import MDXProvider from './MDXProvider';
import Copyright from './Copyright';
import Container from '@mui/material/Container';

export default function Layout({ children }) {
  return (
    <>
      <Helmet />
      <MDXProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar/>
          <Container maxWidth="md">
          {children}
          <Copyright />
          </Container>
        </ThemeProvider>
      </MDXProvider>
    </>
  );
}


// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/styles';
// import { Helmet } from 'react-helmet';

// export default function Layout({ children, theme }) {
//     return (
//         <>
//             <Helmet>
//                 {/* To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element. */}
//                 <meta
//                     name="viewport"
//                     content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
//                 />
//             </Helmet>
//             <ThemeProvider theme={theme}>
//                 {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//                 <CssBaseline />
//                 {children}
//             </ThemeProvider>
//         </>
//     );
// }
