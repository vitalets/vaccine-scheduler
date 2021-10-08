import * as React from 'react';
import { Helmet } from 'react-helmet';

export default function MyHelmet() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  );
}
